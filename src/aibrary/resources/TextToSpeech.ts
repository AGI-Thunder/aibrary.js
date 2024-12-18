import axios from "axios";

export class TextToSpeech {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = "https://api.ttsprovider.com/v1") {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async synthesize(text: string, voice: string = "en-US-Wavenet-D"): Promise<Buffer> {
    if (!this.apiKey) {
      throw new Error("TTS API key required.");
    }

    try {
      const response = await axios.post(
        `${this.baseUrl}/tts`,
        { text, voice },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer",
        }
      );
      return Buffer.from(response.data);
    } catch (error: any) {
      console.error("Error in TextToSpeech:", error.message);
      throw error;
    }
  }
}
