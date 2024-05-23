import EmojiButton from "@components/EmojiButton";
import RoundCard from "@components/RoundCard";
import React from "react";

import { emojis } from "@models/emojis";
import Link from "next/link";
import NavBar from "@components/NavBar";
import AboutMe from "@components/AboutMe";

function page() {
  return (
    <div className="mx-auto">
      <section className="pt-4">
        <NavBar />
        <p className="text-3xl md:text-5xl font-bold tracking-tight nunito text-center mt-4 mb-4">
          DISCOVER TOP RATED MOVIES
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            {" "}
            BASED ON OUR RECOMMENDATIONS
          </span>
        </p>
      </section>
      <section className="select-cards mb-5">
        <RoundCard>
          <div className="pb-8">
            <div className="container pt-4 pb-4">
              <p className="text-almost-black md:text-3xl text-xl font-semibold">
                What genre would you like ?
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 px-4">
              {Object.entries(emojis).map(([genre, { id }]) => (
                <EmojiButton key={id} emotion={genre} />
              ))}
            </div>
          </div>
        </RoundCard>
      </section>
      <AboutMe />
    </div>
  );
}

export default page;
