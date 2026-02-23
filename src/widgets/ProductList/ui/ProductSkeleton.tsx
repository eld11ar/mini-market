import { Skeleton } from "@/shared/ui/skeleton";

export const ProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-82 h-81 rounded-2xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4.5 w-24 rounded-full" />
        <Skeleton className="h-4.5 w-full" />
        <Skeleton className="h-4.5 w-3/4" />
        <Skeleton className="h-6 w-16" />
      </div>
    </div>
  );
};
