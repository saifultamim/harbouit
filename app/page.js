import Hero from "@/components/ui/Hero";
import Events from "@/features/web/common/Events";
import Gallery from "@/features/web/common/Gallery";
import Instructor from "@/features/web/common/Instructor";
import PromoBanner from "@/features/web/common/PromoBanner";
import SuccessStory from "@/features/web/common/SuccessStory";
import WhyUs from "@/features/web/common/WhyUs";
import Courses from "@/features/web/home/Courses";
import HQVideo from "@/features/web/home/HQVideo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Courses />
      <HQVideo />
      <PromoBanner />
      <WhyUs />
      <Events />
      <SuccessStory />
      <Instructor />
      <Gallery />
    </>
  );
}
