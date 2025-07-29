import { Container } from "@/components/ui/Container";
import Image from "next/image";
import hqVideo from "@/public/images/home/hqVideo.png";

const HQVideo = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:flex items-end  montserrat mt-8 md:mt-12 md:gap-8 lg:mt-24 lg:gap-20">
        <div>
          <Image src={hqVideo} alt="hq video"/>
        </div>
        <div className="space-y-2 mt-5 lg:mt-0">
          <h3 className="text-[#262262] text-lg md:text-xl  lg:text-4xl font-bold max-w-40 lg:max-w-60">
            HQ Video Audio & Live Class
          </h3>
          <p className="text-base lg:text-xl max-w-xs">
            Presents research conducted by researchers from across country
            examining what it is like for people
          </p>
          <p className="text-lg lg:text-xl font-bold max-w-60">
            LIVE CLASSES RECORDED CLASSES PRO INSTRUCTOR
          </p>
        </div>
      </div>
    </Container>
  );
};
export default HQVideo;
