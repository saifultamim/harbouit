import Link from "next/link";
import React from "react";
import CourseImage from "./CourseImage";
import { cn } from "@/utils/tailwind-utils";

const CourseCart = ({ course, textSize = "", link = true }) => {
  console.log("courseCart ", course);
  return (
    <div>
      <CourseImage courseImage={course?.ximage} />

      <div className="bg-course-gradient py-5 px-3 rounded-b-[10px]">
        <div className="font-montserrat_sans_serif font-bold lg:text-lg md:text-lg text-sm text-white flex justify-between xl:h-16 lg:h-16 md:h-20">
          <div className="text-sm w-full">
            <div className="flex justify-between">
              <p>19 seat left</p>
              <p>8 days to start</p>
            </div>
            <p>Batch 11</p>
          </div>
        </div>

        <Link
          href={link ? `/course/${course?.xitemcode}` : "#"}
          className={cn(
            `font-bold lg:text-base md:text-lg text-sm bg-white flex justify-between items-center py-3 px-8 rounded-md w-full montserrat`,
            textSize
          )}
        >
          <span>ENROLL NOW</span>
        </Link>
      </div>
    </div>
  );
};

export default CourseCart;
