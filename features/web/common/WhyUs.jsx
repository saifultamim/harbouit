import { Container } from "@/components/ui/Container";
import { WHYUS } from "@/utils/data/home/whyus";

const WhyUs = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-9 md:mt-24 montserrat gap-3 md:gap-8 md:px-14">
        {WHYUS?.map((params, idx) => (
          <div className="bg-lightSilver px-6 py-12 rounded-lg text-center" key={idx}>
            <h2 className="text-[#0088CF] tex-xl md:text-4xl font-black leading-2">{params.value}</h2>
            <h3 className="font-bold text-base md:text-xl">{params.title}</h3>
            <p className='text-xs md:text-sm mt-2'>{params.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default WhyUs;
