import Image from "next/image";
import events from "@/public/images/events/events.png";
import { EVENTS } from "@/utils/data/home/events";

const Events = () => {
  return (
    <section>
      {/* section-1 */}
      <div>
        <Image src={events} alt="events" />
      </div>
      {/* section-2 */}
      <div>
        <div>UPCOMING EVENTS</div>
        <div>
          {EVENTS.map((param, idx) => (
            <div key={idx}>
              <Image src={param.img} alt="events" />
              <p>{param.date}</p>
              <p>{param.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
