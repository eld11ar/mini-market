"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/shared/ui/skeleton";

export const LayoutHeaderLinksClient = dynamic(
  () => import("./LayoutHeaderLinks").then((m) => m.LayoutHeaderLinks),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center gap-2">
        {Array.from({ length: 2 }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: false
          <Skeleton key={i} className="size-6" />
        ))}
      </div>
    ),
  },
);
