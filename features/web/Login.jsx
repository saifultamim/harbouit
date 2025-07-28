"use client";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { useState } from "react";
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
    <Container className="max-w-3xl mt-20 md:mt-28 lg:mt-60 mb-10 md:mb-20 lg:mb-32">
      <h2 className="text-[#262262] montserrat font-semibold text-xl text-center mb-3 lg:mb-9">
        LOG IN
      </h2>
      <div className="relative z-10 bg-[#F8F8F8] shadow-xl rounded-lg  mx-auto top-[13px] md:top-[28px] lg:top-[2px] py-3 md:py-14 lg:py-14 md:px-9">
        <form className=" space-y-2 md:space-y-4 px-3 md:px-0  mx-auto py-3 md:py-0 md:w-2/3">
          <div>
            <Label>USER NAME</Label>
            <Input type="text" name="name" className="w-full mt-1" />
          </div>
          <div>
            <Label>PASSWORD</Label>
            <Input type="email" name="email" className="w-full mt-1" />
          </div>

          <div className="pt-3 md:pt-2">
            <Button className="bg-[#262262] text-xs py-3">SUBMIT</Button>

            <p className="montserrat text-xs font-normal text-center mt-12">
              For New Registration, Click Here
            </p>

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
