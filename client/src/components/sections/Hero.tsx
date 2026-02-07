import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg1 from "@/assets/hero-car.png";
import skyfolLogo from "@assets/skyfol-logo_1770237604954.png";

const slides = [
  {
    title: "نلهم العقول، ونحفز التغيير في",
    subtitle: "أكاديمية سكاي فول",
    description: "نحن ملتزمون بإلهام العقول وإحداث التغيير من خلال خدمات حماية وتظليل السيارات الأكثر تطوراً في العالم.",
    image: heroBg1,
    stats: [
      { label: "سنوات خبرة", value: "85+" },
      { label: "عميل سعيد", value: "25M" },
      { label: "برامج تدريب", value: "30+" }
    ]
  },
  {
    title: "عزل حراري متطور",
    subtitle: "راحة قصوى في القيادة",
    description: "أفلام تظليل ذكية تحجب 99% من الأشعة الضارة وتحافظ على برودة مقصورة سيارتك.",
    image: heroBg1,
    stats: [
      { label: "عزل حراري", value: "99%" },
      { label: "ضمان", value: "5 سنوات" },
      { label: "وضوح رؤية", value: "100%" }
    ]
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-background">
      <div className="container mx-auto px-4 h-full">
        {/* Main Curved Card with Logo Slit */}
        <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden min-h-[600px] flex flex-col md:flex-row">

          {/* Logo / Header Area */}
          <div className="absolute top-0 left-0 z-20 bg-white p-6 rounded-br-[2.5rem] shadow-sm flex items-center gap-4">
            <img src={skyfolLogo} alt="SkyFol Logo" className="h-10 w-auto" />
          </div>

          {/* Left Content Column */}
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center pt-32 md:pt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-[1.1] text-foreground tracking-tight">
                  {slides[current].title}
                  <br />
                  <span className="text-foreground/80">{slides[current].subtitle}</span>
                </h1>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-primary" />
                  <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
                    {slides[current].description}
                  </p>
                  <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold p-4 h-auto aspect-square group">
                    <ArrowLeft className="w-6 h-6 rotate-135" />
                  </Button>
                </div>

                {/* Circular Stats */}
                <div className="flex flex-wrap gap-8 items-center">
                  {slides[current].stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full border border-border flex flex-col items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-primary">{stat.value}</span>
                        <span className="text-[10px] text-muted-foreground uppercase">{stat.label.split(' ')[0]}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image/Design Column */}
          <div className="w-full md:w-1/2 relative min-h-[400px]">
            {/* The Slit/Curve for the Image Section */}
            <div className="absolute inset-x-0 top-0 bottom-0 bg-white rounded-tl-[4rem] md:rounded-tl-[8rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current].image}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float Element: Learn More Card (Optional, matching design) */}
            <div className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 hidden lg:block">
              <div className="flex items-center gap-3">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                  إعرف المزيد
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Optional: Slider Controls outside or overlaying */}
        <div className="flex justify-center mt-8 gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
