"use client";
import Loading from "@app/loading";
import NavBar from "@components/NavBar";
import RoundCard from "@components/RoundCard";
import { emojis } from "@models/emojis";
import fetchData from "@services/network";
import { useSearchParams, useRouter } from "next/navigation";
import React, {useEffect, useState } from "react";

type movieObject = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type movieData = {
  page: number;
  results: [];
};

const index = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const genre = searchParams.get("mood") || "";
  const genre_id = searchParams.get("genre_id") || "";
  const [movieData, setMovieData] = useState<movieData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullOverview, setShowFullOverview] = useState(false);
  const [trailerKeys, setTrailerKeys] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageNum, setPageNum] = useState<number>(1);

  if (!(genre in emojis)) {
    router.push("/404");
    return;
  }

  const fetchMoviesByGenre = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}&sort_by=popularity.desc&with_genres=${genre_id}`;
    try {
      const { data, error } = await fetchData(url);

      // const x = data.results.map(async (movie) => {
      //   const { data: trailerResponse, error } = await fetchData(
      //     `https://api.themoviedb.org/3/movie/${movie.id}/videos`
      //   );
      //   console.log(movie);
      //   for (let key in trailerResponse.results[0].key) {
      //     // Assuming you want to append { key: z[key] } to x
      //     const newObj = trailerResponse.results[0].key;

      //     // Update x by combining the existing state with the new object
      //     setY((prevState) => [...prevState, newObj]);

      //     // console.log(trailerResponse.results[0].key);
      //     return trailerResponse.results[0].key;
      //   }
      // });

      const trailerPromises = data.results.map(async (movie) => {
        const { data: trailerResponse, error: trailerError } = await fetchData(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos`
        );

        if (trailerError) {
          console.error(trailerError);
          return null;
        }

        const trailerKey = trailerResponse.results?.[0]?.key || null;

        const { data: movieDetailsResponse, error: movieDetailsError } =
          await fetchData(`https://api.themoviedb.org/3/movie/${movie.id}`);

        if (movieDetailsError) {
          console.error(movieDetailsError);
          return null;
        }
        const runtime = movieDetailsResponse.runtime || null;

        return { trailerKey, runtime };
      });

      const moviesWithTrailers = await Promise.all(trailerPromises);

      const trailerKeys = moviesWithTrailers
        .map((movie) => movie.trailerKey)
        .filter((key) => key !== null);

      const runtimes = moviesWithTrailers
        .map((movie) => movie.runtime)
        .filter((runtime) => runtime !== null);

      setTrailerKeys(trailerKeys);
      setRuntimes(runtimes);

      if (error) {
        alert(error);
      }
      setMovieData(data);
      // console.log(trailerKeys);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchMoviesByGenre();
  }, [genre_id, pageNum]);

  if (isLoading) {
    return <Loading />;
  }

  if (!movieData) {
    return null;
  }

  const showNextMovie = () => {
    if (currentIndex < movieData.results.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
      setShowFullOverview(false);
    } else {
      setPageNum((prevPageNum) => prevPageNum + 1);
    }
  };

  const showPreviousMovie = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex);
    } else {
      alert("You are already on the first movie.");
    }
  };

  const movie: movieObject = movieData.results[currentIndex];

  const toggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };

  const overview = showFullOverview
    ? movieData.results[currentIndex].overview
    : movieData.results[currentIndex].overview.slice(0, 250) + "...";

  const mapGenreIdsToGenres = (genreIds: number[]): string[] => {
    const genres: string[] = [];
    genreIds.forEach((genreId) => {
      const genre = Object.keys(emojis).find(
        (key) => emojis[key].id === genreId
      );
      if (genre) {
        genres.push(genre);
      }
    });
    return genres;
  };

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  };

  // Example usage
  const genres = mapGenreIdsToGenres(movie.genre_ids);
  // console.log(genres); // Output: ["Science Fiction", "Adventure", "Action"]

  return (
    // <div>
    //   {isLoading ? (<h1>Is loading</h1>):(
    <div className="max-w-[700px]">
      <section className="title-section pt-4">
        <NavBar />
      </section>
      <section className="py-4">
        <RoundCard>
          <figure>
            <div className="video-responsive w-full">
              <iframe
                // src={`https://www.youtube.com/embed/ue80QwXMRHg?si=BWezaVtOBwxIGK_9`}
                src={`https://www.youtube.com/embed/${trailerKeys[currentIndex]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowFullScreen=""
                title="Embedded youtube"
                className="w-full h-64 md:h-96"
              ></iframe>
            </div>
          </figure>
        </RoundCard>
      </section>
      <section className="movie-details pb-4">
        <p className="text-3xl font-semibold">{movie.title}</p>
        <div className="text-lg font-medium pb-2">
          {movie.release_date.substring(0, 4)} |{" "}
          {formatRuntime(runtimes[currentIndex])} | ⭐{" "}
          <span className="font-semibold">
            {parseFloat(movie.vote_average.toFixed(2))}
          </span>
          <span className="opacity-75">/10</span>
        </div>
        {/* <div className="flex flex-row justify-start items-center gap-2 wrap flex-nowrap overflow-auto pb-2 noScroolBar"> */}
        <div className="flex max-w-[300px] md:max-w-full flex-row justify-start items-center gap-2 flex-nowrap overflow-x-auto pb-2 noScrollBar">
          {genres.map((genre) => (
            <div
              key={genre}
              className="badge text-almost-black opacity-80 bg-sky-blue badge-lg"
            >
              {genre}
            </div>
          ))}
        </div>
        <p className="font-thin leading-7 text-lg opacity-65">
          {overview + " "}
          {movie.overview.length > 250 && (
            <button className="text-sky-400 underline" onClick={toggleOverview}>
              {showFullOverview ? "Read Less" : " Read More"}
            </button>
          )}
        </p>
      </section>
      <section className="justify-between flex">
        <button
          onClick={showPreviousMovie}
          className="btn btn-md text-almost-black bg-sky-blue hover:bg-purple hover:border-sky-blue hover:text-sky-blue"
        >
          <span>⬅️</span>Back
        </button>
        <button className="btn btn-md text-almost-black bg-sky-blue hover:bg-purple hover:border-sky-blue hover:text-sky-blue">
          <span>👎</span> Hide
        </button>
        <button
          onClick={showNextMovie}
          className="btn btn-md text-almost-black bg-sky-blue hover:bg-purple hover:border-sky-blue hover:text-sky-blue"
        >
          <span>➡️</span>Next
        </button>
      </section>
    </div>
    // )}
    // </div>
  );
};

export default index;
