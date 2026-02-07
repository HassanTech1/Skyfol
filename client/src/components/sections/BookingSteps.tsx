import { motion } from "framer-motion";
import { Car, CheckCircle2, Clock, CalendarCheck } from "lucide-react";
import bgImage from "@/assets/hero-car.png";

const steps = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "حدد نوع السيارة",
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "اختر الخدمة",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "حدد الوقت المناسب لك",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "قم بتأكيد الحجز",
  },
];

export default function BookingSteps() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Booking Background" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-display">خطوات حجز الموعد</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-300 max-w-lg mx-auto">
            نقدم مجموعة من الخدمات بمنتهى الدقة، احجز موعدك الآن بخطوات بسيطة
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center flex-1 group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center text-white group-hover:border-primary group-hover:text-primary transition-all duration-300 bg-white/5 backdrop-blur-md">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -left-1/2 w-full h-[2px] bg-white/10 -z-10" />
                )}
              </div>
              <h4 className="text-white font-bold text-lg">{step.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
