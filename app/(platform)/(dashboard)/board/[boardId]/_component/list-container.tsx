"use client";
import React, { useState } from "react";
import { ListWithCards } from "@/types";
import ListForm from "./list-form";

interface IListContainer {
  data: ListWithCards[];
  boardId: string;
}

export function ListContainer({ data, boardId }: IListContainer) {
  const [orderedData, setOrderedData] = useState(data);
  return (
    <ol>
      <ListForm />
      <div className="flex shrink-0 w-1" />
    </ol>
  );
}
