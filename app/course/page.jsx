import Gallery from "@/features/web/common/Gallery";
import AllCourses from "@/features/web/course/AllCourses";
import { courses } from "@/utils/data/course/allCourse";

export default function CoursePage() {
  return (
    <>
     <div className="lg:w-[60rem] md:w-9/12  mx-auto px-4 mt-32">
 
        <AllCourses courses={courses} />
      </div>
      <Gallery />
    </>
  );
}
