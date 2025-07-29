import { Container } from "@/components/ui/Container";
import {
  classDetails,
  course,
  courseContents,
  faqs,
} from "@/utils/data/course/specificCourse";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaChalkboardUser } from "react-icons/fa6";

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex gap-3 items-center font-semibold">
    <Icon size={37} />
    <h4 className="flex flex-col text-[14px]">
      <span>{label}:</span>
      <span>{value}</span>
    </h4>
  </div>
);

const SpecificCourse = () => {
  return (
    <Container className="mt-20 md:mt-28 lg:mt-48 mb-10 md:mb-20 lg:mb-20 montserrat">
      <div className=" items-end ">
        <div className=" mb-3">
          <div className="max-sm:pb-0 gap-1  uppercase w-full">
            <h4 className=" font-semibold text-base  max-sm:text-[14px] md:text-end  lg:mt-0 md:mt-3 mt-3 px-2">
              <span className="lg:pl-3">{course?.xdesc}</span>
            </h4>

            <div className="h-[0.5px] bg-gray-700 mt-2 md:mt-5 max-sm:w-full w-full hidden md:block" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-6 px-2 mt-10">
        <div className="bg-white font-semibold border border-gray-400 shadow-md shadow-gray-300 p-6 md:p-10 rounded-lg flex flex-col gap-3 ">
          <h4 className="text-2xl font-semibold text-[#2457C5] max-sm:text-xl">
            What to Expect
          </h4>
          <ul className="flex flex-col gap-2 font-[300]">
            {courseContents?.course_content?.map((item) => (
              <li
                className={`flex gap-2 items-center text-[14px] font-semibold 
                      ${
                        !courseContents?.course_content?.length ? "hidden" : ""
                      }`}
                key={item}
              >
                {item && <BsCheckCircleFill className="text-[#2457C5]" />}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className=" font-semibold  shadow-md shadow-gray-300  p-6 md:p-12 rounded-lg flex flex-col gap-3 bg-[#2457C5] text-gray-50">
          <h4 className="uppercase font-semibold text-2xl  max-sm:text-xl">
            course details
          </h4>
          <div className="flex flex-col gap-4 font-[300]">
            <InfoItem
              icon={IoCalendar}
              label="Start Date"
              value={classDetails?.start_date || ""}
            />
            <InfoItem
              icon={PiClockClockwiseBold}
              label="Class Timings"
              value={classDetails?.class_timing || ""}
            />
            <InfoItem
              icon={FaChalkboardUser}
              label="Doubt Session"
              value={classDetails?.doubt_session || ""}
            />
            <button className="px-9 py-2 rounded-md bg-[#06005D] text-white font-semibold my-4 w-fit montserrat">
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 px-2">
        <div className="bg-white font-semibold border border-gray-300 shadow-md shadow-gray-300 p-6 md:p-12 rounded-lg flex flex-col gap-3">
          <h4 className="uppercase font-semibold max-sm:text-xl text-2xl text-[#06005D]">
            WHAT YOU’LL LEARN
          </h4>
          <ul className="flex flex-col gap-2 font-semibold">
            {courseContents?.what_you_learn &&
              courseContents?.what_you_learn.map((item) => (
                <li
                  className="flex gap-2  font-semibold text-[14px] relative"
                  key={item}
                >
                  <BsCheckCircleFill className="text-[#2457C5] text-[16px] absolute left-0 z-10 mt-[2px]" />

                  <span className="ml-6">{item ? item : ""}</span>
                </li>
              ))}
          </ul>
          <div className="flex flex-col gap-3">
            <h4 className="uppercase font-semibold max-sm:text-xl text-2xl text-[#06005D]">
              REQUIREMENTS
            </h4>
            <ul className="flex flex-col gap-2 font-[300]">
              {courseContents?.requirement &&
                courseContents?.requirement.map((item) => (
                  <li
                    className="flex gap-2  font-semibold text-[14px] relative"
                    key={item}
                  >
                    <BsCheckCircleFill className="text-[#2457C5] text-[16px] absolute left-0 z-10 mt-[2px]" />

                    <span className="ml-6">{item ? item : ""}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-12 px-2 pb-5">
        <div className="bg-white font-semibold border border-gray-300 shadow-md shadow-gray-300 p-6 md:p-12 rounded-lg flex flex-col gap-3">
          <h4 className="uppercase font-semibold max-sm:text-xl text-2xl text-[#06005D]">
            FREQUENTLY ASKED QUESTIONS
          </h4>
          <div className="flex flex-col gap-5 max-sm:text-sm text-[20px] font-normal">
            {faqs &&
              faqs?.map((faq) => (
                <details
                  key={faq.id}
                  className="group rounded-lg bg-[#D9D9D9]  p-2 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="font-normal text-lg max-sm:text-sm">{`Q${
                      faq.id + 1
                    }. ${faq?.question}`}</h2>
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-900">
                    {faq?.answer}
                  </p>
                </details>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default SpecificCourse;
