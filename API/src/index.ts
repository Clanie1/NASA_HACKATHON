// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import supabaseClient from "./supabaseClient";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
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
