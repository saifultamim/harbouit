import { Container } from "@/components/ui/Container";
import { stories, STORIES_VIEW } from "@/utils/data/Events";
import EventsTitle from "./EventsTitle";
import EventsCart from "./EventsCart";
import Link from "next/link";

const Events = ({title="events"}) => {
      const cardsDisplay =
    title === STORIES_VIEW.STORIES ? stories.length : STORIES_VIEW.CARD_DISPLAY;
    return (
        <Container className='mt-16 md:mt-28 lg:mt-40'>
          
      <h2 className="text-center text-[#262262] text-xl font-bold md:mb-14 mb-10 mt-6 capitalize">
        {title}
      </h2>
      <EventsCart cardsDisplay={cardsDisplay} stories={stories} />

      {/* {title.toLowerCase() == STORIES_VIEW.NEWSLETTER && (
        <div className="mt-7">
          <Link
            href="/stories"
            className=" bg-[#00A657] text-white w-full py-2 text-center md:text-xl text-lg font-normal hover:bg-green-700 transition"
          >
            <button className="bg-[#00A657] text-white w-full py-2 text-center md:text-xl text-lg font-normal hover:bg-green-700 transition uppercase">
              view all press releases
            </button>
          </Link>
        </div>
      )} */}

        </Container>
    )
}
export default Events;