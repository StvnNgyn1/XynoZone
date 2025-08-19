// server/index.ts
import dotenv from "dotenv";
dotenv.config();

import createHttpServer from "./utils/server.js"; // Import the function to create the HTTP server
import pool from "./utils/db.js"; // Import the pool from utils/db.js

const port = process.env.PORT || 3001; // Use environment variable or default to 3001
const server = createHttpServer(); // Create the HTTP server

server.listen(port, async () => {
  try {
    await pool.query("SELECT 1"); // Test the database connection
    console.log("✅ Database connection successful in index.ts");
    console.log(`🚀 Server is running on http://localhost:${port}`);
  } catch (err) {
    console.error("❌ Database connection error in index.ts:", err);
  }
});
