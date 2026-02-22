import { Star } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

interface Props extends ComponentProps<"div"> {
  rate: number;
  count?: number;
  className?: string;
}

export function StarRating({ rate, count, className, ...rest }: Props) {
  return (
    <div className={cn("flex items-center gap-1", className)} {...rest}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            // biome-ignore lint/suspicious/noArrayIndexKey: false
            key={i}
            size={14}
            className={
              i < Math.round(rate)
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            }
          />
        ))}
      </div>

      <span className="text-xs text-muted-foreground">
        {rate.toFixed(1)}

        {count && (
          <span className="ml-1 text-muted-foreground/40">({count})</span>
        )}
      </span>
    </div>
  );
}
