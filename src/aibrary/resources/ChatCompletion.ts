import { OpenAI } from "openai";
import { ChatMessage } from "../types";

export class ChatCompletion {
  private openai: OpenAI;

  constructor(openai: OpenAI) {
    this.openai = openai;
  }
  async getChatCompletion(
    messages: ChatMessage[],
    model: string = "gpt-4",
    system?: string
  ): Promise<string> {
    const options: any = {
      model,
      messages,
    };
  
    // Add "system" dynamically if provided
    if (system) {
      options.extra_body = { ...(options.extra_body || {}), system };
    }
  
    const response = await this.openai.chat.completions.create(options);
    return response.choices[0]?.message?.content ?? "";
  }  
}
