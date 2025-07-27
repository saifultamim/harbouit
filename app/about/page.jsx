import Hero from "@/components/ui/Hero";
import AboutCompnay from "@/features/web/about/AboutCompany";
import Events from "@/features/web/common/Events";
import Instructor from "@/features/web/common/Instructor";
import PromoBanner from "@/features/web/common/PromoBanner";
import SuccessStory from "@/features/web/common/SuccessStory";
import WhyUs from "@/features/web/common/WhyUs";

export default function AboutPage() {
  return (
    <>
      <Hero about={true} />
      <AboutCompnay />
      <Instructor />
      <PromoBanner />
      <WhyUs />
      <Events />
      <div className="mb-10 md:mb-20 lg:mb-24">
        <SuccessStory />
      </div>
    </>
  );
}
