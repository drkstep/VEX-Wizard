import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Trophy, Star, ArrowLeft } from "lucide-react";
import { supabase } from "../lib/supabase";

interface ScoreboardEntry {
  email: string;
  name: string;
  totalXP: number;
  exercisesCompleted: number;
}

export default function Scoreboard() {
  const navigate = useNavigate();
  const [entries, setEntries] = useState<ScoreboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("vex_wizard_user");
    if (!email) {
      navigate("/");
      return;
    }
    setCurrentUserEmail(email);

    const fetchScoreboard = async () => {
      try {
        const [{ data: progressData }, { data: usersData }] = await Promise.all([
          supabase.from("progress").select("email, score"),
          supabase.from("users").select("email, name"),
        ]);

        if (!progressData || !usersData) return;

        const scoreMap: Record<string, { totalXP: number; exercisesCompleted: number }> = {};
        progressData.forEach((row: any) => {
          if (!scoreMap[row.email]) scoreMap[row.email] = { totalXP: 0, exercisesCompleted: 0 };
          scoreMap[row.email].totalXP += row.score || 0;
          scoreMap[row.email].exercisesCompleted += 1;
        });

        const board: ScoreboardEntry[] = usersData.map((user: any) => ({
          email: user.email,
          name: user.name,
          totalXP: scoreMap[user.email]?.totalXP || 0,
          exercisesCompleted: scoreMap[user.email]?.exercisesCompleted || 0,
        }));

        board.sort((a, b) => b.totalXP - a.totalXP);
        setEntries(board);
      } catch (err) {
        console.error("Error fetching scoreboard", err);
      } finally {
        setLoading(false);
      }
    };

    fetchScoreboard();
  }, [navigate]);

  const rankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[var(--color-bg-main)]/80 p-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/path")}
            className="flex items-center text-[var(--color-text-muted)] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-bold text-[var(--color-primary)]">VEX Wizard</h1>
        </div>
        <div className="flex items-center gap-2 text-yellow-400">
          <Trophy className="h-5 w-5" />
          <span className="font-bold text-sm">Tabla de Líderes</span>
        </div>
      </header>

      <div className="mx-auto max-w-md px-4 py-8">
        {/* Title */}
        <div className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Trophy className="h-14 w-14 text-yellow-400 mx-auto mb-3" />
          </motion.div>
          <h2 className="text-2xl font-bold">Tabla de Líderes</h2>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">¿Quién lidera el camino VEX?</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center gap-3 pt-12 text-[var(--color-text-muted)]">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-primary)] border-t-transparent" />
            <span className="text-sm">Cargando...</span>
          </div>
        ) : entries.length === 0 ? (
          <p className="text-center text-[var(--color-text-muted)]">Aún no hay resultados.</p>
        ) : (
          <div className="space-y-3">
            {entries.map((entry, index) => {
              const rank = index + 1;
              const isCurrentUser = entry.email === currentUserEmail;

              return (
                <motion.div
                  key={entry.email}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={`flex items-center gap-4 rounded-2xl border px-4 py-3 transition-colors ${
                    isCurrentUser
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10"
                      : "border-white/10 bg-[var(--color-surface)]"
                  }`}
                >
                  {/* Rank */}
                  <span className="w-8 text-center text-lg font-bold">
                    {rankBadge(rank)}
                  </span>

                  {/* Name & exercises */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-bold truncate ${
                        isCurrentUser ? "text-[var(--color-primary)]" : "text-white"
                      }`}
                    >
                      {entry.name}
                      {isCurrentUser && (
                        <span className="ml-2 text-xs font-normal text-[var(--color-text-muted)]">
                          (tú)
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {entry.exercisesCompleted}{" "}
                      ejercicio{entry.exercisesCompleted !== 1 ? "s" : ""} completado
                      {entry.exercisesCompleted !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* XP badge */}
                  <div className="flex items-center gap-1 rounded-full bg-[var(--color-bg-main)] px-3 py-1 text-sm font-bold text-[var(--color-secondary)]">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span>{entry.totalXP}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
