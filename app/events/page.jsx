import { getPageTitle } from "@/components/Metadata";
import Events from "@/features/web/Event/Events";
export const generateMetadata = () => ({
  title: getPageTitle("event"),
});
export default function EventsPage() {
  return (
    <>
      <Events />
    </>
  );
}
