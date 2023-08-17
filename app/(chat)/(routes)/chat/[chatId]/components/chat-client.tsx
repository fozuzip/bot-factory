"use client";

import { Companion, Message } from "@prisma/client";

import ChatHeader from "@/components/chat-header";

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
  return (
    <div className="flex h-full flex-col space-y-2 p-4">
      <ChatHeader companion={companion} />
    </div>
  );
};

export default ChatClient;
