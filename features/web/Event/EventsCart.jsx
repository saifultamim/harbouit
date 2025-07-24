"use client";

import { formatDate } from "@/utils/dateFormat";
import React, { useState } from "react";

const EventsCart = ({ cardsDisplay, stories = [] }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {stories?.slice(0, cardsDisplay).map((params, idx) => {
          const isExpanded = expandedIndex === idx;
          const showFullText = isExpanded || params?.xtitle.length <= 50;
          const displayText = showFullText
            ? params?.xtitle
            : `${params?.xtitle.slice(0, 50)}`;

          return (
            <div
              key={params?.xsl}
              className="border shadow-[#00000040] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col"
            >
              <div className="bg-[#0088CF] text-white px-6 py-5 text-xs font-bold">
                {formatDate(params?.xdate)}
                {/* {formatDate("2024-02-26")} */}
                {/* 26th February 2024 */}
                {/* {params.xdate} */}
              </div>

              <div className="px-9 py-10 flex flex-col h-full justify-between">
                <h3 className="md:text-xl text-lg font-bold text-[#4C4C4C] leading-6">
                  {displayText}
                </h3>

                <button
                  onClick={(e) => {
                    handleToggle(idx);
                  }}
                  className="mt-4 text-white bg-[#0088CF] px-5 py-2 rounded-lg text-xs font-medium self-start "
                >
                  {expandedIndex === idx ? "See Less" : "See More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsCart;
