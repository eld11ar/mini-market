import type { ReactNode } from "react";
import { LayoutFooter } from "./LayoutFooter";
import { LayoutHeader } from "./LayoutHeader";

type Props = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <LayoutHeader />
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4">
        {children}
      </main>
      <LayoutFooter />
    </div>
  );
};
