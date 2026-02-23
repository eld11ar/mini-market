"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCartProductStore } from "@/entities/cart";
import { cn } from "@/shared/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";

export const LayoutHeaderLinks = () => {
  const totalCartItems = useCartProductStore((state) =>
    state.totalCartProducts(),
  );

  const LINKS = [
    {
      icon: Heart,
      label: "Favorites",
      href: "/favorites",
      count: 0,
    },
    {
      icon: ShoppingCart,
      label: "Cart",
      href: "/cart",
      count: totalCartItems,
    },
  ];

  return (
    <ul className="flex items-center gap-4">
      {LINKS.map((link) => (
        <li key={link.href}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className="relative flex items-center gap-2"
              >
                <link.icon className="w-5 h-5" />

                {link.count > 0 && (
                  <span
                    className={cn(
                      "absolute -top-2 -right-2 size-4 rounded-full text-[10px] bg-destructive text-primary-foreground",
                      "flex items-center justify-center",
                    )}
                  >
                    {link.count}
                  </span>
                )}

                <span className="sr-only">{link.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <span>{link.label}</span>
            </TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};
