"use client";
import RoundCard from "@components/RoundCard";
import { emojis } from "@models/emojis";
import fetchData from "@services/network";
import { error } from "console";
import { useSearchParams, useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";

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
  const [movieData, setMovieData] = useState<movieData>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullOverview, setShowFullOverview] = useState(false);
  // const [movieDetails, setMovieDetails] = useState();

  if (!(genre in emojis)) {
    router.push("/404");
    return;
  }

  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre_id}`;

  const fetchMoviesByGenre = async () => {
    try {
      const { data, error } = await fetchData(url);

      // const movieDataWithTrailersAndDurations = await data.results.map(
      //   async (movie) => {
      //     const trailerResponse = await fetchData(
      //       `https://api.themoviedb.org/3/movie/${movie.id}/videos`
      //     );
      //     const durationResponse = await fetchData(
      //       `https://api.themoviedb.org/3/movie/${movie.id}`
      //     );
      //     // const durationData = await durationResponse.json();
      //     console.log(trailerResponse);
      //     console.log(movie.id);
      //     console.log(durationResponse);
      //     return trailerResponse;
      //   }
      // );

      // setMovieDetails(movieDataWithTrailersAndDurations);

      if (error) {
        alert(error);
      }
      setMovieData(data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchMoviesByGenre();
  }, [genre_id]);

  if (!movieData) {
    return null;
  }

  const showNextMovie = () => {
    if (currentIndex < movieData.results.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
      setShowFullOverview(false);
    } else {
      alert("No more movies to show.");
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

  // const toggleOverview = () => {

  //   setShowFullOverview(!showFullOverview);
  // };

  // const truncateOverview = (text: string) => {
  //   if (text.length > 100 && !showFullOverview) {
  //     return text.slice(0, 100) + '...';
  //   }
  //   return text;
  // };

  // const overview = truncateOverview(movie.overview);

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

  // Example usage
  const genreIds = [878, 12, 28];
  const genres = mapGenreIdsToGenres(movie.genre_ids);
  // console.log(genres); // Output: ["Science Fiction", "Adventure", "Action"]

  return (
    <div className="max-w-[700px]">
      <section className="title-section pt-4">
        <RoundCard>Insert title here</RoundCard>
      </section>
      <section className="py-9">
        <RoundCard>
          <figure>
            <div className="video-responsive w-full">
              <iframe
                src="https://www.youtube.com/embed/ue80QwXMRHg?si=BWezaVtOBwxIGK_9"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                title="Embedded youtube"
                class="w-full h-64 md:h-96"
              ></iframe>
            </div>
          </figure>
        </RoundCard>
      </section>
      <section className="movie-details pb-4">
        <p className="text-3xl font-semibold">{movie.title}</p>
        <div className="text-lg font-medium pb-2">
          {movie.release_date.substring(0, 4)} | 1h 58min | ⭐{" "}
          <span className="font-semibold">
            {parseFloat(movie.vote_average.toFixed(2))}
          </span>
          <span className="opacity-75">/10</span>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 wrap flex-nowrap overflow-auto pb-2 noScroolBar">
          {genres.map((genre) => (
            <div className="badge text-almost-black opacity-80 bg-sky-blue badge-lg">
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
  );
};

export default index;
