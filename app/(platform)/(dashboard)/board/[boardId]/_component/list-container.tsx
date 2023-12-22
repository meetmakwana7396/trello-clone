"use client";
import React, { useEffect, useState } from "react";
import { ListWithCards } from "@/types";
import ListForm from "./list-form";
import { ListItem } from "./list-item";
import { DragDropContext, Droppable } from "@hello-pangea/dnd"

interface IListContainer {
  data: ListWithCards[];
  boardId: string;
}

export function ListContainer({ data, boardId }: IListContainer) {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <DragDropContext onDragEnd={() => { }}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol {...provided.droppableProps} ref={provided.innerRef} className="flex gap-x-3 h-full">
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder}
            <ListForm />
            <div className="flex shrink-0 w-1" />
          </ol>
        )}
      </Droppable>

    </DragDropContext>

  );
}
