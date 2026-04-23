import { cn } from "@/lib/utils";
import React from "react";

export default function HeroWithScales({ children, className }: { children?: React.ReactNode, className?: string }) {
  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden [--pattern:var(--color-neutral-300)] dark:[--pattern:var(--color-neutral-800)]", className)}>
      <div className="max-w-4xl mx-auto w-full min-h-screen flex flex-col relative">
        {/* <HorizontalScale className="absolute  top-0 w-screen mx-auto" /> */}
        {/* <HorizontalScale className="absolute  bottom-0 w-screen mx-auto" /> */}
        <VerticalScale className="absolute left-0 top-0 h-full mx-auto pointer-events-none z-[-1]" />
        <VerticalScale className="absolute right-0 top-0 h-full mx-auto pointer-events-none z-[-1]" />

        <div className="w-full flex-1 flex flex-col relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

const Line = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-14 w-full bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_0.5rem)]",
        className,
      )}
    />
  );
};
const HorizontalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-8 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--pattern)]",
        className,
      )}
    />
  );
};

const VerticalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-8 h-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-x border-[var(--pattern)]",
        className,
      )}
    />
  );
};
