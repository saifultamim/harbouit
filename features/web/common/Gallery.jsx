import Image from "next/image";
import { GALLERIES } from "@/utils/data/home/gallery";

const Gallery = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mt-9 md:mt-16 lg:mt-24">
      {GALLERIES.map((gallery, idx) => (
        <div key={idx} className="group [perspective:1000px] w-full">
          <div className="relative w-full aspect-[4/3] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden">
              <Image
                src={gallery.img}
                alt="Gallery"
                fill
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute inset-0 bg-[#262262] text-white  p-4 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="text-base md:text-2xl lg:text-5xl font-black montserrat">
                {gallery.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
