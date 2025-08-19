// server/utils/server.ts
import { createServer } from "http"; // Import createServer from http
import { WebSocketServer } from "ws"; // Import WebSocketServer from ws
import app from "../app.js"; // Import the Express app

const createHttpServer = () => {
  // Create HTTP server
  const server = createServer(app);

  // Create WebSocket server and attach it to the HTTP server
  const wss = new WebSocketServer({ server });

  // WebSocket connection handling
  wss.on("connection", (ws) => {
    console.log("New WebSocket connection established");

    ws.on("message", (message) => {
      console.log("Received message:", message.toString());
      // Echo the message back to the client
      ws.send(`Server received: ${message}`);
    });

    ws.on("close", () => {
      console.log("WebSocket connection closed");
    });
  });

  return server;
};

export default createHttpServer;
