"use client";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Image from "next/image";
import { useState } from "react";
import career from '@/public/images/career/career.png'
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const Career = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  return (
    <Container className="mt-16 md:mt-28 lg:mt-40 mb-10 md:mb-20 lg:mb-32">
      <div className="relative z-10 bg-[#F8F8F8] shadow-xl rounded-lg  mx-auto mt-10 top-[16px] md:top-[28px] lg:top-[38px] py-3 md:py-0 md:pt-14 lg:pt-16 grid md:grid-cols-2 items-end lg:px-9">
      <div className='hidden sm:block'>
        <Image src={career} alt="career image" />
       </div>
       <div className=" space-y-2 md:space-y-4 px-3 w-full mx-auto">
        <h2 className="text-[#262262] montserrat font-semibold text-xl text-end">CAREER</h2>
         <form className="space-y-3 py-6">
          <div>
            <Label>NAME</Label>
            <Input type="text" name="name" className="w-full mt-1" />
          </div>
          <div>
            <Label>EMAIL ID</Label>
            <Input type="email" name="email" className="w-full mt-1" />
          </div>
          <div>
            <Label>ADDRESS</Label>
            <Input type="text" name="address" className="w-full mt-1" />
          </div>
          <div>
            <Label>PROJECT</Label>

            <div className="relative">
              <Input
                type="text"
                name="project"
                defaultValue={selectedValue}
                className="w-full mt-1"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style={{ transform: "rotate(90deg)", cursor: "pointer" }}
                className="absolute top-4 right-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
              </svg>

              {isOpen && (
                <div className="absolute top-12 right-0 w-full bg-white border border-gray-300 shadow-md rounded-md z-10">
                  <ul className="p-2">
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelect("Category 1")}
                    >
                      Category 1
                    </li>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelect("Category 2")}
                    >
                      Category 2
                    </li>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelect("Category 3")}
                    >
                      Category 3
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div>
            <Label>INTERESTED IN</Label>
            <Input type="text" name="interested" className="w-full mt-1" />
          </div>
          <div>
            <Label>APPOINTMENT DATE</Label>
            <Input type="date" name="date" className="w-full mt-1" />
          </div>
          <div className="pt-6 md:pt-5 montserrat">
        
            <Button className='bg-[#262262] text-xs py-3'>SUBMIT</Button>
            <Button className="bg-[#0088CF] mt-4 text-xs py-3">LOG IN / SIGN UP</Button>
          </div>
        </form>
       </div>
      </div>
    </Container>
  );
};

export default Career;
