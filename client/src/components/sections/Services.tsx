import { motion } from "framer-motion";
import { Shield, Sparkles, Sun, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "أفلام الحماية (PPF)",
    description: "حماية فائقة لطلاء السيارة من الخدوش، الحصى، والعوامل الجوية مع خاصية المعالجة الذاتية."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "النانو سيراميك",
    description: "طبقة زجاجية صلبة تمنح سيارتك لمعاناً عميقاً وسهولة في التنظيف ومقاومة للاتساخ."
  },
  {
    icon: <Sun className="w-10 h-10 text-primary" />,
    title: "التظليل العازل",
    description: "عزل حراري متطور يحجب الأشعة الضارة ويحافظ على برودة المقصورة الداخلية."
  },
  {
    icon: <Droplets className="w-10 h-10 text-primary" />,
    title: "الغسيل التفصيلي",
    description: "عناية دقيقة بكل تفاصيل السيارة الداخلية والخارجية لاستعادة رونقها الأصلي."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
          >
            خدماتنا <span className="text-primary">الاحترافية</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            نقدم مجموعة متكاملة من خدمات العناية بالسيارات باستخدام أفضل المواد والتقنيات العالمية.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card border-none h-full hover:-translate-y-2 transition-transform duration-300 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
