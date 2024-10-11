import AluminiTestimonial from "@/components/AluminiTestimonial";
import CareerField from "@/components/CareerField";
import CodeOfConduct from "@/components/CodeOfConduct";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InternshipThreeSteps from "@/components/InternshipThreeSteps";
import Navbar from "@/components/Navbar";
import PurposeOfInternship from "@/components/PurposeOfInternship";
import StartWithEnoverlab from "@/components/StartWithEnoverlab";
import AluminiTestimonials from "@/components/alumni";
import MentorsSection from "@/components/Mentor";
import StudentPortfolio from "@/components/StudentPortfolio";
import ContactForm from "@/components/Contact";

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
      <AluminiTestimonials />
      <AluminiTestimonial />
      <MentorsSection />
      <StudentPortfolio />
      <ContactForm />
      <FAQ />

      <StartWithEnoverlab />
      <Footer />
    </main>
  );
}
