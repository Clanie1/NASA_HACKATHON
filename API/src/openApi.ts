import express, { Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: `${process.env.OPENAI_API_KEY}` });

const sendGptPrompt = async (prompt: string) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    console.log(data); // Esto te dará una visión más clara de la respuesta
    return data.choices
      ? data.choices[0].message.content
      : "No content available";
  } catch (e) {
    console.error("Error: ", e);
    throw new Error("Failed to fetch GPT response");
  }
};

export { sendGptPrompt };
