import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { weeks } from "../data/exercises";
import { CheckCircle2, Lock, Star, Trophy, ShieldCheck, Shield, Loader2 } from "lucide-react";
import { playClickSound } from "../utils/audio";
import { supabase } from "../lib/supabase";

interface AdminUser {
  email: string;
  name: string;
  is_admin: boolean;
}

const ROOT_ADMIN = "svazquez@centro.edu.mx";

export default function Path() {
  const navigate = useNavigate();
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [xp, setXp] = useState(0);
  const [userName, setUserName] = useState("");

  const [isAdmin] = useState(() => localStorage.getItem("vex_wizard_admin") === "true");
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [allUsers, setAllUsers] = useState<AdminUser[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [togglingEmail, setTogglingEmail] = useState<string | null>(null);

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

  const openAdminPanel = async () => {
    setShowAdminPanel(true);
    setLoadingUsers(true);
    const { data } = await supabase
      .from("users")
      .select("email, name, is_admin")
      .order("name");
    if (data) setAllUsers(data as AdminUser[]);
    setLoadingUsers(false);
  };

  const toggleAdmin = async (targetEmail: string, currentIsAdmin: boolean) => {
    if (targetEmail === ROOT_ADMIN) return;
    setTogglingEmail(targetEmail);
    const { error } = await supabase
      .from("users")
      .update({ is_admin: !currentIsAdmin })
      .eq("email", targetEmail);
    if (!error) {
      setAllUsers((prev) =>
        prev.map((u) =>
          u.email === targetEmail ? { ...u, is_admin: !currentIsAdmin } : u
        )
      );
    }
    setTogglingEmail(null);
  };

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
        <div className="flex items-center gap-3">
          {isAdmin && (
            <button
              onClick={openAdminPanel}
              className="flex items-center gap-1.5 rounded-full bg-[var(--color-surface)] px-3 py-1.5 text-sm font-bold text-[var(--color-primary)] hover:bg-white/10 transition-colors"
              title="Panel de Administración"
            >
              <ShieldCheck className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => { playClickSound(); navigate("/scoreboard"); }}
            className="flex items-center gap-1.5 rounded-full bg-[var(--color-surface)] px-3 py-1.5 text-sm font-bold text-yellow-400 hover:bg-white/10 transition-colors"
            title="Tabla de líderes"
          >
            <Trophy className="h-4 w-4" />
          </button>
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
            const isWeekLocked = isAdmin ? false : (weekIndex > 0 && !week.exercises.some(e => completedExercises.includes(e.id)) && !weeks[weekIndex - 1].exercises.every(e => completedExercises.includes(e.id)));
            
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
                    const isLocked = isAdmin ? false : (isWeekLocked || (index > 0 && !completedExercises.includes(week.exercises[index - 1].id)));
                    const isCurrent = !isCompleted && !isLocked;

                    // Completed exercises are centered; pending ones zig-zag
                    const offset = isCompleted ? 0 : (index % 2 === 0 ? -40 : 40);

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
      {/* Admin Panel Modal */}
      <AnimatePresence>
        {showAdminPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setShowAdminPanel(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              className="w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl border border-[var(--color-primary)]/40 bg-[var(--color-surface)] shadow-[0_0_40px_rgba(255,109,0,0.2)] overflow-hidden">
                {/* Modal header */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div className="flex items-center gap-2 text-[var(--color-primary)]">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="font-bold text-lg">Panel de Administración</span>
                  </div>
                  <button
                    onClick={() => setShowAdminPanel(false)}
                    className="text-[var(--color-text-muted)] hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* User list */}
                <div className="max-h-[60vh] overflow-y-auto px-4 py-4 space-y-2">
                  {loadingUsers ? (
                    <div className="flex items-center justify-center gap-2 py-8 text-[var(--color-text-muted)]">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span className="text-sm">Cargando usuarios...</span>
                    </div>
                  ) : allUsers.length === 0 ? (
                    <p className="text-center text-sm text-[var(--color-text-muted)] py-8">No hay usuarios registrados.</p>
                  ) : (
                    allUsers.map((user) => {
                      const isRoot = user.email === ROOT_ADMIN;
                      const isToggling = togglingEmail === user.email;
                      return (
                        <div
                          key={user.email}
                          className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                            isRoot
                              ? "border-[var(--color-primary)]/40 bg-[var(--color-primary)]/5"
                              : "border-white/10 bg-[var(--color-bg-main)]"
                          }`}
                        >
                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-white truncate">
                              {user.name}
                              {isRoot && (
                                <span className="ml-2 text-xs font-normal text-[var(--color-primary)]">super admin</span>
                              )}
                            </p>
                            <p className="text-xs text-[var(--color-text-muted)] truncate">{user.email}</p>
                          </div>

                          {/* Toggle button */}
                          {isRoot ? (
                            <div className="flex items-center gap-1 text-[var(--color-primary)]">
                              <ShieldCheck className="h-4 w-4" />
                            </div>
                          ) : (
                            <button
                              onClick={() => toggleAdmin(user.email, user.is_admin)}
                              disabled={isToggling}
                              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                                user.is_admin
                                  ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-red-500/20 hover:text-red-400"
                                  : "bg-white/5 text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/20 hover:text-[var(--color-primary)]"
                              }`}
                            >
                              {isToggling ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              ) : user.is_admin ? (
                                <ShieldCheck className="h-3.5 w-3.5" />
                              ) : (
                                <Shield className="h-3.5 w-3.5" />
                              )}
                              {user.is_admin ? "Admin" : "Sin rol"}
                            </button>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
