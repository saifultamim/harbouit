
"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState, useRef } from "react";
// import "./tab-style.css";
import { FaCircleChevronRight } from "react-icons/fa6";
import CourseCart from "@/components/ui/CourseCart";
// import Loader from "../loader/loader";
// import CourseCart from "../CourseCart";

const AllCourses = ({ courses }) => {
  const [courseFilter, setCourseFilter] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  const tabListRef = useRef(null);
  useEffect(() => {
    setCourse(courses);
    const filteredData = courses?.filter(
      (courseItem) => courseItem.xtype === "digital marketing"
    );
    setCourseFilter(filteredData);
    setLoading(false);
  }, [courses]);

  const filterCourse = (props) => {
    const filteredData = course.filter(
      (courseItem) => courseItem.xtype === props
    );
    setCourseFilter(filteredData);
  };

  const scrollRight = () => {
    if (tabListRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = tabListRef.current;

      if (scrollLeft + clientWidth >= scrollWidth) {
        tabListRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        tabListRef.current.scrollBy({ left: 500, behavior: "smooth" });
      }
    }
  };

  return (
    <div className=" md:pt-12 pt-6 ">
           <p>COURSES</p>
      <div className=" min-h-[400px] mx-auto relative">
        {!isLoading ? (
          <Tabs>
            <div className="flex items-center">
              {/* Tab List Container */}
              <div
                ref={tabListRef}
                className="overflow-x-auto whitespace-nowrap scrollbar-hide lg:flex"
                style={{ scrollBehavior: "smooth" }}
              >
                <TabList className="text-lg font-semibold lg:flex max-sm:flex max-sm:flex-col max-sm:gap-1">
                  <Tab
                    onClick={() => filterCourse("digital marketing")}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                    className={
                      "max-sm:w-full max-sm:text-center max-sm:border lg:mr-16 mr-60 max-sm:border-gray-200 py-2 max-sm:shadow cursor-pointer"
                    }
                  >
                    Digital Marketing
                  </Tab>
                  <Tab
                    onClick={() => filterCourse("artificial intelligence")}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                    className={
                      "max-sm:w-full max-sm:text-center max-sm:border lg:mr-16 mr-60 max-sm:border-gray-200 py-2 max-sm:shadow cursor-pointer"
                    }
                  >
                    Artificial Intelligence
                  </Tab>
                  <Tab
                    onClick={() => filterCourse("ui/ux design")}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                    className={
                      "max-sm:w-full max-sm:text-center max-sm:border lg:mr-16 mr-60 max-sm:border-gray-200 py-2 max-sm:shadow cursor-pointer"
                    }
                  >
                    UI/UX Design
                  </Tab>
                  <Tab
                    onClick={() => filterCourse("spoken english")}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                    className={
                      "max-sm:w-full max-sm:text-center max-sm:border lg:mr-16 mr-60 max-sm:border-gray-200 py-2 max-sm:shadow cursor-pointer"
                    }
                  >
                    Spoken English
                  </Tab>
                  <Tab
                    onClick={() => filterCourse("banking diploma")}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                    className={
                      "max-sm:w-full max-sm:text-center max-sm:border lg:mr-16 mr-60 max-sm:border-gray-200 py-2 max-sm:shadow cursor-pointer"
                    }
                  >
                    Banking Diploma
                  </Tab>
                  <Tab
                    onClick={() => filterCourse("motion graphics")}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                    className={
                      "max-sm:w-full max-sm:text-center max-sm:border lg:mr-16 mr-60 max-sm:border-gray-200 py-2 max-sm:shadow cursor-pointer"
                    }
                  >
                    Motion Graphics
                  </Tab>
                  <Tab
                    onClick={() => filterCourse("graphics design")}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                    className={
                      "max-sm:w-full max-sm:text-center max-sm:border lg:mr-16 mr-60 max-sm:border-gray-200 py-2 max-sm:shadow cursor-pointer"
                    }
                  >
                    Graphics Design
                  </Tab>
                </TabList>
              </div>

              <FaCircleChevronRight
                className="ml-3 text-3xl mb-2 text-[#046938] cursor-pointer hidden lg:block"
                onClick={scrollRight}
              />
            </div>

            {/* Tab Panels */}
            {[
              "digital marketing",
              "artificial intelligence",
              "ui/ux design",
              "spoken english",
              "banking diploma",
              "motion graphics",
              "graphics design",
            ].map((tabName, index) => (
              <TabPanel key={index}>
                <div className="border border-gray-200 bg-[#F6F6F6] py-7 mb-16 grid grid-cols-1 shadow-2xl min-h-[300px]">
                  {courseFilter?.length > 0 ? (
                   
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mx-9 gap-6 ">
                      {courseFilter?.map((item, index) => (
                        <CourseCart
                          key={index}
                          course={item}
                          textSize="lg:text-base md:text-base font-montserrat_sans_serif"
                        />
                      ))}
                    </div>
                   
                  ) : (
                   
                    <div className="flex items-center justify-center min-h-[40vh] ">
                      {"No Course Found"}
                    </div>
                  )}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        ) : (
          <div className='h-60 flex justify-center items-center'>
            {/* <Loader /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
