import { LayoutHeaderLinksClient } from "./LayoutHeaderLinksClient";

export const LayoutHeader = () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="w-[1800px] max-w-full mx-auto p-4 sm:py-6 sm:px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold md:text-2xl">Mini Market</h1>

          <LayoutHeaderLinksClient />
        </div>
      </div>
    </header>
  );
};
