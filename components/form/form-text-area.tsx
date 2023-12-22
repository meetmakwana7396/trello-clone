"use client";

import { KeyboardEventHandler, forwardRef } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import FormErrors from "./form-errors";
import { useFormStatus } from "react-dom";

interface IFormTextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
  defaultValue?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, IFormTextareaProps>(
  (
    {
      id,
      label,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onClick,
      onKeyDown,
      defaultValue,
    },
    ref
  ) => {
    const { pending } = useFormStatus();

    return (
      <div className="space-y-2 w-full">
        <div className="space-y-1 w-full">
          {label ? (
            <Label
              htmlFor={id}
              className="text-xs font-semibold text-neutral-700"
            >
              {label}
            </Label>
          ) : null}
          <Textarea
            ref={ref}
            placeholder={placeholder}
            name={id}
            id={id}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onClick={onClick}
            required={required}
            disabled={pending || disabled}
            className={cn(
              "resize-none focus-visible:right-0 focus-visible:ring-offset-0 ring-0 focus:right-0 outline-none shadow-sm",
              className
            )}
            aria-describedby={`${id}-error`}
            defaultValue={defaultValue}
          />
          <FormErrors id={id} errors={errors} />
        </div>
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";
