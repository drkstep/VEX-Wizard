import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Wand2 } from "lucide-react";
import { playStartSound } from "../utils/audio";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email.endsWith("@centro.edu.mx")) {
      setError("Solo los correos de @centro.edu.mx pueden acceder.");
      return;
    }

    if (email && name) {
      setIsLoading(true);
      try {
        const { data: existingUser, error: fetchError } = await supabase
          .from('users')
          .select('*')
          .eq('email', email)
          .single();

        let isNewUser = false;

        if (!existingUser) {
          isNewUser = true;
          const { error: insertError } = await supabase
            .from('users')
            .insert([{ email, name }]);
            
          if (insertError) {
            setError("Error al crear usuario en la base de datos.");
            setIsLoading(false);
            return;
          }
        }

        playStartSound();
        localStorage.setItem("vex_wizard_user", email);
        localStorage.setItem("vex_wizard_name", name);
        navigate("/onboarding", { state: { isNewUser } });
      } catch (err) {
        setError("Error de conexión con la base de datos.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-main)] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 text-center"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center">
            <img 
              src="/Huo.png" 
              alt="Huo" 
              referrerPolicy="no-referrer"
              className="w-full max-w-[300px] h-auto object-contain drop-shadow-[0_0_40px_rgba(255,109,0,0.4)]" 
            />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            VEX <span className="text-[var(--color-primary)]">Wizard</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)]">
            <b>Para la clase de Animacion Procedural 2D</b>
            <br />
            Creado por Santiago Vazquez
          </p>
        </div>

        <form onSubmit={handleStart} className="space-y-4">
          <Input
            type="text"
            placeholder="Escribe tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-center text-lg"
          />
          <Input
            type="email"
            placeholder="Ingresa tu correo de @centro.edu.mx"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-center text-lg"
          />
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
            {isLoading ? "Cargando..." : "Empezar la Aventura"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
