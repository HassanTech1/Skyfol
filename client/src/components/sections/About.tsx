import { motion } from "framer-motion";
import { CheckCircle2, Shield } from "lucide-react";
import heroBg from "@/assets/hero-car.png";
import skyfolLogo from "@assets/skyfol-logo_1770237604954.png";

// Custom styles for the Blob Card
const blobStyles = `
  .blob-card {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 24px;
    z-index: 10;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px rgba(0,0,0,0.1), -20px -20px 60px rgba(255,255,255,0.1);
  }

  .blob-card-bg {
    position: absolute;
    inset: 5px;
    z-index: 2;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(24px);
    border-radius: 20px;
    overflow: hidden;
    outline: 2px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .dark .blob-card-bg {
    background: rgba(0, 0, 0, 0.6);
    outline: 2px solid rgba(255,255,255,0.1);
  }

  .blob-card-element {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #00A2FF;
    opacity: 0.6;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
    25% { transform: translate(-100%, -100%) translate3d(100%, 0, 0); }
    50% { transform: translate(-100%, -100%) translate3d(100%, 100%, 0); }
    75% { transform: translate(-100%, -100%) translate3d(0, 100%, 0); }
    100% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
  }
`;

export default function About() {
  const benefits = [
    "ضمان شامل يصل إلى 10 سنوات",
    "تقنية المعالجة الذاتية للخدوش",
    "حماية فائقة ضد الاصفرار والبهتان",
    "فريق فني معتمد عالمياً"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: blobStyles }} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content - Now on the Right in RTL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <h2 className="text-primary font-bold tracking-wider uppercase mb-4">من نحن</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
              رواد الحماية <span className="text-muted-foreground">والعناية بالسيارات</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              تعتبر Skyfol علامة تجارية رائدة في مجال حلول حماية السيارات. نحن نجمع بين التكنولوجيا المتقدمة والحرفية العالية لنقدم لعملائنا أفضل تجربة حماية ممكنة. منتجاتنا مصممة لتحمل أقسى الظروف المناخية مع الحفاظ على لمعان سيارتك وكأنها جديدة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-foreground/80 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual - Square & Borderless */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 relative"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={heroBg}
                  alt="Skyfol Workshop"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Premium Animated Blob Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-16 -right-16 hidden md:block"
              >
                <div className="blob-card">
                  <div className="blob-card-element"></div>
                  <div className="blob-card-bg">
                    <div className="p-3 mb-2 translate-y-2">
                      <img src={skyfolLogo} alt="Logo" className="h-8 w-auto" />
                    </div>
                    <p className="text-3xl font-bold font-display text-primary dark:text-white leading-tight">10+</p>
                    <p className="font-bold text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-tight">
                      سنوات من الخبرة
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[80px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
