import { OpenAI } from "openai";

export const createOpenAIClient = (apiKey: string): OpenAI => {
  if (!apiKey) throw new Error("OpenAI API key required");
  return new OpenAI({ apiKey });
};
