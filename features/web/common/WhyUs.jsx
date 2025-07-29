import { Container } from "@/components/ui/Container";
import { WHYUS } from "@/utils/data/home/whyus";

const WhyUs = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-9 md:mt-16 lg:mt-28 montserrat gap-3 md:gap-5 md:px-16 success-card">
        {WHYUS?.map((params) => (
          <div
            className="bg-lightSilver px-5 py-12 rounded-lg text-center flex flex-col justify-center"
            key={params.id}
          >
            <h2 className="text-[#0088CF] tex-xl md:text-4xl font-black leading-2">
              {params.value}
            </h2>
            <h3 className="font-bold text-base md:text-xl">{params.title}</h3>
            <p className="text-[13px] mt-2">{params.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default WhyUs;