import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import logo from "@assets/skyfol-logo_1770237604954.png";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <img src={logo} alt="Skyfol" className="h-12 mb-6" />
            <p className="text-gray-400 leading-relaxed mb-6">
              الخيار الأول لحماية السيارات الفاخرة. نلتزم بتقديم أعلى معايير الجودة والخدمة لضمان رضا عملائنا.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              {['الرئيسية', 'من نحن', 'خدماتنا', 'معرض الأعمال', 'تواصل معنا'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">الخدمات</h4>
            <ul className="space-y-4">
              {['أفلام الحماية PPF', 'النانو سيراميك', 'التظليل العازل', 'تلميع السيارات', 'حماية الزجاج'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" />
                <span className="text-gray-400">الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" />
                <span className="text-gray-400">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" />
                <span className="text-gray-400">info@skyfol.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Skyfol. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
