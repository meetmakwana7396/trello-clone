"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { UpdateBoard } from "./schema";
import { CreateSafeAction } from "@/lib/create-safe-action";
import { revalidatePath } from "next/cache";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, id } = data;
  let board;

  try {
    board = await db.board.update({
      where: { id, orgId },
      data: {
        title,
      },
    });

    await createAuditLog({
      entityTitle: board.title,
      entityType: ENTITY_TYPE.BOARD,
      entityId: board.id,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return {
      error: "Failed to update",
    };
  }
  revalidatePath(`/board/${id}`);
  return { data: board };
};

export const updateBoard = CreateSafeAction(UpdateBoard, handler);
