import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

import { useChat } from "../hooks/useChat";

interface Props {
  refreshTasks: () => Promise<void>;
}

export default function ChatWindow({
  refreshTasks,
}: Props) {
  const {
    messages,
    loading,
    sendMessage,
  } = useChat({
    refreshTasks,
  });

  return (
    <div className="flex h-full flex-col">

      <div className="flex-1 space-y-4 overflow-y-auto p-4">

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))}

        {loading && (
          <TypingIndicator />
        )}

      </div>

      <ChatInput
        loading={loading}
        onSend={sendMessage}
      />

    </div>
  );
}