import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT;
const origin = process.env.ORIGIN;

// middleware
app.use(express.json());
app.use(cors({ origin: `http://localhost:${origin}` }));
// app.use("/api", router())

async function initializeApp() {
  // Start express app
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    ClientRequest;
  }
}
