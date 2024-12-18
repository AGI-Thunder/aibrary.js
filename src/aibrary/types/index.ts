export type ChatMessage = {
  role: string | "system" | "user" | "assistant";
  content: string;
};

export type ImageSize =
  | "256x256"
  | "512x512"
  | "1024x1024"
  | "1792x1024"
  | "1024x1792";
