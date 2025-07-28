import { Container } from "@/components/ui/Container";
import { stories, STORIES_VIEW } from "@/utils/data/Events";
import EventsCart from "./EventsCart";

const Events = ({ title = "events" }) => {
  const cardsDisplay =
    title === STORIES_VIEW.STORIES ? stories.length : STORIES_VIEW.CARD_DISPLAY;
  return (
    <Container className="mt-16 md:mt-28 lg:mt-40 mb-10 md:mb-20 lg:mb-24">
      <h2 className="text-center text-[#262262] text-lg lg:text-xl font-bold mb-6 md:mb-8 lg:mb-10 pt-4 capitalize">
        {title}
      </h2>
      <EventsCart cardsDisplay={cardsDisplay} stories={stories} />
    </Container>
  );
};
export default Events;
