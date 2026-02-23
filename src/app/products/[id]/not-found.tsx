import Link from "next/link";
import { Button } from "@/shared/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center gap-4 py-24 text-center">
      <h2 className="text-xl font-bold">Product not found</h2>
      <p className="text-sm text-muted-foreground">
        This product doesn't exist or has been removed
      </p>
      <Button asChild variant="link">
        <Link href="/products">Back to products</Link>
      </Button>
    </section>
  );
}
