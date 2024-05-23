import React from "react";
import RoundCard from "./RoundCard";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="about-me container">
      <p>
        Designed by{" "}
        <a
          href="https://en.wikipedia.org/wiki/Batman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Batman.dev</u>
        </a>
      </p>
      {/* <p>What i’m listening to right now : </p> */}
      {/* <RoundCard>
        <h3 className="text-purple text-center">*coming soon*</h3>
      </RoundCard> */}
      <div className="flex justify-center space-x-1 text-center text-xs">
        <Link href={"/attributions/about"}>
          <p className="underline">about</p>
        </Link>
        <span>|</span>
        <Link href={"/attributions"}>
          <p className="underline">privacy Policy</p>
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
