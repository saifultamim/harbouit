import Image from "next/image";
import ps from "@/public/images/home/ps.png";
import ai from "@/public/images/home/ai.png";
import wp from "@/public/images/home/wp.png";
import ga from "@/public/images/home/ga.png";
import data from "@/public/images/home/data.png";
import smm from "@/public/images/home/smm.png";
import homeHero from "@/public/images/home/hero.png";
import aboutHero from "@/public/images/about/hero.png";
import { Container } from "./Container";

const Hero = ({ about = false }) => {
  const images = [ps, ai, wp, ga, data, smm];
  const heroImage = about ? "/images/about/hero.png" : "/images/home/hero.png";
  return (
    <div className="">
      <div
        className={` ${
          about
            ? "relative w-full aspect-[16/9] md:aspect-auto  bg-contain bg-no-repeat bg-center max-w-5xl mx-auto px-4 lg:px-0 mt-16 md:mt-28 lg:mt-44"
            : "relative"
        }`}
      >
        <Image
          src={about ? aboutHero : homeHero}
          alt="hero"
          className="w-full"
        />
        {!about && (
          <div className="absolute top-1/3 w-full mx-auto">
            <div className="w-9/12 mx-auto montserrat">
              <p className="text-[#262262] text-sm md:text-2xl lg:text-[35px] font-normal">
                UNLOCK YOU
              </p>
              <p className="text-[#0088CF] text-xl md:text-4xl lg:text-[64px] font-bold md:leading-[45px] lg:leading-[80px]">
                POTENTIALS
              </p>
            </div>
          </div>
        )}
      </div>

      {!about && (
        <div className="">
          {/* <div className="bg-gradient-to-b from-[#0F75BC] to-[#262262] w-fit md:max-w-xl mx-auto rounded-2x z-20 px-4 py-3 md:px-16 md:py-8 rounded-lg"> */}
          <div className="bg-gradient-to-b from-[#0F75BC] to-[#262262] w-fit mx-auto rounded-2x z-20 px-4 py-3 md:px-16 md:py-8 2xl:px-28  rounded-lg">
            <div className="flex justify-center gap-3 md:gap-9">
              {images.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon}
                  alt={`Service ${idx}`}
                  // className="w-7 md:w-16 "
                  className="w-7 md:w-10 lg:w-12 2xl:w-28 "
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
