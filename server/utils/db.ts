// server/utils/db.ts
import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";
const { Pool } = pkg;

// Create a new pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then((client) => {
    console.log("✅ Database connected in db.ts");
    client.release();
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err.stack);
  });

export default pool;
