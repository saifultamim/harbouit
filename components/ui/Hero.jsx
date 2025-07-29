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
  const images = [{id:1,img:ps},{id:2,img:ai},{id:3,img:wp},{id:4,img:ga},{id:5,img:data},{id:6,img:smm}];
  const heroImage = about ? "/images/about/hero.png" : "/images/home/hero.png";
  return (
    <div className="">
      <div
        className={` ${
          about
            ? "relative w-full aspect-[16/9] md:aspect-auto bg-contain bg-no-repeat bg-center max-w-5xl mx-auto px-4 md:w-11/12 lg:px-0 mt-20 md:mt-28 lg:mt-44"
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
          <div className="bg-gradient-to-b from-[#0F75BC] to-[#262262] border border-[#000000] w-10/12 sm:w-fit mx-auto rounded-2x z-20 px-12 py-5 md:px-16 lg:px-28 lg:py-11 md:py-8 2xl:px-28  rounded-xl md:rounded-[20px]">
            <div className="grid grid-cols-3 md:flex justify-center gap-4 md:gap-4 lg:gap-9">
              {images.map((icon) => (
                <Image
                  key={icon.id}
                  src={icon.img}
                  alt={`Service ${icon.id}`}
                  className="mx-auto"
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
