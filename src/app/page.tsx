import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TransLogix - Streamline Your Transport Business",
  icons: {
    icon: "/images/favicon.ico",
  },
  description:
    "Powerful transport analytics dashboard for efficient fleet management, real-time tracking, and seamless QuickBooks integration.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
