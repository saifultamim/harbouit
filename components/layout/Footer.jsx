import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo/footerLogo.png";
import { FOOTER } from "@/utils/data/constant";
import { Container } from "../ui/Container";
import facebook from "@/public/images/logo/facebook.png";
import linkedin from "@/public/images/logo/linkedin.png";
import youtube from "@/public/images/logo/youtube.png";

const socialMedia = [facebook, linkedin, youtube];
const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#0F75BC] to-[#262262] py-9">
      <Container className=" ">
        <div className="grid grid-cols-2 justify-between text-white montserrat text-sm">
          <div className="">
            <Image alt="logo" src={logo} className="" />
            <p className="w-5/6 mt-7">{FOOTER.DESC}</p>
          </div>

          <div className="text-end">
            <p>{FOOTER.ADDRESS.BUILDING}</p>
            <p>{FOOTER.ADDRESS.STREET}</p>
            <p>{FOOTER.ADDRESS.AREA}</p>
            <p>{FOOTER.ADDRESS.CITY}</p>
            <p className="mt-5">{FOOTER.CELL}</p>
            <p>{FOOTER.EMAIL}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-8">
          <hr className='w-full'/>
          <div className="flex items-center gap-5">
            {
              socialMedia?.map((params,idx)=><Image key={idx} src={params} alt="social media" />)
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
