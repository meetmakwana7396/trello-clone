import { db } from "@/lib/db";
import React from "react";
import { Form } from "./form";

const OrganizationPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
      <Form />
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
