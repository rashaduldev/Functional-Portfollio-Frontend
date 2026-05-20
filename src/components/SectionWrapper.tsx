import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 section-pattern">
      <div className="section-overlay absolute inset-0 pointer-events-none" />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default SectionWrapper;
