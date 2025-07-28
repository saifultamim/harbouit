"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { SUCCESS_STORIES } from "@/utils/data/home/successStory";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

function VariableWidth() {
  const [cardWidth, setCardWidth] = useState(500);
  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },

      {
        breakpoint: 320, // Phones
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 2000) setCardWidth(800);
      else {
        setCardWidth(500);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Container className="max-w-full px-0 montserrat mt-9 md:mt-16 lg:mt-32">
      <p className="text-lg md:text-2xl lg:text-4xl text-center mb-3 md:mb-7">
        SUCESS STORIES
      </p>
      <div className="text-[#D9D9D9] text-sm">
        <Slider {...settings}>
          {SUCCESS_STORIES?.map((story, idx) => (
            <div key={idx} className="px-4" style={{ width: cardWidth }}>
              <div className="bg-[#0F75BC] rounded-2xl h-full shadow-lg flex flex-col px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-10">
                <div className="flex justify-start">
                  <Image
                    src={story.img}
                    alt="story"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="mt-3 text-justify">{`"${story.desc}"`}</p>
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
    </Container>
  );
}

export default VariableWidth;
