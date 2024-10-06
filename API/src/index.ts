// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { sendEmail } from "./utils";
import supabaseClient from "./supabaseClient";
import { sendGptPrompt } from "./openApi";
import axios from "axios";

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

app.post("/createUser", async (req: Request, res: Response) => {
  const { data, error } = await supabaseClient.from("client").insert(req.body);
  if (error) {
    res.status(400).json({ error: error.message });
  }
  res.status(200).json(data);
});
app.post("/api/gpt", async (req: Request, res: Response) => {
  const { prompt } = req.body;
  const response = sendGptPrompt(prompt);
  res.status(200).json(response);
});

app.get("/wheaterData", async (req: Request, res: Response) => {
  const username = "cetys_barocio_daniel";
  const password = "7dhEfh70GU";

  const headers = {
    Authorization:
      "Basic " + Buffer.from(username + ":" + password).toString("base64"),
  };

  let token = "";
  axios
    .get("https://login.meteomatics.com/api/v1/token", { headers })
    .then((response) => {
      console.log(response.data);
      token = response.data.access_token;
    });

  res.send(token);

  // axios
  //   .get(
  //     "https://api.meteomatics.com/2024-10-05T00:00:00Z--2024-10-06T00:00:00Z/relative_humidity_2m:p,t_2m:C/47.423336,9.377225/json?access_token=" +
  //       token
  //   )
  //   .then((response) => {
  //     console.log(response.data);
  //     res.send(response.data);
  //   });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
