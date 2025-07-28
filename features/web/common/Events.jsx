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
          <div className="bg-[#0088CF] [writing-mode:vertical-rl] rotate-180 text-white px-3 md:px-6 lg:px-16 text-xs md:text-xl lg:text-4xl font-bold lg:leading-9 py-3   lg:py-9 leading-4">
            <p>UPCOMING</p>
            <p>EVENTS</p>
          </div>
          <div className="flex items-end gap-2 md:gap-5 lg:gap-9 -translate-y-5 md:-translate-y-12 lg:-translate-y-16 text-white">
            {EVENTS.map((param, idx) => (
              <div
                key={idx}
                className="rounded-md bg-[#D9D9D9] bg-opacity-50 px-2 md:px-5 py-1 md:py-3 lg:px-9 lg:py-5 "
              >
                <Image
                  src={param.img}
                  alt="events"
                  className="-translate-y-2 md:-translate-y-9 lg:-translate-y-12 w-5 md:w-12 lg:w-auto bg-[#D9D9D9]  py-1 md:py-2 lg:py-4"
                />
                <p className=" text-[9px] md:text-lg lg:text-4xl font-bold leading-3 sm:leading-0">
                  {param.date}
                </p>
                <p className="text-[7px]  md:text-base lg:text-2xl font-medium">
                  {param.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Events;
