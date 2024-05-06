import React from "react";
import { emojis } from "@models/emojis";

type EmojiButtonProps = {
  emotion: keyof typeof emojis;
  onClick: () => void | null;
};

const EmojiButton = ({ emotion, onClick }: EmojiButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="btn hover:bg-purple hover:text-sky-blue text-almost-black border-almost-black btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline"
    >
      <span role="img" aria-label="dog" className="text-3xl">
        {emojis[emotion]}
      </span>
      {emotion}
    </button>
  );
};

export default EmojiButton;
