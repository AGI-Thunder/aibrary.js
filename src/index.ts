import OpenAI from "openai";

type ImageSize =
  | "256x256"
  | "512x512"
  | "1024x1024"
  | "1792x1024"
  | "1024x1792";

interface AILibraryConfig {
  apiKey: string;
  baseURL?: string;
}

export class AIBrary {
  private openai: OpenAI;

  constructor({ apiKey, baseURL }: AILibraryConfig) {
    this.openai = new OpenAI({
      apiKey,
      baseURL: baseURL || "https://api.openai.com/v1", // Default OpenAI API URL
    });
  }
  async generateImage(
    prompt: string,
    size: ImageSize,
    model: string
  ): Promise<any> {

    try {
      const response = await this.openai.images.generate({
        prompt,
        n: 1,
        size,
        model,
      });
      return response.data;
    } catch (error) {
      console.error("Error generating image:", error);
      throw new Error("Failed to generate image");
    }
  }
}
