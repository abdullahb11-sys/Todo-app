import { useState } from "react";

import { chatApi } from "../api/chatApi";

import type { ChatMessage } from "../types";

interface UseChatProps {
  refreshTasks: () => Promise<void>;
}

export function useChat({
  refreshTasks,
}: UseChatProps) {
  const [messages, setMessages] = useState<
    ChatMessage[]
  >([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Hello! I can create, update, delete and manage your tasks.",
    },
  ]);

  const [loading, setLoading] =
    useState(false);

  const THREAD_ID = "abdullah-session";

  async function sendMessage(
    message: string
  ) {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {
      const response =
        await chatApi.send({
          thread_id: THREAD_ID,
          message,
        });

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: response.response,
        },
      ]);

      await refreshTasks();
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    messages,
    sendMessage,
  };
}