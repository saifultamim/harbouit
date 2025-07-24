import graphics from "@/public/images/courses/graphics.png";
import digital from "@/public/images/courses/digital.png";
import web from "@/public/images/courses/web.png";
import erp from "@/public/images/courses/erp.png";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Courses = (title = "", desc = "") => {
  const courses = [
    { img: graphics, title1: "GRAPHICS", title2: "DESIGN" },
    { img: web, title1: "WEB", title2: "DESIGN" },
    { img: digital, title1: "DIGITAL", title2: "MARKETING" },
    { img: erp, title1: "ERP", title2: "DEVELOPMENT" },
  ];
  return (
    <Container>
      <div className="mx-auto pb-8 montserrat">
        <h1 className="text-[#262262]  text-2xl md:text-4xl font-bold text-center leading-6">
          COURSES
        </h1>
        <p className="text-base md:text-2xl text-center mb-3">we offer</p>
        <hr className="border border-[#262262]/30 mt-5" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3 lg:mt-20">
        {courses?.map((course, idx) => (
          <div
            key={idx}
            className="px-2 sm:px-4 py-4 sm:py-12  rounded-xl bg-white shadow-[0_0_15px_0px_#0F75BC99] "
          >
            <Image
              src={course.img}
              alt={course.title1}
              className="w-9 md:w-14 lg:w-[70px]"
            />
            <h2 className="text-[#0F75BC] text-base md:text-xl lg:text-3xl font-bold mt-3">
              {course.title1}
            </h2>
            <h3 className="text-sm md:text-base lg:text-xl">{course.title2}</h3>
          </div>
        ))}
      </div>
      <div className='text-center montserrat mt-8 md:mt-16'>
      <Button className="bg-[#0088CF] w-fit text-center px-9 md:px-24 py-3">EXPLORE ALL COURSES</Button>
      </div>

    </Container>
  );
};

export default Courses;
