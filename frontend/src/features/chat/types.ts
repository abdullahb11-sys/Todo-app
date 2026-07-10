export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  thread_id: string;
  message: string;
}

export interface ChatResponse {
  response: string;
}