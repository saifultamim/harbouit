// import React from "react";
// import ps from "@/public/images/home/ps.png";
// import ai from "@/public/images/home/ai.png";
// import wp from "@/public/images/home/wp.png";
// import ga from "@/public/images/home/ga.png";
// import data from "@/public/images/home/data.png";
// import smm from "@/public/images/home/smm.png";
// import Image from "next/image";
// const Hero = ({
//   upcomingCourses = true,
//   image = "/images/home/hero.png",
//   aboutClassName = false,
// }) => {
//   const images = [ps, ai, wp, ga, data, smm];
//   return (
//     <div>
//       <div
//         className="relative w-full aspect-[16/9] md:aspect-auto md:min-h-[90vh]   md:bg-cover bg-contain bg-no-repeat bg-center md:-mt-0 -mt-1 lg:h-[110vh] bg-gray-200/20"
//         style={{ backgroundImage: `url(${image})` }}
//       >
//          {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div> */}
//          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white via-white/90 to-transparent z-10"></div>
//       </div>

//       {upcomingCourses && (

//         <div className="w-full bg-gradient-to-b from-blue-500 to-[#2a175a] py-8 max-w-2xl mx-auto rounded-2xl -translate-y-9 z-20">
//       <div className="flex justify-center gap-9">
//         {images.map((icon, idx) => (

//             <Image src={icon}  alt={`Service ${idx}`}  />

//         ))}
//       </div>
//     </div>
//       )}
//     </div>
//   );
// };

// export default Hero;
import Image from "next/image";
import ps from "@/public/images/home/ps.png";
import ai from "@/public/images/home/ai.png";
import wp from "@/public/images/home/wp.png";
import ga from "@/public/images/home/ga.png";
import data from "@/public/images/home/data.png";
import smm from "@/public/images/home/smm.png";

const Hero = ({
  // upcomingCourses = true,
  // image = "/images/home/hero.png",
  about = false,
}) => {
  // Use the .src property so we only pass the URL, not the whole object
  const images = [ps.src, ai.src, wp.src, ga.src, data.src, smm.src];
  const heroImage = about ? "/images/about/hero.png" : "/images/home/hero.png";
  return (
    <div>
      <div
        // className={about ? "" : "relative w-full aspect-[16/9] md:aspect-auto md:min-h-[90vh] md:bg-cover bg-contain bg-no-repeat bg-center md:-mt-0 -mt-1 lg:h-[110vh] bg-gray-200/20"}
        className={`relative w-full aspect-[16/9] md:aspect-auto md:min-h-[90vh] lg:h-[110vh] bg-contain bg-no-repeat bg-center bg-gray-200/20 ${
          about ? "max-w-6xl mx-auto" : "md:bg-cover md:-mt-0 -mt-1"
        }`}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {about || (
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white via-white/90 to-transparent z-10"></div>
        )}
      </div>

      {!about && (
        <div className="w-full bg-gradient-to-b from-blue-500 to-[#2a175a] py-8 max-w-2xl mx-auto rounded-2xl -translate-y-9 z-20">
          <div className="flex justify-center gap-9">
            {images.map((icon, idx) => (
              <Image
                key={idx}
                src={icon}
                alt={`Service ${idx}`}
                width={60}
                height={60}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
