// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { sendReportEmail, sendWelcomeEmail } from "./utils";
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

app.get("/reportEmail/:id", async (req: Request, res: Response) => {
  const { data, error } = await supabaseClient
    .from("client")
    .select("*")
    .eq("id", req.params.id)
    .single();

  if (error || !data) {
    res.status(400);
  }
  console.log(data);
  const weatherData = await getWheaterApiData(data.lat, data.lng);
  const disasterData = await getDisasterApiData(data.lat, data.lng);
  sendReportEmail(data, weatherData, disasterData, "Your daily report");

  res.send({ weatherData: weatherData, disasterData: disasterData });
});

app.post("/api/gpt", async (req: Request, res: Response) => {
  const { prompt } = req.body;
  const response = sendGptPrompt(prompt);
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
