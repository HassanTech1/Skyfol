import { motion } from "framer-motion";
import { Shield, Sparkles, Sun, Droplets } from "lucide-react";
import serviceImg from "@/assets/service-detailing.jpg";

const services = [
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "النانو سيراميك",
    description: "النانو سيراميك هي عبارة عن مادة سائلة شفافة توضع على الهيكل الخارجي للسيارة لحمايتها من الصدمات، تستخدم مادة النانو سيراميك بعد ترميم هيكل السيارة من الخارج من أي عيب فيها حتى الطلاء نقوم بعلاجه حتى يكون لمادة النانو مظهر حسن."
  },
  {
    icon: <Sun className="w-10 h-10 text-primary" />,
    title: "العازل الحراري",
    description: "أي عازل حراري للسيارة يقلل من أشعة الشمس فوق البنفسجية المفرطة للمركبة بنسبة تتراوح بين 30% إلى 40%، ويكون مفيد للغاية في موجات الحر الصيفية، فهو يحافظ على العين من الإشعاع الضار طوال القيادة."
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "أفلام الحماية",
    description: "نستخدم أفلام من مواد غير بلاستيكية تحافظ على طلاء السيارة بالكامل من كافة أنواع المخاطر والعوامل الخارجية لجسم السيارة، حيث تحافظ أفلام الحماية على طلاء السيارة بالكامل من كل الظروف مثل الخدوش الرمال، الحصى، الحكات، الخبطات ولمعان قوي."
  },
  {
    icon: <Droplets className="w-10 h-10 text-primary" />,
    title: "باقات التلميع",
    description: "نستخدم مواد تساعد على التخلص من الخدوش البسيطة التي تصيب طلاء السيارة التي تفسد الشكل الخارجي لها، كما أنها تضفي لمعة إضافية على الطلاء الخارجي لها، وتخلصك من الدوائر التي تتشكل بسبب تنظيف السيارة بقطع القماش."
  }
];

export default function ServicesDetail() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative order-1"
          >
            <div className="rounded-[2rem] overflow-hidden">
              <img
                src={serviceImg}
                alt="Skyfol Service"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 order-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-right"
              >
                <div className="flex justify-end mb-4">
                  <div className="p-3 bg-primary/5 rounded-xl border border-primary/10">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
