import express from "express";
import cors from "cors";

import lobbyRouter from "../controllers/lobby.js";

const createServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use("/api/lobby", lobbyRouter);

  app.get("/", (req, res) => {
    res.send("Hello from backend!");
  });

  return app;
};

export default createServer;
