import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function PATCH(
  req: Request,
  { params }: { params: { companionId: string } },
) {
  try {
    const body = await req.json();
    const user = await currentUser();
    // TODO: Create auth middleware
    // TODO: Check for subscription

    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.companionId) {
      return new NextResponse("CompanionId is required", { status: 400 });
    }

    const { src, name, description, instructions, seed, categoryId } = body;

    if (
      !src ||
      !name ||
      !description ||
      !instructions ||
      !seed ||
      !categoryId
    ) {
      return new NextResponse("Missing Required Fields", { status: 400 });
    }

    const companion = await prismadb.companion.update({
      where: { id: params.companionId },
      data: {
        categoryId,
        userId: user.id,
        userName: user.firstName,
        src,
        name,
        description,
        instructions,
        seed,
      },
    });

    return NextResponse.json(companion);
  } catch (error) {
    console.log("[COMPANION_PATCH] Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
