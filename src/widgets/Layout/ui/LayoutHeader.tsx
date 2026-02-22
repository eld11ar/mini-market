import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/shared/ui/tooltip";

const LINKS = [
  {
    icon: Heart,
    label: "Favorites",
    href: "/favorites",
  },
  {
    icon: ShoppingCart,
    label: "Cart",
    href: "/cart",
  },
];

export const LayoutHeader = () => {
  return (
    <header className="sticky top-0 z-10 border-b">
      <div className="max-w-450 mx-auto py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Mini Market</h1>

          <ul className="flex items-center gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={link.href} className="flex items-center gap-2">
                      <link.icon className="w-4 h-4" />
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
        </div>
      </div>
    </header>
  );
};
