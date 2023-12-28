"use client";
import { Dialog } from "@/components/ui/dialog";
import { useCardModal } from "@/hooks/use-card-modal";
import { DialogContent } from "@radix-ui/react-dialog";
import React from "react";

export const CardModal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>I am a Modal</DialogContent>
    </Dialog>
  );
};
