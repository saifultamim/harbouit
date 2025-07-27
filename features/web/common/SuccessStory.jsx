// import { SUCCESS_STORIES } from "@/utils/data/home/successStory";
// import Image from "next/image";

// const SuccessStory = () => {
//   return (
//     <section className="">
//       {SUCCESS_STORIES?.map((story, idx) => (
//         <div key={idx}>
//           <Image src={story.img} alt="story" />
//           <p>{story.desc}</p>
//           <p>{story.name}</p>
//           <p>{story.designation}</p>
//           <p>{story.company}</p>
//         </div>
//       ))}
//     </section>
//   );
// };
// export default SuccessStory;
// ==========================================================
// "use client";
// import React from "react";
// import Slider from "react-slick";
// import { SUCCESS_STORIES } from "@/utils/data/home/successStory";
// import Image from "next/image";

// function MultipleItems() {
//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     //   responsive: [
//     //   {
//     //     breakpoint: 1024,
//     //     settings: {
//     //       slidesToShow: 2,
//     //       slidesToScroll: 1,
//     //     }
//     //   },
//     //   {
//     //     breakpoint: 640,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     }
//     //   }
//     // ]
//   };
//   return (
//     <div className="slider-container border border-red-600 text-[#D9D9D9] montserrat text-base">
//       <Slider {...settings} className="">
//         {SUCCESS_STORIES?.map((story, idx) => (
//           <div key={idx} className="bg-[#0F75BC] rounded-2xl">
//             <Image src={story.img} alt="story" />
//             <p className="">{story.desc}</p>
//             <p className="font-semibold">{story.name}</p>
//             <p>{story.designation}</p>
//             <p>{story.company}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default MultipleItems;
// ========================================================
"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { SUCCESS_STORIES } from "@/utils/data/home/successStory";

function TestimonialsSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="slider-container text-[#D9D9D9] montserrat text-base">
      <div><p className="montserrat text-4xl font-normal text-[#000000] text-center">SUCESS STORIES</p></div>
      <Slider {...settings} className="-mx-16">
        {SUCCESS_STORIES?.map((story, idx) => (
          <div key={idx} className="px-4">
            <div className="bg-[#0F75BC] rounded-2xl h-full shadow-lg flex flex-col px-14 py-12">
              <div className="flex justify-start">
                <Image
                  src={story.img}
                  alt="story"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="mt-3">
                {`"${story.desc}"`}
              </p>
              <div className="mt-6">
                <p className="font-semibold">{story.name}</p>
                <p>{story.designation}</p>
                <p>{story.company}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsSlider;
