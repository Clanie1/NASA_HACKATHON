// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { sendWelcomeEmail } from "./utils";
import supabaseClient from "./supabaseClient";
import { sendGptPrompt } from "./openApi";
import { getWheaterApiData } from "./services/weather";
import { getDisasterApiData } from "./services/disaster";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/createUser", async (req: Request, res: Response) => {
  const { error } = await supabaseClient.from("client").insert(req.body);
  if (error) {
    res.status(400).json({ error: error.message });
  }
  res.send("User created");

  sendWelcomeEmail(req.body, "Welcome to our platform");
});

app.post("/api/gpt", async (req: Request, res: Response) => {
  const { prompt } = req.body;
  const response = sendGptPrompt(prompt);
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
