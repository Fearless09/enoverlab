import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function HompageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex px-[120px] h-full min-h-dvh flex-col bg-[#F3F3FF]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
