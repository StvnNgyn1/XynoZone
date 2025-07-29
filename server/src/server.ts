import express from 'express';
import cors from 'cors';
import type { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

interface Lobby {
  code: string;
  players: string[];
}

const lobbies: Record<string, Lobby> = {};

function generateCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

app.post('/api/lobby/create', (req: Request, res: Response) => {
  const code = generateCode();
  const newLobby: Lobby = { code, players: [] };
  lobbies[code] = newLobby;
  res.json({ code });
});

app.get('/', (req, res) => {
  res.send('Hello from XynoZone server!');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

