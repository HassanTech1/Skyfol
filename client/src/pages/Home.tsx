import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import LoadingScreen from "@/components/ui/LoadingScreen";

import GlobalNetwork from "@/components/sections/GlobalNetwork";

import BookingSteps from "@/components/sections/BookingSteps";
import ServicesDetail from "@/components/sections/ServicesDetail";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the animation to be seen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds total, overlay fades out after 1.5s in the component logic
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden rtl">
      {isLoading && <LoadingScreen />}
      
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Clients />
            <About />
            <ServicesDetail />
            <BookingSteps />
            <GlobalNetwork />
          </main>
          <Footer />
          <FloatingActions />
        </>
      )}
    </div>
  );
}
