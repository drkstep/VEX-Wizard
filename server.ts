import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import { dbApi } from "./database.ts";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// API Routes
app.post("/api/login", async (req, res) => {
  const { email, name } = req.body;
  
  if (!email || !email.endsWith("@centro.edu.mx")) {
    return res.status(400).json({ error: "Solo los correos de @centro.edu.mx pueden acceder." });
  }
  
  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido." });
  }

  const existingUser = await dbApi.getUser(email);
  const isNewUser = !existingUser;

  if (isNewUser) {
    await dbApi.createUser(email, name);
  }
  
  const user = await dbApi.getUser(email);
  res.json({ user, isNewUser });
});

app.get("/api/progress/:email", async (req, res) => {
  const { email } = req.params;
  const progress = await dbApi.getProgress(email);
  const totalScore = await dbApi.getTotalScore(email);
  res.json({ progress, totalScore });
});

app.post("/api/progress/:email", async (req, res) => {
  const { email } = req.params;
  const { exerciseId, score, attempts, finalCode } = req.body;
  
  if (!exerciseId || score === undefined || attempts === undefined || !finalCode) {
    return res.status(400).json({ error: "Faltan datos requeridos." });
  }

  await dbApi.saveProgress(email, exerciseId, score, attempts, finalCode);
  res.json({ success: true });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from the dist directory in production
    app.use(express.static(path.join(__dirname, "dist")));
    
    // Fallback to index.html for SPA routing
    app.use((req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
