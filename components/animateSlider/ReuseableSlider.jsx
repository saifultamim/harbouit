"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import leftArrow from '@/public/images/instructor/leftArrow.png'
import rightArrow from '@/public/images/instructor/rightArrow.png'
import Image from "next/image";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute lg:-right-9 -right-3  top-1/2  transform -translate-y-1/2 z-10 cursor-pointer md:block hidden"
      onClick={onClick}
    >
     
      <Image src={rightArrow} alt='rightArrow' />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2  lg:-left-9 -left-3 transform -translate-y-1/2 z-10 cursor-pointer md:block hidden"
      onClick={onClick}
    >
     
      <Image src={leftArrow} alt="leftArrow" />
    </div>
  );
};

function ReuseableSlider({ children, responsive = false, slides = true }) {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: responsive ? false : false,
    arrows: responsive ? true : false,
    nextArrow: responsive ? <NextArrow /> : null,
    prevArrow: responsive ? <PrevArrow /> : null,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: responsive ? 3 : 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: responsive ? 4000 : 2000,
    cssEase: "linear",

    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-1 h-1 rounded-full ${
          currentSlide === i ? "bg-black" : "bg-gray-300"
        }`}
      />
    ),
    responsive: responsive
      ? [
          {
            breakpoint: 1320,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: responsive ? 2 : 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            },
          },
        ]
      : [
          {
            breakpoint: 1320,
            settings: {
              // slidesToShow: 4,
              slidesToShow: slides ? 3 : 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            },
          },
        ],
  };

  return (
    <div
      ref={sliderRef}
      className="slider-container relative"
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default ReuseableSlider;
