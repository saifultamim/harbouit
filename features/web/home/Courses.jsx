import graphics from "@/public/images/courses/graphics.png";
import digital from "@/public/images/courses/digital.png";
import web from "@/public/images/courses/web.png";
import erp from "@/public/images/courses/erp.png";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Courses = (title = "", desc = "") => {
  const courses = [
    {id:1, img: graphics, title1: "GRAPHICS", title2: "DESIGN" },
    {id:2,  img: web, title1: "WEB", title2: "DESIGN" },
    { id:3, img: digital, title1: "DIGITAL", title2: "MARKETING" },
    {id:4,  img: erp, title1: "ERP", title2: "DEVELOPMENT" },
  ];
  return (
    <Container className="mt-8 md:mt-13 lg:mt-24">
      <div className="mx-auto pb-8">
        <h1 className="text-[#262262] text-2xl md:text-4xl font-bold text-center montserrat">
          COURSES
        </h1>
        <p className="text-base md:text-2xl text-center mb-3 montserrat -mt-1">
          we offer
        </p>
        <hr className="border border-[#262262]/30 mt-5 w-11/12 mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-0 md:mt-3 lg:mt-16">
        {courses?.map((course) => (
          <div
            key={course.id}
            className="px-2 sm:px-6 py-4 sm:py-12 rounded-xl  md:rounded-[27px] bg-white shadow-[0_0_15px_0px_#0F75BC99] lg:shadow-[0_0_18px_0px_#0F75BC99] montserrat mt-4 sm:mt-0"
          >
            <Image
              src={course.img}
              alt={course.title1}
              quality={95}
            />
            <h2 className="text-[#0F75BC] text-base md:text-xl lg:text-3xl font-bold mt-4">
              {course.title1}
            </h2>
            <h3 className="text-sm md:text-base lg:text-xl">{course.title2}</h3>
          </div>
        ))}
      </div>
      <div className="text-center montserrat mt-8 md:mt-10 lg:mt-16">
        <Button className="bg-[#0088CF] w-fit text-center px-9 md:px-24 py-3 border border-black shadow-md shadow-black/40">
          <span className="text-base md:text-lg lg:text-xl font-bold">
            EXPLORE ALL COURSES
          </span>
        </Button>
      </div>
    </Container>
  );
};

export default Courses;
