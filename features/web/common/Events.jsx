import Image from "next/image";
import events from "@/public/images/events/events.png";
import { EVENTS } from "@/utils/data/home/events";

const Events = () => {
  return (
    <section className="montserrat">
      <div className="">
        {/* section-1 */}
        <div className=" border-2 border-orange-600 ">
          <Image src={events} alt="events" className="absolute object-cover" />
        </div>
        {/* section-2 */}
        <div className="flex border border-purple-600">
          <div className="bg-[#0088CF] [writing-mode:vertical-rl] rotate-180 text-white h-full">
            <p>UPCOMING</p>
            <p>EVENTS</p>
          </div>
          <div className="z-10">
            {EVENTS.map((param, idx) => (
              <div key={idx}>
                <Image src={param.img} alt="events" />
                <p>{param.date}</p>
                <p>{param.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Events;
// ======================================================================
// import Image from "next/image";
// import events from "@/public/images/events/events.png";
// import { EVENTS } from "@/utils/data/home/events";
// import { Container } from "@/components/ui/Container";

// const Events = () => {
//   return (
//     <section
//       className="montserrat relative w-full min-h-screen bg-no-repeat bg-center bg-contain flex border border-green-600"
//       style={{ backgroundImage: `url(${events.src})` }}
//     >
//       {/* Content */}
//  <Container>
//        <div className="flex border border-red-600 ">
//         {/* Vertical Title */}
//         <div className="bg-[#0088CF] [writing-mode:vertical-rl] rotate-180 text-white">
//           <p>UPCOMING</p>
//           <p>EVENTS</p>
//         </div>

//         {/* Events List */}
//         <div className="flex">
//           {EVENTS.map((param, idx) => (
//             <div
//               key={idx}
//               className=""
//             >
//               <Image
//                 src={param.img}
//                 alt="events"
//                 className=""
//               />
//               <div>
//                 <p className="">{param.date}</p>
//                 <p className="">{param.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//  </Container>
//     </section>
//   );
// };

// export default Events;
// ===========================================================================

