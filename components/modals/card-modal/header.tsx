"use client";

import { updateCard } from "@/actions/update-card";
import { FormInput } from "@/components/form/form-input";
import { Skeleton } from "@/components/ui/skeleton";
import { useAction } from "@/hooks/use-action";
import { CardWithList } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { LayoutIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";

interface IHeaderProps {
  data: CardWithList;
}

export function Header({ data }: IHeaderProps) {
  const inputRef = useRef<ElementRef<"input">>(null);

  const queryClient = useQueryClient();
  const params = useParams();

  const [title, setTitle] = useState(data.title);

  const { execute } = useAction(updateCard, {
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["card", data.id] });
      toast.success(`Renamed to "${data.title}"`);
      setTitle(data.title);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onBlur = () => {
    inputRef.current?.form?.requestSubmit();
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const boardId = params.boardId as string;

    execute({ title, boardId, id: data.id });
  };

  return (
    <div className="flex items-start gap-x-3 mb-6 w-full">
      <LayoutIcon className="w-5 h-5 mt-1 text-neutral-700" />
      <div className="w-full">
        <form action={onSubmit}>
          <FormInput
            id="title"
            defaultValue={title}
            ref={inputRef}
            onBlur={onBlur}
            className="font-semibold text-xl px-1 text-neutral-700 bg-transparent border-transparent relative -left-1.5 w-[95%] focus-visible:bg-white focus-visible:border-input mb-0.5 truncate"
          />
        </form>
        <p className="text-sm text-muted-foreground">
          in List <span className="underline">{data.list.title}</span>
        </p>
      </div>
    </div>
  );
}

Header.Skeleton = function HeaderSkeleton() {
  return (
    <div className="flex items-start gap-x-6 mb-6">
      <Skeleton className="h-6 w-6 mt-1 bg-neutral-100" />
      <div>
        <Skeleton className="w-24 h-6 mb-1 bg-neutral-200" />
        <Skeleton className="w-12 h-4 bg-neutral-200" />
      </div>
    </div>
  );
};
