import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "TransLogix - Streamline Your Transport Business",
  icons: {
    icon: "/images/favicon.ico",
  },
  description:
    "Powerful transport analytics dashboard for efficient fleet management, real-time tracking, and seamless QuickBooks integration.",
};

export default function Home() {
  redirect("/home");
}
