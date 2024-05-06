import EmojiButton from "@components/EmojiButton";
import RoundCard from "@components/RoundCard";
import React from "react";

function page() {
  const emojis = "😀";
  return (
    <div>
      <section className="pt-4">
        <RoundCard width="780" height="41" borderRadius="30px">
          hey
        </RoundCard>
        <p className="text-5xl text-center">
          DISCOVER TOP RATED MOVIES
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            BASED ON HOW YOU’RE FEELING
          </span>
        </p>
        </section>
        <section className="select-cards mb-10">
          <RoundCard width="780" height="487px">
            <div className="container pt-4 pb-4">
              <p className="text-almost-black text-3xl font-semibold">
                How are you feeling today ?
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 px-4">
              <EmojiButton emotion="Random" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
              <EmojiButton emotion="Happy" />
            </div>
          </RoundCard>
        </section>
        <section className="about-me container">
          <p>Designed by Batman</p>
        </section>
    </div>
  );
}

export default page;
