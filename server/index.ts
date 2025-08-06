import dotenv from "dotenv"
dotenv.config();

import pkg from "pg";
const { Pool } = pkg;

import cors from "cors";
import createServer from "./utils/server.js";

const app = createServer();

app.use(cors());
const port = process.env.PORT || 3001;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

const startServer = async () => {
  try {
    await pool.connect();
    console.log("Connected to the database successfully");

    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to database:", error);
  }
};

startServer();
