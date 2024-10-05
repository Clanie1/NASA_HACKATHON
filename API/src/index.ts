// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { sendEmail } from "./utils";
import supabaseClient from "./supabaseClient";

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
    sendEmail(to, subject);
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
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
