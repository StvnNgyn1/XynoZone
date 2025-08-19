// server/controllers/lobby.ts
import express from 'express';
import type { Request, Response } from 'express';

const lobbyRouter = express.Router();

function generateCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

interface Lobby {
  code: string;
  players: string[];
}

const lobbies: Record<string, Lobby> = {};


// Endpoints

// Endpoint to get all lobbies
lobbyRouter.get('/', (req: Request, res: Response) => {
  res.send("Getting all lobbies"); 
});

// Endpoint to create a new lobby
lobbyRouter.post('/create', (req: Request, res: Response) => {
    const code = generateCode();
    const newLobby: Lobby = { code, players: [] };
    lobbies[code] = newLobby;
    res.json({ code });
});

export default lobbyRouter;