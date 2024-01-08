"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { CreateSafeAction } from "@/lib/create-safe-action";
import { revalidatePath } from "next/cache";
import { DeleteCard } from "./schema";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id, boardId } = data;
  let card;

  try {
    card = await db.card.delete({ where: { id, list: { board: { orgId } } } });
    await createAuditLog({
      entityTitle: card.title,
      entityType: ENTITY_TYPE.CARD,
      entityId: card.id,
      action: ACTION.CREATE,
    });
  } catch (error) {
    return {
      error: "Failed to delete",
    };
  }
  revalidatePath(`/board/${boardId}`);
  return { data: card };
};

export const deleteCard = CreateSafeAction(DeleteCard, handler);
