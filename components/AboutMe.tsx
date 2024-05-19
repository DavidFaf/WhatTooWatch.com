import React from "react";
import RoundCard from "./RoundCard";

const AboutMe = () => {
  return (
    <section className="about-me container">
      <p>
        Designed by <u>Batman</u>
      </p>
      <p>What i’m listening to right now : </p>
      <RoundCard>
        <h3 className="text-purple text-center">*coming soon*</h3>
      </RoundCard>
    </section>
  );
};

export default AboutMe;
