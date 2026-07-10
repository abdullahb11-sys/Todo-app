import type { ChatMessage as Message } from "../types";

interface Props {
  message: Message;
}

export default function ChatMessage({
  message,
}: Props) {
  const isUser =
    message.role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] rounded-xl px-4 py-3 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}