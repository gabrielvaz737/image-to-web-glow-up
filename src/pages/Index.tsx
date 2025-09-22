import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { StudyMaterials } from "@/components/StudyMaterials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const redirectUrl = "https://pnd-flash-boost.lovable.app";

    // Detect only mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log("[EXIT-REDIRECT] Init. Device:", isMobile ? "Mobile" : "Desktop");

    if (!isMobile) {
      // Do nothing on desktop as requested
      return;
    }

    // Mobile: intercept only the back navigation (exit intent)
    // Add a history entry so the first back triggers popstate
    try {
      window.history.pushState({ exitGuard: true }, "", window.location.href);
    } catch {}

    const handlePopState = (_e: PopStateEvent) => {
      console.log("[EXIT-REDIRECT] Back pressed on mobile -> redirect");
      // Go to external back-redirect page and replace history to avoid loop
      window.location.replace(redirectUrl);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonials />
      <StudyMaterials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;