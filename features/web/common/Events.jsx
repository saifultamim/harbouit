import Image from "next/image";
import events from "@/public/images/events/events.png";
import { EVENTS } from "@/utils/data/home/events";
import { Container } from "@/components/ui/Container";

const Events = () => {
  return (
    <section className="montserrat">

       <div className="relative ">
        {/* section-1 */}
        <div className="">
          <Image src={events} alt="events" className="" />
        </div>
        {/* section-2 */}
        <div className="flex absolute top-0 h-full w-full justify-center gap-40">
          <div className="bg-[#0088CF] [writing-mode:vertical-rl] rotate-180 text-white px-16 text-4xl font-bold leading-9 py-9">
            <p>UPCOMING</p>
            <p>EVENTS</p>
          </div>
          <div className="flex items-end gap-9 -translate-y-16 text-white">
            {EVENTS.map((param, idx) => (
              <div key={idx} className="rounded-md bg-[#D9D9D9] bg-opacity-50 px-9 py-5">
                <Image src={param.img} alt="events" className="-translate-y-12 bg-[#D9D9D9] py-4"/>
                <p className="text-4xl font-bold">{param.date}</p>
                <p className="text-2xl font-medium">{param.desc}</p>
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

