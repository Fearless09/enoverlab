
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer"
import { Metadata } from "next";
import Partnership from "@/components/Partnership";

export const metadata: Metadata = {
  title: "Homepage",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Partnership />
      <Footer />
    </>
  );
}
