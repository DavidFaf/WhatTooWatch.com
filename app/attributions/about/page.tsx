import NavBar from "@components/NavBar";
import React from "react";

const about = () => {
  return (
    <div className="pt-5">
      <NavBar />
      <p className="pt-10 pb-5 text-lg">
        Huge learning curve here, "first typescript + tailwind application from
        start". Took me way longer than i intended to, building this, but i'm
        glad i pulled through. Might add other features i intended to, might
        not.
      </p>
      <h2 className="text-xl pt-10">Anyway it's on to the next project</h2>
      <a
        className="underline"
        href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
        target="_blank"
      >
        Don't Click Me!!!!
      </a>
    </div>
  );
};

export default about;
