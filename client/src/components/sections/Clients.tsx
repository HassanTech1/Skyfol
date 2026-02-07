import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import logo1 from "@assets/1_1770453460967.png";
import logo2 from "@assets/2_1770453460968.png";
import logo3 from "@assets/3_1770453460969.png";
import logo4 from "@assets/4_1770453460969.png";
import logo5 from "@assets/5_1770453460970.png";
import logo6 from "@assets/6_1770453460970.png";

const partnerLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function Clients() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [AutoScroll({ speed: 1, stopOnInteraction: false })]
  );

  return (
    <section id="clients" className="py-20 border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h3 className="text-2xl font-bold text-gray-400">شركاء النجاح والثقة</h3>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex-[0_0_200px] min-w-0 flex justify-center items-center px-8 opacity-70 hover:opacity-100 transition-opacity cursor-default">
              <img src={logo} alt={`Partner ${index}`} className="h-16 w-auto grayscale brightness-200 hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {partnerLogos.map((logo, index) => (
            <div key={`dup-${index}`} className="flex-[0_0_200px] min-w-0 flex justify-center items-center px-8 opacity-70 hover:opacity-100 transition-opacity cursor-default">
              <img src={logo} alt={`Partner ${index}`} className="h-16 w-auto grayscale brightness-200 hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
