"use client";

import { ComponentProps } from "react";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { LoadingAnimation } from "./loading-animation";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={`btn-primary btn ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && (
        <span className="loading loading-spinner">
          <LoadingAnimation />
        </span>
      )}
      {children}
    </button>
  );
}
