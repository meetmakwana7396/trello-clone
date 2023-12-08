"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const BoardValidation = z.object({
  title: z.string(),
});

export async function createBoard(formdata: FormData) {
  const { title } = BoardValidation.parse({
    title: formdata.get("title"),
  });

  await db.board.create({
    data: {
      title,
    },
  });
  revalidatePath(`/organization/org_2Z8Pi1HwTtc0Z3HGZme1NLyQG0l`);
}
