import { Container } from "@/components/ui/Container";
import { WHYUS } from "@/utils/data/home/whyus";

const WhyUs = () => {
  return (
    <Container>
      <div className="grid grid-cols-5">
        {WHYUS?.map((params, idx) => (
          <div className="bg-lightSilver" key={idx}>
            <h2>{params.value}</h2>
            <h3>{params.title}</h3>
            <p>{params.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default WhyUs;
