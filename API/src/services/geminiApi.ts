import dotenv from "dotenv";

const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const geminiPrompt = async (prompt: string) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const context =
    "You are a helpful assistant that helps farmers grow their crops in a more efficient way.";
  const fullPrompt = `${context}\n\n${prompt}`;
  console.log(fullPrompt);

  const result = await model.generateContent(fullPrompt);
  return result;
};

export { geminiPrompt };
