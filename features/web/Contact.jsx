"use client";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Image from "next/image";
import { useState } from "react";
import contact from '@/public/images/career/map.png'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  return (
    <div className="">
      <div className="relative z-10 bg-[#F8F8F8] shadow-lg rounded-lg  mx-auto mt-10 border border-green-600 top-[16px] md:top-[28px] lg:top-[38px] py-3 md:py-14 lg:py-20 grid grid-cols-2">
      <div>
        <Image src={contact} alt="career image" />
       </div>
        <form className=" space-y-2 md:space-y-4 px-3 md:px-0 md:w-2/3 mx-auto">
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
          <div className="pt-6 md:pt-7 lg:pt-10">
            <button className="w-full  text-white py-3 text-lg font-semibold rounded-md shadow-gray-400 shadow-md">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
