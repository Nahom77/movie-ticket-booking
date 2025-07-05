import { useNavigate, useParams } from "react-router";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import { useEffect, useState } from "react";
import BlurCircle from "../components/BlurCircle";
import { Heart, PlayCircleIcon, StarIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";
import DateSelect from "../components/DateSelect";
import MovieCard from "../components/MovieCard";

import type { Show } from "../lib/ShowInterfaces";

// interface Genre {
//   id: number;
//   name: string;
// }

// interface Cast {
//   name: string;
//   profile_path: string;
// }

// interface Movie {
//   _id: string;
//   title: string;
//   poster_path: string;
//   overview: string;
//   runtime: number;
//   vote_average: number;
//   genres: Genre[];
//   release_date: string;
//   casts: Cast[];
// }

// interface Show {
//   movie: Movie;
//   dateTime: object; // You can replace `any` with a specific type for `dummyDateTimeData` if known
// }

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>(); // Extracting the id parameter from the url
  const [show, setShow] = useState<Show | null>(null);

  const navigate = useNavigate();

  // To get one movie data from the server
  useEffect(() => {
    if (!id) return;

    const getShow = async () => {
      const movie = dummyShowsData.find((show) => show._id === id);
      if (movie) {
        setShow({ movie, dateTime: dummyDateTimeData });
      }
    };

    getShow();
  }, [id]);

  // If show available display the show other wise ....
  return show ? (
    // The whole page container
    <div className="px-6 pt-30 md:px-16 md:pt-50 lg:px-40">
      {/* ///////////////////////////////// SHOW DETAIL SECTION ///////////////////////////////////// */}
      {/* Show detail container */}
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
        <img
          src={show.movie.poster_path}
          alt=""
          className="h-104 max-w-70 rounded-xl object-cover max-md:mx-auto"
        />

        {/* Show details */}
        <div className="relative flex flex-col gap-3">
          <BlurCircle top="-100px" left="-100px" bottom="auto" right="auto" />
          <p className="text-primary">ENGLISH</p>
          <h1 className="max-w-96 text-4xl font-semibold text-balance">
            {show.movie.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="text-primary fill-primary size-5" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          <p className="mt-2 max-w-xl text-sm leading-tight text-gray-400">
            {show.movie.overview}
          </p>
          <p>
            {timeFormat(show.movie.runtime)} |{" "}
            {show.movie.genres.map((genre) => genre.name).join(", ")} |{" "}
            {show.movie.release_date.split("-")[0]}
          </p>

          {/* Buttons container */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {/* Watch trailer button */}
            <button className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-800 px-7 py-3 text-sm font-medium transition hover:bg-gray-900 active:scale-95">
              <PlayCircleIcon className="size-5" />
              Watch Trailer
            </button>

            {/* Buy tickets link(to the same page (other section)) and favorite icon */}
            <a
              href="#dateSelect"
              className="bg-primary hover:bg-primary-dull cursor-pointer rounded-md px-10 py-3 text-sm font-medium transition active:scale-95"
            >
              Buy Tickets
            </a>
            <button className="cursor-pointer rounded-full bg-gray-700 p-2.5 transition active:scale-95">
              <Heart className={`size-4.5`} />
            </button>
          </div>
        </div>
      </div>

      {/* //////////////////////////////////////// FAVORITE CASTS SECTION ////////////////////////////// */}
      {/* Favorite Casts title */}
      <p className="mt-20 text-lg font-medium">Your Favorite Cast</p>
      {/* Casts container (By making the overflow-x auto) */}
      <div className="no-scrollbar mt-8 overflow-x-auto pb-4">
        <div className="flex w-max items-center gap-4 px-4">
          {/* To display casts by selecting only 12 actors and mapping them to a div  */}
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={cast.profile_path}
                alt=""
                className="aspect-square h-20 rounded-full object-cover md:h-20"
              />
              <p className="mt-3 text-xs font-medium">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ///////////////////////////////////// DATE SELECTION SECTION ///////////////////////////////// */}
      <DateSelect dateTime={show.dateTime} id={id} />

      {/* ///////////////////////////////////// ///////////////////////////////// */}
      <p className="mt-20 mb-8 text-lg font-medium">You may also like</p>
      <div className="flex flex-wrap gap-8 max-sm:justify-center">
        {dummyShowsData.slice(4, 8).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="bg-primary hover:bg-primary-dull cursor-pointer rounded-md px-10 py-3 text-sm font-medium transition"
        >
          Show more
        </button>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MovieDetails;
