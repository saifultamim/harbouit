import Image from "next/image";
import ps from "@/public/images/home/ps.png";
import ai from "@/public/images/home/ai.png";
import wp from "@/public/images/home/wp.png";
import ga from "@/public/images/home/ga.png";
import data from "@/public/images/home/data.png";
import smm from "@/public/images/home/smm.png";
import homeHero from "@/public/images/home/hero.png";
import aboutHero from "@/public/images/about/hero.png";

const Hero = ({ about = false }) => {
  const images = [ps, ai, wp, ga, data, smm];
  const heroImage = about ? "/images/about/hero.png" : "/images/home/hero.png";
  return (
    <div>
      <div
        className={`relative w-full aspect-[16/9] md:aspect-auto  bg-contain bg-no-repeat bg-center bg-gray-200/20  ${
          about ? "max-w-6xl mx-auto px-4 lg:px-0 mt-16 md:mt-28 lg:mt-44" : "bg-cover md:-mt-0 -mt-1 md:min-h-[90vh] lg:h-[140vh]"
        }`}
      >
        <Image src={about ? aboutHero : homeHero} alt="hero" className="" />
      </div>

      {!about && (
        <div className="bg-gradient-to-b from-[#FAFAFB] via-white to-transparent -translate-y-0 lg:-translate-y-20">
          <div 
          className="bg-gradient-to-b from-[#0F75BC] to-[#262262] w-fit md:max-w-xl mx-auto rounded-2x z-20 px-4 py-3 md:px-16 md:py-8 rounded-lg">
            <div className="flex justify-center gap-3 md:gap-9">
              {images.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon}
                  alt={`Service ${idx}`}
                  // width={60}
                  // height={60}
                  className="w-7 md:w-16"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
