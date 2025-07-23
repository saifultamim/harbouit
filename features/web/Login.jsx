"use client";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Image from "next/image";
import { useState } from "react";
import career from '@/public/images/career/career.png'

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  return (
    <div className="">
      <div className="relative z-10 bg-[#F8F8F8] shadow-lg rounded-lg  mx-auto mt-10 border border-green-600 top-[16px] md:top-[28px] lg:top-[38px] py-3 md:py-14 lg:py-20">
   
        <form className=" space-y-2 md:space-y-4 px-3 md:px-0  mx-auto">
          <div>
            <Label>USER NAME</Label>
            <Input type="text" name="name" className="w-full mt-1" />
          </div>
          <div>
            <Label>PASSWORD</Label>
            <Input type="email" name="email" className="w-full mt-1" />
          </div>
        
   

         
          <div className="pt-6 md:pt-7 lg:pt-10">
            <button className="w-full  text-white py-3 text-lg font-semibold rounded-md shadow-gray-400 shadow-md">
              SUBMIT
            </button>


            <p>For New Registration, Click Here</p>
              <button className="w-full  text-white py-3 text-lg font-semibold rounded-md shadow-gray-400 shadow-md">
           SIGN UP / REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
