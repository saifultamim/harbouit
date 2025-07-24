import { GALLERIES } from "@/utils/data/home/gallery";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="grid grid-cols-3 justify-center mt-9 md:mt-24">
      {GALLERIES.map((gallery, idx) => (
        <div key={idx}>
          <Image src={gallery} alt="Gallery" className="w-full" />
        </div>
      ))}
    </section>
  );
};
export default Gallery;
