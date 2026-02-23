import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Mini Market",
  description: "Mini marketplace based on Fake Store API",
};

export default function Home() {
  redirect("/products");
}
