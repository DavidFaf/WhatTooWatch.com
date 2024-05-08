"use client";
import { emojis } from "@models/emojis";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

const index = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const genre = searchParams.get("mood") || "";

  if (!(genre in emojis)) {
    router.push("/404");
    return;
  }

  return <div>{genre}</div>;
};

export default index;
