import { OpenAI } from "openai";
import { ImageSize } from "../types";

export class ImageGeneration {
  private openai: OpenAI;

  constructor(openai: OpenAI) {
    this.openai = openai;
  }

  async generateImage(
    prompt: string,
    n: number = 1,
    size: ImageSize
  ): Promise<string[]> {
    try {
      const response = await this.openai.images.generate({
        prompt,
        n,
        size,
      });
      return response.data.map((img: { url: string }) => img.url);
    } catch (error: any) {
      console.error("Error in generateImage:", error.message);
      throw error;
    }
  }
}
