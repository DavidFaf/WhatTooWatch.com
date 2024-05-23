import NavBar from "@components/NavBar";
import React from "react";
import Image from "next/image";
import tmdbLogo from "@public/assets/icons/tmdb-logo.svg";

const page = () => {
  return (
    <div className="pt-5">
      <NavBar />
      <p className="pt-10 pb-5 text-lg">
        This website uses TMDB and the
        TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
      </p>
      <a href="https://www.themoviedb.org/" target="_blank">
      <Image  src={tmdbLogo} alt="TmdbLogo" width={150} />
      </a>
    </div>
  );
};

export default page;
