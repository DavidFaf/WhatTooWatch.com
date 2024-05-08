"use client";
import { emojis } from "@models/emojis";
import { useRouter, notFound } from "next/navigation";

type EmojiButtonProps = {
  emotion: keyof typeof emojis;
};

const EmojiButton = ({ emotion }: EmojiButtonProps) => {
  const router = useRouter();
  const emotionPage = () => {
    router.push(`/movies?mood=${emotion}`);
  };
  return (
    <button
      onClick={emotionPage}
      className="btn font-semibold hover:bg-purple hover:text-sky-blue text-almost-black border-almost-black md:btn-lg btn-outline"
    >
      <span role="img" aria-label="dog" className="md:text-3xl text-sm p-0">
        {emojis[emotion]}
      </span>
      {emotion}
    </button>
  );
};

export default EmojiButton;
