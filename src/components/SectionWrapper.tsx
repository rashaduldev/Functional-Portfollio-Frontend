import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 section-pattern">
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default SectionWrapper;
