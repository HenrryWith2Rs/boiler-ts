import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT;
const origin = process.env.ORIGIN;

// middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
