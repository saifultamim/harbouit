import Image from "next/image";
import events from "@/public/images/events/events.png";
import { EVENTS } from "@/utils/data/home/events";

const Events = () => {
  return (
    <section className="montserrat mt-9 md:mt-16 lg:mt-28">
      <div className="relative ">
        <div className="">
          <Image src={events} alt="events" className="w-full" />
        </div>

        <div className="flex absolute h-full w-full justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:max-w-6xl gap-4 md:gap-12 lg:gap-24  md:px-9">
          <div className="bg-[#0088CF] [writing-mode:vertical-rl] rotate-180 text-white px-3 md:px-6  lg:px-20 text-xs md:text-xl lg:text-4xl font-bold lg:leading-9 py-3 lg:py-9 leading-4">
            <p>UPCOMING</p>
            <p>EVENTS</p>
          </div>
          <div className="flex items-end gap-2 md:gap-5 lg:gap-5 -translate-y-5 md:-translate-y-12 lg:-translate-y-20 text-white">
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className="rounded-sm md:rounded-md bg-[#D9D9D9] bg-opacity-50 px-2 md:px-5 py-0 md:py-0 lg:px-7 lg:py-0 "
              >
                <Image
                  src={event.img}
                  alt="events"
                  className="-translate-y-2 md:-translate-y-7 lg:-translate-y-8 bg-[#D9D9D9] w-5 md:w-16 lg:w-24 py-1 md:py-2 lg:py-4 px-1 "
                />
              <div className="-translate-y-1 md:-translate-y-4 lg:-translate-y-5 ">
                  <p className=" text-[9px] md:text-lg lg:text-4xl font-bold leading-3 md:leading-4 lg:leading-0">
                  {event.date}
                </p>
                <p className="text-[7px]  md:text-base lg:text-2xl font-medium truncate" title={event.desc}>
                  {/* {event.desc} */}
                  {event.desc.length > 20 ? `${event.desc.slice(0, 20)}...` : event.desc}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Events;