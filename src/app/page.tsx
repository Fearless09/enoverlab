import AluminiTestimonial from "@/components/AluminiTestimonial";
import CareerField from "@/components/CareerField";
import CodeOfConduct from "@/components/CodeOfConduct";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InternshipThreeSteps from "@/components/InternshipThreeSteps";
import Navbar from "@/components/Navbar";
import PurposeOfInternship from "@/components/PurposeOfInternship";
import StartWithEnoverlab from "@/components/StartWithEnoverlab";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <Hero />
      <InternshipThreeSteps />
      <PurposeOfInternship />
      <CareerField />
      <CodeOfConduct />
      <FAQ />
      <AluminiTestimonial />
      <StartWithEnoverlab />
      {/* Footer */}
    </main>
  );
}
