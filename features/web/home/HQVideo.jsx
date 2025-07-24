import { Container } from "@/components/ui/Container";
import Image from "next/image";
import hqVideo from "@/public/images/home/hqVideo.png";

const HQVideo = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-end montserrat lg:gap-16 mt-8 md:mt-16">
        <div className="mx-auto">
          <Image src={hqVideo} alt="hq video" />
        </div>
        <div className=" md:w-8/12 space-y-2 mt-5 lg:mt-0 mx-auto">
          <h3 className="text-[#262262] text-2xl md:text-4xl font-bold">
            HQ Video Audio & Live Class
          </h3>
          <p className="text-base md:text-xl">
            Presents research conducted by researchers from across country
            examining what it is like for people
          </p>
          <p className="text-lg md:text-xl font-bold">
            LIVE CLASSES RECORDED CLASSES PRO INSTRUCTOR
          </p>
        </div>
      </div>
    </Container>
  );
};
export default HQVideo;
