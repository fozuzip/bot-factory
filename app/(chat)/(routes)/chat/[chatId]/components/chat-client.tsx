"use client";

import { Companion, Message } from "@prisma/client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useCompletion } from "ai/react";

import ChatHeader from "@/components/chat-header";
import ChatForm from "@/components/chat-form";
import ChatMessages from "@/components/chat-messages";
import { ChatMessageProps } from "@/components/chat-message";

// TODO: All client components should live in the components folder

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}
const ChatClient = ({ companion }: ChatClientProps) => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageProps[]>(
    companion.messages,
  );

  const { input, isLoading, handleInputChange, handleSubmit, setInput } =
    useCompletion({
      api: `/api/chat/${companion.id}`,
      onFinish: (prompt, completion) => {
        const systemMessage: ChatMessageProps = {
          role: "system",
          content: completion,
        };

        setMessages((messages) => [...messages, systemMessage]);
        setInput("");

        router.refresh();
      },
    });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: "user",
      content: input,
    };

    setMessages((messages) => [...messages, userMessage]);

    handleSubmit(e);
  };

  return (
    <div className="flex h-full flex-col space-y-2 p-4">
      <ChatHeader companion={companion} />
      <ChatMessages
        messages={messages}
        companion={companion}
        isLoading={isLoading}
      />
      <ChatForm
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ChatClient;
