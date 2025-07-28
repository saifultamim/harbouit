import { getPageTitle } from "@/components/Metadata";
import Career from "@/features/web/Career";
export const generateMetadata = () => ({
  title: getPageTitle("career"),
});

export default function CareerPage() {
  return (
    <>
      <Career />
    </>
  );
}
