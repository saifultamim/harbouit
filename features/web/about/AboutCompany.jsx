import Image from "next/image";
import React from "react";
import { ABOUT_COMPANY } from "@/utils/data/about/aboutCompany";

const AboutCompnay = () => {
  return (
    <div className="xl:w-8/12 lg:w-10/12 md:w-9/12  px-4 mx-auto text-center lg:mt-28 md:mt-10">
      <p className="text-[#323131] text-[15px] font-semibold montserrat mb-1">
        {ABOUT_COMPANY.WELCOME_MESSAGE}
      </p>
      <div className="">
        <Image
          src={ABOUT_COMPANY.LOGO}
          alt="logo"
          className="w-48 mx-auto mb-2"
        />
      </div>
      <div className="font-semibold text-[13px] leading-5 text-center space-y-5 montserrat">
        <p className="font-semibold">{ABOUT_COMPANY.HEADLINE}</p>
        <p>{ABOUT_COMPANY.ABOUT_US}</p>
        <p className="">{ABOUT_COMPANY.OFFERING}</p>
        <p>{ABOUT_COMPANY.TEAM_INFO}</p>
        <p>{ABOUT_COMPANY.MISSION}</p>
      </div>
    </div>
  );
};

export default AboutCompnay;
