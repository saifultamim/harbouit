import ReuseableSlider from "@/components/animateSlider/ReuseableSlider";
import { Container } from "@/components/ui/Container";
import { INSTRUCTORS } from "@/utils/data/home/instructor";
import Image from "next/image";

const Instructor = () => {
  return (
    <Container>
      <div className="montserrat text-center mt-9 md:mt-28 mb-9 md:mb-16">
        <h2 className="text-[#0088CF] font-black text-2xl md:text-4xl lg:text-6xl">EXPERTS</h2>
        <p className="text-lg md:text-2xl">you can count on</p>
      </div>

      <ReuseableSlider responsive={true}>
        {INSTRUCTORS?.map((teacher, idx) => (
          <div key={idx} className="">
            <div className=" mb-4 bg-white w-11/12 mx-auto">
              <Image
                src={teacher?.img || user}
                alt={teacher?.name}
                className=" mx-auto shadow-[3px_6px_24px_rgba(0, 0, 0, 0.25)] w-full"
              />

              <div className=" mx-auto shadow-custom rounded-b-[8px] -mt-3 montserrat">
                <div className="px-3 py-6">
                  <p
                    className={`${
                      teacher?.name?.length > 20 ? "text-sm" : "text-base"
                    } text-black font-extrabold uppercase`}
                  >
                    {teacher?.name}
                  </p>
                  <p className="text-xs text-[#333333]">
                    {teacher?.expertArea || "Top Rated Freelancer"}
                  </p>
                  <p className="text-xs text-[#333333] font-medium">
                    {teacher?.education}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ReuseableSlider>
    </Container>
  );
};
export default Instructor;
