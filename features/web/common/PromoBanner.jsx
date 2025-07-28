import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const PromoBanner = () => {
  return (
    <div className="bg-black py-6 md:py-12 lg:py-16 text-white mt-9 md:mt-16 lg:mt-24">
      <Container>
        <div className="md:flex justify-between items-center montserrat space-y-4 sm:space-y-0 text-center md:text-start">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold">
            SECURE YOUR FUTURE
            <br /> WITH NEXT GEN SKILLSET
          </h2>
          <Button className="bg-[#0088CF] w-fit md:px-10 lg:px-20 md:py-2 lg:py-4 text-base md:text-lg lg:text-2xl font-normal">
            Register Now
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default PromoBanner;
