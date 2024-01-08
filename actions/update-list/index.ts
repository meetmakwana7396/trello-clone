"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { CreateSafeAction } from "@/lib/create-safe-action";
import { revalidatePath } from "next/cache";
import { UpdateList } from "./schema";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, id, boardId } = data;
  let list;

  try {
    list = await db.list.update({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
      data: {
        title,
      },
    });
    await createAuditLog({
      entityTitle: list.title,
      entityType: ENTITY_TYPE.LIST,
      entityId: list.id,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return {
      error: "Failed to update",
    };
  }
  revalidatePath(`/board/${boardId}`);
  return { data: list };
};

export const updateList = CreateSafeAction(UpdateList, handler);
