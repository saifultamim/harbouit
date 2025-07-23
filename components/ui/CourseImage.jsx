"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/public/images/logo/logo.png";
import { cn } from "@/utils/tailwind-utils";


const CourseImage = ({ courseImage }) => {
  const [imageError, setImageError] = useState(false);
  return (
    <div
      className={cn(
        "border-[#00A156]/20 aspect-[4/4] rounded-t-[21px] border-[0.5px]  border-b-[0px] w-full flex items-center justify-center overflow-hidden",
        imageError || courseImage === null ? "p-5" : ""
      )}
    >
      <Image
        src={imageError || courseImage === null ? logo.src : "/" + courseImage}
        alt="course"
        width={400}
        height={400}
        className="w-full object-content"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default CourseImage;
