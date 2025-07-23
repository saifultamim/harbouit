
import { cn } from "@/utils/tailwind-utils";
import React from "react";

const Label = ({ className, children }) => {
  return (
    <label
      className={cn(
        "block text-gray-700 text-sm md:text-md  font-medium",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
