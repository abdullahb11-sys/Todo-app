import { useState } from "react";

interface Props {
  loading: boolean;
  onSend: (
    message: string
  ) => void;
}

export default function ChatInput({
  loading,
  onSend,
}: Props) {
  const [message, setMessage] =
    useState("");

  function send() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  }

  return (
    <div className="flex gap-2 border-t p-4">

      <input
        className="flex-1 rounded-lg border px-3 py-2"
        value={message}
        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }
        placeholder="Ask AI..."
        onKeyDown={(e) => {
          if (e.key === "Enter")
            send();
        }}
      />

      <button
        disabled={loading}
        onClick={send}
        className="rounded-lg bg-blue-600 px-4 text-white"
      >
        Send
      </button>

    </div>
  );
}