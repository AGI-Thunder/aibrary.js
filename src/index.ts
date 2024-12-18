import { createOpenAIClient } from "./aibrary/config/OpenAIClient";
import { ChatCompletion } from "./aibrary/resources/ChatCompletion";
import { ImageGeneration } from "./aibrary/resources/ImageGeneration";
import { SpeechToText } from "./aibrary/resources/SpeechToText";
import { TextToSpeech } from "./aibrary/resources/TextToSpeech";

interface AibraryConfig {
  openAIApiKey: string;
  ttsApiKey?: string;
  ttsBaseUrl?: string;
}

export class Aibrary {
  chat: ChatCompletion;
  image: ImageGeneration;
  speechToText: SpeechToText;
  textToSpeech: TextToSpeech;

  constructor(config: AibraryConfig) {
    const openai = createOpenAIClient(config.openAIApiKey);

    this.chat = new ChatCompletion(openai);
    this.image = new ImageGeneration(openai);
    this.speechToText = new SpeechToText(config.openAIApiKey);
    this.textToSpeech = new TextToSpeech(config.ttsApiKey || "", config.ttsBaseUrl);
  }
}
