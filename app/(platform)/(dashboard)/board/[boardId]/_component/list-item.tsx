"use client";
import { ListWithCards } from "@/types";
import React, { ElementRef, useRef, useState } from "react";
import { ListHeader } from "./list-header";
import { setTimeout } from "timers";
import { CardForm } from "./card-form";
import { cn } from "@/lib/utils";
import { CardItem } from "./card-item";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface IListItemProps {
  data: ListWithCards;
  index: number;
}

export function ListItem({ data, index }: IListItemProps) {
  const textareaRef = useRef<ElementRef<"textarea">>(null)

  const [isEditing, setIsEditing] = useState(false)

  const disableEditing = () => {
    setIsEditing(false)
  }

  const enableEditing = () => {
    setIsEditing(true)
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  }

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li {...provided.draggableProps} ref={provided.innerRef} className="shrink-0 h-full w-[272px] select-none">
          <div {...provided.dragHandleProps} className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
            <ListHeader onAddCard={enableEditing} data={data} />
            <Droppable droppableId={data.id} type="card">
              {(provided) => (
                <ol {...provided.droppableProps} ref={provided.innerRef} className={cn('mx-1 px-1 py-0.5 flex flex-col gap-y-2', data.cards.length > 0 ? 'mt-2' : 'mt-0')}>
                  {data.cards.map((card, index) =>
                    <CardItem index={index} key={card.id} data={card} />
                  )}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm ref={textareaRef} listId={data.id} isEditing={isEditing} enableEditing={enableEditing} disableEditing={disableEditing} />
          </div>
        </li >
      )}
    </Draggable>
  );
}
