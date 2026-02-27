import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "../components/ui/Button";
import { playClickSound } from "../utils/audio";

const returningMessages = [
  "¿Ya de regreso? \n ¡Sigamos practicando!",
  "¡Qué bueno que regresaste! \n Empecemos el repaso de hoy",
  "¡Hola de nuevo! \n Huo está listo para más VEX.",
  "¡Otra vez por aquí! \n A seguir programando en Houdini.",
  "¡Qué gusto verte! \n Vamos a darle a esos nodos.",
  "¡Bienvenido de vuelta! \n El código nos espera."
];

export default function Onboarding() {
  const navigate = useNavigate();
  const location = useLocation();
  const isNewUser = location.state?.isNewUser || false;
  const [timeLeft, setTimeLeft] = useState(8);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isNewUser) {
      setMessage("¡Bienvenido, yo soy Huo! ¿Listo para repasar lo visto sobre Houdini en clase con Santiago?");
    } else {
      const randomMsg = returningMessages[Math.floor(Math.random() * returningMessages.length)];
      setMessage(randomMsg);
    }
  }, [isNewUser]);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/path");
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const handleContinue = () => {
    playClickSound();
    navigate("/path");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-main)] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 text-center"
      >
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center justify-center">
            <img 
              src="/Huo-Intro.png" 
              alt="Huo Intro" 
              className="w-full max-w-[300px] h-auto object-contain drop-shadow-[0_0_40px_rgba(255,109,0,0.4)]" 
            />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl leading-relaxed">
            {message}
          </h2>
        </div>

        <Button size="lg" className="w-full text-lg h-14" onClick={handleContinue}>
          Hacer lección de hoy ({timeLeft}s)
        </Button>
      </motion.div>
    </div>
  );
}
