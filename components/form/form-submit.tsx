"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface IFormSubmit {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "primary";
}
const FormSubmit = ({
  children,
  disabled,
  className,
  variant,
}: IFormSubmit) => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={variant}
      type="submit"
      disabled={pending || disabled}
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};

export default FormSubmit;
