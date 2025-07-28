import { getPageTitle } from "@/components/Metadata";
import Gallery from "@/features/web/common/Gallery";
import AllCourses from "@/features/web/course/AllCourses";
import { courses } from "@/utils/data/course/allCourse";
export const generateMetadata = () => ({
  title: getPageTitle("course"),
});
export default function CoursePage() {
  return (
    <>
      <AllCourses courses={courses} />
      <Gallery />
    </>
  );
}
