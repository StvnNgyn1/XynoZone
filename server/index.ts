import cors from "cors";
import createServer from "./utils/server.js";

const app = createServer();

app.use(cors());
const port = 3000;

const startServer = () => {
  try {
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
