"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/utils";

type Props = ComponentProps<"button"> & {
  label?: string;
};

export const BackButton = ({ label, className, ...rest }: Props) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/products");
    }
  };

  return (
    <button
      onClick={handleBack}
      className={cn(
        "cursor-pointer w-fit flex items-center gap-2 text-xl sm:text-2xl font-bold",
        className,
      )}
      {...rest}
    >
      <ArrowLeft /> {label ?? "Back"}
    </button>
  );
};
