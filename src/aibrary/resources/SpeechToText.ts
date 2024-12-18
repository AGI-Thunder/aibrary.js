import axios from "axios";
import * as fs from "fs";
import * as FormData from "form-data";

export class SpeechToText {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async transcribe(audioFilePath: string, model: string = "whisper-1"): Promise<string> {
    try {
      const formData = new FormData();
      formData.append("file", fs.createReadStream(audioFilePath));
      formData.append("model", model);

      const response = await axios.post(
        "https://api.openai.com/v1/audio/transcriptions",
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      return response.data.text;
    } catch (error: any) {
      console.error("Error in SpeechToText:", error.message);
      throw error;
    }
  }
}
