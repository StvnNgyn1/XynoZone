// server/controllers/oddOneOut.ts
import express from "express";
import type { Request, Response } from "express";

import pool from "../utils/db.js"; // Import the pool from index.ts

const oddOneOutRouter = express.Router();

// Endpoints

// Endpoint to get all odd one out cards from the database
oddOneOutRouter.get("/", async (req: Request, res: Response) => {
  try {
    // Logic to fetch all cards from the database
    const result = await pool.query('SELECT * FROM odd_one_out_cards');
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint to add a new odd one out card to the database
oddOneOutRouter.post("/", async (req: Request, res: Response) => {

});

export default oddOneOutRouter;