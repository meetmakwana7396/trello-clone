import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import React from "react";

const OrganizationPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
      <form action={createBoard}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a board title"
          className="p-1 border"
          required
        />
        <Button type="submit">Submit</Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <div className="" key={board.id}>
            Board title:{board.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationPage;
