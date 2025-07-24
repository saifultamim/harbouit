"use client";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Image from "next/image";
import { useState } from "react";
import career from "@/public/images/career/career.png";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  return (
 <Container className='max-w-xl mt-16 md:mt-28 lg:mt-40'>
   <div className="relative z-10 bg-[#F8F8F8] shadow-xl rounded-lg  mx-auto mt-10 top-[16px] md:top-[28px] lg:top-[38px] py-3 md:py-14 lg:py-14 md:px-9">
        <form className=" space-y-2 md:space-y-4 px-3 md:px-0  mx-auto">
          <div>
            <Label>USER NAME</Label>
            <Input type="text" name="name" className="w-full mt-1" />
          </div>
          <div>
            <Label>PASSWORD</Label>
            <Input type="email" name="email" className="w-full mt-1" />
          </div>

          <div className="mt-4">
            <Button className="bg-[#262262] text-xs py-3">SUBMIT</Button>

            <p className='montserrat text-xs font-normal text-center mt-12'>For New Registration, Click Here</p>

            <Button className="bg-[#0088CF] mt-4 text-xs py-3">
              LOG IN / SIGN UP
            </Button>
          </div>
        </form>
      </div>
 </Container>
  );
};

export default Login;
