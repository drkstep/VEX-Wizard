import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Editor, { loader } from "@monaco-editor/react";
import { GoogleGenAI } from "@google/genai";
import { weeks, Exercise as ExerciseType } from "../data/exercises";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { ExerciseIllustration } from "../components/ExerciseIllustration";
import { ArrowLeft, CheckCircle2, Play, X, Loader2, Code2 } from "lucide-react";
import { playSubmitSound, playErrorSound, playSuccessSound } from "../utils/audio";
import { supabase } from "../lib/supabase";
import HuoCelebrateImg from "../assets/Huo-Celebrate.png";
import HuoGoldImg from "../assets/Huo-Gold.png";
import HuoAngryImg from "../assets/Huo-angry.png";

// Fix for Monaco Editor offsetNode bug in Firefox with version 0.55.x
loader.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/vs' } });

export default function Exercise() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [exercise, setExercise] = useState<ExerciseType | null>(null);
  const [code, setCode] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [codeValid, setCodeValid] = useState(false);
  const [correctCodeHtml, setCorrectCodeHtml] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [earnedXp, setEarnedXp] = useState(50);
  const [isIllustrationExpanded, setIsIllustrationExpanded] = useState(false);
  const [isAlreadyCompleted, setIsAlreadyCompleted] = useState(false);

  const [showFinalPopup, setShowFinalPopup] = useState(false);
  const [showPasteWarning, setShowPasteWarning] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("vex_wizard_user");
    if (!email) {
      navigate("/");
      return;
    }

    // Find exercise
    let found: ExerciseType | null = null;
    for (const week of weeks) {
      const ex = week.exercises.find((e) => e.id === id);
      if (ex) {
        found = ex;
        break;
      }
    }
    if (found) {
      setExercise(found);
      setCode(found.initialCode);
      
      // Fetch progress
      const checkProgress = async () => {
        try {
          const { data: progressData, error } = await supabase
            .from('progress')
            .select('*')
            .eq('email', email)
            .eq('exercise_id', id)
            .single();
            
          if (progressData && !error) {
            setIsAlreadyCompleted(true);
            setCode(progressData.final_code);
            setCodeValid(true);
            setFeedback("Ya completaste este ejercicio. Puedes repasar tu código.");
          }
        } catch (err) {
          console.error("Error fetching progress", err);
        }
      };
      
      checkProgress();
        
    } else {
      navigate("/path");
    }
  }, [id, navigate]);

  const handleEditorPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    setShowPasteWarning(true);
    playErrorSound();
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    // Intercept paste event at the DOM level (handles right-click and keyboard)
    if (editor.getDomNode) {
      const editorNode = editor.getDomNode();
      if (editorNode) {
        editorNode.addEventListener('paste', (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          setShowPasteWarning(true);
          playErrorSound();
        }, true); // true for capture phase
      }
    }

    // Intercept keyboard shortcuts directly in Monaco
    editor.onKeyDown((e: any) => {
      // Check for Ctrl+V or Cmd+V
      if ((e.ctrlKey || e.metaKey) && e.keyCode === monaco.KeyCode.KeyV) {
        e.preventDefault();
        e.stopPropagation();
        setShowPasteWarning(true);
        playErrorSound();
      }
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Código copiado al portapapeles. ¡Pégalo en tu Attribute Wrangle en Houdini!");
  };

  const handleValidateCode = async () => {
    if (!exercise) return;
    playSubmitSound();
    setIsValidating(true);
    setFeedback(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `
Eres un profesor experto en VEX (Houdini).
Un estudiante ha escrito el siguiente código VEX para resolver este ejercicio:
"${exercise.instruction}"

Código del estudiante:
\`\`\`c
${code}
\`\`\`

Evalúa si el código cumple con la instrucción.
Devuelve un JSON con el siguiente formato estricto:
{
  "isValid": boolean, // true si el código es correcto o muy cercano, false si está mal
  "feedback": string, // Un mensaje corto y motivador en español. Si está mal, da una pequeña pista.
  "correctCodeHtml": string, // (SÓLO si isValid es false) El código correcto formateado en HTML. Usa <span style="color: #FF6D00"> para atributos (ej. @P, @Cd, @ptnum), <span style="color: #B388FF"> para operadores (=, +, *), <span style="color: #82B1FF"> para funciones, y <span style="color: #69F0AE"> para números. Usa <br/> para saltos de línea y &nbsp; para indentación.
  "explanation": string // (SÓLO si isValid es false) Explicación de la respuesta correcta.
}
`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      let resultText = response.text;
      if (!resultText) {
        throw new Error("No response from Gemini");
      }
      
      // Clean markdown if present
      resultText = resultText.replace(/```json/g, "").replace(/```/g, "").trim();
      
      const data = JSON.parse(resultText);
      
      if (data.isValid) {
        setCodeValid(true);
        setFeedback(data.feedback);
        setCorrectCodeHtml(null);
        setExplanation(null);
        completeExercise();
      } else {
        playErrorSound();
        setCodeValid(false);
        setMistakesCount(prev => prev + 1);
        setFeedback(data.feedback || "El código no es correcto. Intenta de nuevo.");
        if (data.correctCodeHtml) setCorrectCodeHtml(data.correctCodeHtml);
        if (data.explanation) setExplanation(data.explanation);
      }
    } catch (error: any) {
      console.error(error);
      if (error.message && error.message.includes("API key not valid")) {
        setFeedback("La API Key de Gemini es inválida. Por favor, verifica tu configuración en el panel de Secrets.");
      } else {
        setFeedback("Error al validar el código. Por favor intenta de nuevo.");
      }
    } finally {
      setIsValidating(false);
    }
  };

  const completeExercise = async () => {
    playSuccessSound();
    
    if (id === "w8-e5") {
      setShowFinalPopup(true);
    } else {
      setShowSuccess(true);
    }
    
    if (isAlreadyCompleted) {
      setEarnedXp(0);
      return;
    }

    const finalXp = Math.max(10, 50 - mistakesCount * 10);
    setEarnedXp(finalXp);
    setIsAlreadyCompleted(true);

    const email = localStorage.getItem("vex_wizard_user");
    if (email) {
      try {
        const { error } = await supabase
          .from('progress')
          .insert([{
            email,
            exercise_id: id,
            score: finalXp,
            attempts: mistakesCount + 1,
            final_code: code
          }]);
          
        if (error) {
          console.error("Error saving progress", error);
        }
      } catch (err) {
        console.error("Error saving progress", err);
      }
    }
  };

  if (!exercise) return null;

  return (
    <div className="flex h-screen flex-col bg-[var(--color-bg-main)] text-white">
      {/* Top Bar */}
      <header className="flex items-center justify-between border-b border-white/10 bg-[var(--color-surface)] p-4">
        <button
          onClick={() => navigate("/path")}
          className="rounded-full p-2 text-[var(--color-text-muted)] hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold">{exercise.title}</h1>
        <div className="w-10" /> {/* Spacer */}
      </header>

      {/* Instruction */}
      <div className="bg-[var(--color-primary)]/10 p-6 border-b border-[var(--color-primary)]/20">
        <p className="text-lg font-medium text-[var(--color-primary)]">
          {exercise.instruction}
        </p>
      </div>

      {/* Main Content Area (Split) */}
      <div className="flex-1 overflow-hidden relative flex flex-row">
        {/* Left Pane: Editor & Correction */}
        <motion.div 
          className="relative flex flex-col h-full border-r border-white/10"
          initial={false}
          animate={{ width: isIllustrationExpanded ? "50%" : "75%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          onClickCapture={() => setIsIllustrationExpanded(false)}
        >
          {correctCodeHtml && !codeValid ? (
            <div className="absolute inset-0 z-10 bg-[var(--color-surface)] p-6 overflow-y-auto">
              <h3 className="text-xl font-bold text-red-400 mb-4">Respuesta Incorrecta (-10 XP)</h3>
              
              <div className="mb-6 bg-[#121212] p-4 rounded-xl border border-white/10 overflow-x-auto">
                <p className="text-sm text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">Código Correcto:</p>
                <div 
                  className="text-2xl font-mono leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: correctCodeHtml }} 
                />
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-[var(--color-text-muted)] mb-1 uppercase tracking-wider">Explicación:</p>
                <p className="text-lg text-white/90 leading-relaxed">{explanation}</p>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-xl">
                <p className="text-blue-200 font-medium">
                  Instrucción: Cierra este panel, escribe el código correcto en el editor y vuelve a validarlo.
                </p>
                <Button 
                  className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    setCorrectCodeHtml(null);
                    setExplanation(null);
                  }}
                >
                  Entendido, reintentar
                </Button>
              </div>
            </div>
          ) : (
            <div className="h-full w-full relative" onPaste={handleEditorPaste}>
              <Editor
                height="100%"
                defaultLanguage="c" // VEX is similar to C
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || "")}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 16,
                  fontFamily: "JetBrains Mono",
                  padding: { top: 20 },
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                }}
              />
            </div>
          )}
        </motion.div>

        {/* Right Pane: Illustration */}
        <motion.div
          className="relative h-full bg-[#0a0a0a] cursor-pointer overflow-hidden"
          initial={false}
          animate={{ width: isIllustrationExpanded ? "50%" : "25%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          onClick={() => setIsIllustrationExpanded(true)}
        >
          <ExerciseIllustration exerciseId={exercise.id} isExpanded={isIllustrationExpanded} />
        </motion.div>
      </div>

      {/* Bottom Actions */}
      <div className="border-t border-white/10 bg-[var(--color-surface)] p-4 space-y-4">
        <div className="flex gap-2">
          <Button
            variant="secondary"
            className="flex-1"
            onClick={handleCopyCode}
          >
            <Play className="mr-2 h-5 w-5" />
            Copiar para probar en Houdini
          </Button>
          
          <Button
            variant="default"
            className="flex-1"
            onClick={handleValidateCode}
            disabled={isValidating}
          >
            {isValidating ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Code2 className="mr-2 h-5 w-5" />}
            {isAlreadyCompleted ? "Re-Validar (Sin Puntos)" : "Validar Código"}
          </Button>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-sm"
            >
              <Card className="border-[var(--color-primary)] bg-[var(--color-surface)] shadow-[0_0_40px_rgba(255,109,0,0.3)]">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 flex h-64 w-64 items-center justify-center">
                    <img src={HuoCelebrateImg} alt="Huo Celebrate" className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(255,109,0,0.5)]" />
                  </div>
                  <h2 className="mb-2 text-3xl font-bold text-white">¡Script Validado!</h2>
                  <p className="mb-8 text-[var(--color-text-muted)]">
                    Has ganado +{earnedXp} XP. El t&iacute;o Duo estar&iacute;a orgulloso.
                  </p>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => navigate("/path")}
                  >
                    Continuar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Block 1 Modal */}
      <AnimatePresence>
        {showFinalPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-full max-w-md"
            >
              <Card className="border-[var(--color-primary)] bg-[var(--color-surface)] shadow-[0_0_80px_rgba(255,109,0,0.5)]">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 flex h-48 w-48 items-center justify-center">
                    <img src={HuoGoldImg} alt="Huo Gold" className="h-full w-full object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]" />
                  </div>
                  <h2 className="mb-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    ¡Terminaste el Bloque 1!
                  </h2>
                  <h3 className="mb-4 text-2xl font-bold text-white">¡Felicidades!</h3>
                  <p className="mb-8 text-lg text-[var(--color-text-muted)]">
                    Has completado todos los ejercicios y ganado +{earnedXp} XP. Eres un verdadero VEX Wizard.
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg h-14"
                    onClick={() => navigate("/path")}
                  >
                    Volver al Mapa
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Paste Warning Modal */}
      <AnimatePresence>
        {showPasteWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-sm"
            >
              <Card className="border-red-500 bg-[var(--color-surface)] shadow-[0_0_40px_rgba(239,68,68,0.3)]">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 flex h-64 w-64 items-center justify-center">
                    <img src={HuoAngryImg} alt="Huo Angry" className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
                  </div>
                  <h2 className="mb-2 text-3xl font-bold text-white">¡Nu-uh!</h2>
                  <p className="mb-8 text-[var(--color-text-muted)]">
                    No puedes hacer eso, intenta escribiendo el código directamente.
                  </p>
                  <Button
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                    size="lg"
                    onClick={() => setShowPasteWarning(false)}
                  >
                    Entendido
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
