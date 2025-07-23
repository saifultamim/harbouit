import { Container } from "@/components/ui/Container";
import { INSTRUCTORS } from "@/utils/data/home/instructor";
import Image from "next/image";

const Instructor = () => {
  return (
    <Container>
      <h2>Experts</h2>
      <p>you can count on</p>
      <section className="grid grid-cols-3 ">
        {INSTRUCTORS.map((instructor, idx) => (
          <div key={idx}>
            <Image src={instructor.img} alt="instructor" />
            <p>{instructor.name}</p>
            <p>{instructor.experArea}</p>
            <p>{instructor.education}</p>
          </div>
        ))}
      </section>
    </Container>
  );
};
export default Instructor;
