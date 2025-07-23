

import { cn } from "@/utils/tailwind-utils";
import * as React from "react";

const Input = React.forwardRef(
    ({ className, error, ...props }, ref) => {
  const errorMessage = Array.isArray(error) ? error.join(", ") : error;

  return (
    <div className="relative">
      <input
        {...props}
        ref={ref}
        className={cn(
          "h-10 focus:border bg-transparent px-3 py-6 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-[#0860AC] focus:ring-[#0860AC] block w-full rounded-md shadow-gray-400 shadow-md sm:text-sm bg-white ",
          error ? "border-[#e74d2e77]" : "border-slate-300",
          className
        )}
      />

      <div
        className={`
            text-xs mt-1 text-red-500 font-semibold transition-all duration-300 ease-in-out
            ${
              error
                ? "opacity-100 max-h-6 mb-2"
                : "opacity-0 max-h-0 mb-0 overflow-hidden"
            }
          `}
      >
        {errorMessage}
      </div>
    </div>
  );
}
)

Input.displayName = "Input";

export { Input };
