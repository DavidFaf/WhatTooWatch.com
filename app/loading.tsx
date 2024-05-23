"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Lottie from "lottie-react";
import fetchingMovie from "@public/assets/animation/fetchingMovie.json";

const loading = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("mood") || "";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-[300px]">
      <Lottie animationData={fetchingMovie} loop={true}/>
      </div>
      <p className="text-center text-2xl px-10">Fetching you the best <span className="underline text-3xl font-extrabold">{genre}</span> Movies .....</p>
    </div>
  );
};

export default loading;
