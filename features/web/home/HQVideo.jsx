import { Container } from "@/components/ui/Container";
import Image from "next/image";
import hqVideo from "@/public/images/home/hqVideo.png";

const HQVideo = () => {
  return (
    <Container>
      <div>
        <div>
          <Image src={hqVideo} alt="" />
        </div>
        <div>
          <h3>HQ Video Audio & Live Class</h3>
          <p>
            Presents research conducted by researchers from across country
            examining what it is like for people
          </p>
          <p>LIVE CLASSES RECORDED CLASSES PRO INSTRUCTOR</p>
        </div>
      </div>
    </Container>
  );
};
export default HQVideo;
