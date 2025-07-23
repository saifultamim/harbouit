import Link from "next/link";
import React from "react";
import CourseImage from "./CourseImage";
import { cn } from "@/utils/tailwind-utils";



const CourseCart = ({
  course,
  textSize = "",
  link = true,
}) => {
  return (
    <div>
      <CourseImage courseImage={course?.ximage} />

      <div className="bg-green-gradient py-5 px-3 rounded-b-[10px]">
        <div className="font-montserrat_sans_serif font-bold lg:text-lg md:text-lg text-sm text-white flex justify-between xl:h-16 lg:h-16 md:h-20">
          <Link
            href={link ? `/courses/${course?.xitemcode}` : "#"}
            title={`${course?.xdesc}`}
            className="cursor-pointer"
          >
            {course?.xdesc?.length > 64
              ? course?.xdesc.slice(0, 64) + " ..."
              : course?.xdesc}
          </Link>
        </div>

        <Link
          href={link ? `/courses/${course?.xitemcode}` : "#"}
          className={cn(
            `font-bold lg:text-lg md:text-lg text-sm bg-white flex justify-between items-center py-3 px-8 rounded-md w-full mt-5 `,
            textSize
          )}
        >
          <span>ENROLL NOW</span>
          <svg
            fill="green"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CourseCart;
