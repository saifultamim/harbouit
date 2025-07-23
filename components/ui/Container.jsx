import { cn } from "@/utils/tailwind-utils";

export const Container = ({ children, className = "" }) => {
  return <div className={cn("max-w-6xl mx-auto", className)}>{children}</div>;
};
