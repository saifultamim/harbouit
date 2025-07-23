import { SUCCESS_STORIES } from "@/utils/data/home/successStory";
import Image from "next/image";

const SuccessStory = () => {
  return (
    <section className="grid grid-cols-3">
      {SUCCESS_STORIES?.map((story, idx) => (
        <div key={idx}>
          <Image src={story.img} alt="story" />
          <p>{story.desc}</p>
          <p>{story.name}</p>
          <p>{story.designation}</p>
          <p>{story.company}</p>
        </div>
      ))}
    </section>
  );
};
export default SuccessStory;
