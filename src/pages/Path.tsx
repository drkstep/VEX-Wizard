import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { weeks } from "../data/exercises";
import { CheckCircle2, Circle, Lock, Star } from "lucide-react";
import { playClickSound } from "../utils/audio";
import { supabase } from "../lib/supabase";

export default function Path() {
  const navigate = useNavigate();
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [xp, setXp] = useState(0);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("vex_wizard_user");
    const name = localStorage.getItem("vex_wizard_name");
    if (!email) {
      navigate("/");
      return;
    }
    if (name) {
      setUserName(name);
    }

    const fetchProgress = async () => {
      try {
        const { data: progressData, error: progressError } = await supabase
          .from('progress')
          .select('*')
          .eq('email', email);

        if (!progressError && progressData) {
          const completedIds = progressData.map((p: any) => p.exercise_id);
          setCompletedExercises(completedIds);
          
          const totalScore = progressData.reduce((sum, row) => sum + (row.score || 0), 0);
          setXp(totalScore);
        }
      } catch (err) {
        console.error("Error fetching progress", err);
      }
    };

    fetchProgress();
  }, [navigate]);

  const handleExerciseClick = (exerciseId: string, isLocked: boolean) => {
    if (!isLocked) {
      playClickSound();
      navigate(`/exercise/${exerciseId}`);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[var(--color-bg-main)]/80 p-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-[var(--color-primary)]">VEX Wizard</h1>
          {userName && <span className="text-sm text-[var(--color-text-muted)] hidden sm:inline-block">Hola, {userName}</span>}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2 rounded-full bg-[var(--color-surface)] px-4 py-1.5 text-sm font-bold text-[var(--color-secondary)]">
            <Star className="h-4 w-4 fill-current" />
            <span>{xp} XP</span>
          </div>
          <button 
            onClick={() => {
              localStorage.removeItem("vex_wizard_user");
              localStorage.removeItem("vex_wizard_name");
              navigate("/");
            }}
            className="text-xs text-[var(--color-text-muted)] hover:text-white underline"
          >
            Salir
          </button>
        </div>
      </header>

      {/* Path */}
      <div className="mx-auto max-w-md px-4 py-8">
        <div className="space-y-12">
          {weeks.map((week, weekIndex) => {
            const isWeekLocked = weekIndex > 0 && !week.exercises.some(e => completedExercises.includes(e.id)) && !weeks[weekIndex - 1].exercises.every(e => completedExercises.includes(e.id));
            
            return (
              <motion.div
                key={week.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: weekIndex * 0.1 }}
                className="relative"
              >
                {/* Week Header */}
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold text-white">{week.title}</h2>
                  <p className="text-sm text-[var(--color-text-muted)]">{week.description}</p>
                </div>

                {/* Exercises Path */}
                <div className="relative flex flex-col items-center space-y-8">
                  {/* Connecting Line */}
                  <div className="absolute bottom-8 top-8 w-2 bg-[var(--color-surface)] rounded-full -z-10" />

                  {week.exercises.map((exercise, index) => {
                    const isCompleted = completedExercises.includes(exercise.id);
                    const isLocked = isWeekLocked || (index > 0 && !completedExercises.includes(week.exercises[index - 1].id));
                    const isCurrent = !isCompleted && !isLocked;

                    // Zig-zag pattern
                    const offset = index % 2 === 0 ? -40 : 40;

                    return (
                      <motion.div
                        key={exercise.id}
                        whileHover={!isLocked ? { scale: 1.1 } : {}}
                        whileTap={!isLocked ? { scale: 0.95 } : {}}
                        className="relative z-10"
                        style={{ transform: `translateX(${offset}px)` }}
                      >
                        <button
                          onClick={() => handleExerciseClick(exercise.id, isLocked)}
                          disabled={isLocked}
                          className={`flex h-20 w-20 items-center justify-center rounded-full border-4 shadow-lg transition-all ${
                            isCompleted
                              ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-[0_8px_0_0_#b34d00]"
                              : isCurrent
                              ? "border-[var(--color-secondary)] bg-[var(--color-surface)] text-[var(--color-secondary)] shadow-[0_8px_0_0_#008a99]"
                              : "border-[var(--color-surface)] bg-[var(--color-bg-main)] text-[var(--color-text-muted)] shadow-[0_8px_0_0_#1a1a1a]"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-10 w-10" />
                          ) : isLocked ? (
                            <Lock className="h-8 w-8" />
                          ) : (
                            <Star className="h-10 w-10 fill-[var(--color-secondary)]" />
                          )}
                        </button>
                        
                        {/* Tooltip/Label */}
                        <div className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-[var(--color-surface)] px-3 py-1.5 text-xs font-bold shadow-md ${
                          index % 2 === 0 ? "left-full ml-4" : "right-full mr-4"
                        }`}>
                          {exercise.title}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
