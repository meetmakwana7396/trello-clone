"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const { execute, fieldErrors, isLoading } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!");
    },
    onError: (error) => {
      console.log(error, "ERROR!");
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a board title"
          className="p-1 border"
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        Submit
      </Button>
    </form>
  );
};
