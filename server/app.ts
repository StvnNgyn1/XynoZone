// server/app.ts
import express from "express";
import cors from "cors";

// Import routers
import lobbyRouter from "./controllers/lobby.js";
import oddOneOutRouter from "./controllers/oddOneOut.js";

// Create an Express application
const app = express();

// Middleware
app.use(express.json());

// Enable CORS
app.use(cors());

// Use routers
app.use("/api/lobby", lobbyRouter);
app.use("/api/oddoneout", oddOneOutRouter);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// Export the app for use in server.ts
export default app;
