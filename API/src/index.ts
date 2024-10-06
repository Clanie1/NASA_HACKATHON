// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { sendWelcomeEmail } from "./utils";
import supabaseClient from "./supabaseClient";
import { sendGptPrompt } from "./openApi";
import { getWheaterApiData } from "./services/weather";
import { getDisasterApiData } from "./services/disaster";

dotenv.config();

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/api/email", async (req: Request, res: Response) => {
  const { to, subject } = req.body;

  try {
    sendWelcomeEmail(to, subject);
    console.log("success");
  } catch (e) {
    console.log("error");
  }

  res.send("oki");
});

app.get("/users", async (req: Request, res: Response) => {
  const { data, error } = await supabaseClient.from("client").select();
  if (error) {
    res.status(400).json({ error: error.message });
  }
  res.send(data);
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

app.get("/wheaterData", async (req: Request, res: Response) => {
  const wheaterData = await getWheaterApiData();
  const disastersData = await getDisasterApiData();
  const response = {
    wheater: wheaterData,
    disastersData: disastersData,
  };
  res.send(response);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
