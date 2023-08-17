import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";
import ChatClient from "./components/chat-client";

interface ChatPageProps {
  params: {
    chatId: string;
  };
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const { userId } = auth();

  if (!userId) return redirectToSignIn();

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId,
    },
    include: {
      messages: {
        where: {
          userId,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  if (!companion) return redirect("/");

  return <ChatClient companion={companion} />;
};

export default ChatPage;
