import EmojiButton from "@components/EmojiButton";
import RoundCard from "@components/RoundCard";
import React from "react";
import { Emojis } from "@models/types";

function page() {
  return (
    <div className="mx-auto md:pt-20">
      <section className="pt-4">
        <RoundCard>hey</RoundCard>
        <p className="text-3xl md:text-5xl font-bold tracking-tight nunito text-center mt-4 mb-4">
          DISCOVER TOP RATED MOVIES
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            {" "}
            BASED ON HOW YOU’RE FEELING
          </span>
        </p>
      </section>
      <section className="select-cards mb-5">
        <RoundCard>
          <div className="pb-8">
            <div className="container pt-4 pb-4">
              <p className="text-almost-black md:text-3xl text-xl font-semibold">
                How are you feeling today ?
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 px-4">
              <EmojiButton emotion="Random"/>
              <EmojiButton emotion="Reflective" />
              <EmojiButton emotion="Thoughtful" />
              <EmojiButton emotion="Melancholy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Random" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
            </div>
          </div>
        </RoundCard>
      </section>
      <section className="about-me container">
        <p>Designed by <u>Batman</u></p>
        <p>What i’m listening to right now : </p>
        <RoundCard>
          <h3>Insert spotify playlist here</h3>
          <h3>Insert spotify playlist here</h3>
          <h3>Insert spotify playlist here</h3>
        </RoundCard>
      </section>
    </div>
  );
}

export default page;
