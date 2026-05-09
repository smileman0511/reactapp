import React from "react";

const HeroSectionComponent = ({ children, className = "" }) => {
  return (
    <section className={`HeroSectionContainer ${className}`}>
      <div className="HeroGrid">{children}</div>
    </section>
  );
};

export default HeroSectionComponent;
