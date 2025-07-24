import { cn } from "@/utils/tailwind-utils";
import React from "react";

const Button = ({
  children,
  variant = "primary",
  isLoading = false,
  size = "md",
  disabled,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-md transition ease-in-out duration-150 w-full";
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-4 text-lg",
  };
  const variantStyles = {
    primary: "bg-secondary text-white font-semibold",
    secondary: "bg-violet hover:bg-secondary text-white font-semibold",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-blue-700 focus:ring-gray-300",
    ghost:
      "text-gray-700 hover:bg-blue-700 focus:ring-gray-300 border border-slate-300",
    backLogin:
      "btn border-none hover:bg-transparent hover:text-catalinaBlue lg:mt-0 md:mt-3 mt-3  w-fit px-0 flex items-center",
    btnAuth:
      "bg-transparent text-[#000000b5] text-lg  leading-normal pt-2 pb-1  border-2 border-secondary  font-medium font-siliguri transition duration-150 ease-out hover:ease-in hover:bg-secondary hover:text-white px-10  rounded-full w-fit",
    btnCell:
      "w-fit bg-contactNumber p-4 md:p-5 leading-[10px] lg:leading-[6px] rounded-xl text-lg font-medium",
    btnSlide:
      "w-fit bg-transparent absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border text-black hover:text-white hover:bg-secondary shadow md:-mt-0 -mt-4",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        (disabled || isLoading) && disabledStyles,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="mr-2 animate-spin"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
