import { Skeleton } from "@/shared/ui/skeleton";

export const ProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <Skeleton className="w-full aspect-[4/3] sm:aspect-square rounded-2xl" />
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <Skeleton className="h-4 w-20 sm:w-24 rounded-full" />
        <Skeleton className="h-4 sm:h-4.5 w-full" />
        <Skeleton className="h-4 sm:h-4.5 w-3/4" />
        <Skeleton className="h-5 sm:h-6 w-16" />
      </div>
    </div>
  );
};
