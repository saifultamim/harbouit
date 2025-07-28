import { getPageTitle } from "@/components/Metadata";
import Contact from "@/features/web/Contact";

export const generateMetadata = () => ({
  title: getPageTitle("contact"),
});
export default function ContactPagre() {
  return (
    <>
      <Contact />
    </>
  );
}
