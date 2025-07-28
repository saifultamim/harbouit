import { getPageTitle } from "@/components/Metadata";
import SpecificCourse from "@/features/web/course/SpecificCourse";
export const generateMetadata = () => ({
  title: getPageTitle("course"),
});
export default function SpecificCoursePage({ params }) {
  return (
    <>
      <SpecificCourse />
    </>
  );
}
