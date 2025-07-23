import graphics from "@/public/images/courses/graphics.png";
import digital from "@/public/images/courses/digital.png";
import web from "@/public/images/courses/web.png";
import erp from "@/public/images/courses/erp.png";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const Courses = (title = "", desc = "") => {
  const courses = [
    { img: graphics, title1: "GRAPHICS", title2: "DESIGN" },
    { img: web, title1: "WEB", title2: "DESIGN" },
    { img: digital, title1: "DIGITAL", title2: "MARKETING" },
    { img: erp, title1: "ERP", title2: "DEVELOPMENT" },
  ];
  return (
    <Container>
      <div className="grid grid-cols-4">
        {courses?.map((course,idx) => (
          <div key={idx} className="">
            <Image src={course.img} alt={course.title1} />
            <h2>{course.title1}</h2>
            <h3>{course.title2}</h3>
          </div>
        ))}
      </div>
      <p>explore all courses</p>
    </Container>
  );
};

export default Courses;
