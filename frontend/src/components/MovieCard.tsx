import { useNavigate } from "react-router";

import { StarIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";

interface myGenre {
  name: string;
}

interface myMovie {
  backdrop_path: string;
  _id: string;
  title: string;
  runtime: number;
  release_date: string;
  vote_average: number;
  genres: myGenre[];
}

interface Props {
  movie: myMovie;
}

const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-66 flex-col justify-between rounded-2xl bg-gray-800 p-3 transition duration-300 hover:translate-y-1">
      {/* Movie image */}
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={movie.backdrop_path}
        className="h-52 w-full cursor-pointer rounded-lg object-cover object-right-bottom"
      />

      {/* Movie title */}
      <p className="mt-2 truncate font-semibold">{movie.title}</p>

      {/* Movie genre and movie length */}
      <p className="mt-2 text-sm text-gray-400">
        {new Date(movie.release_date).getFullYear()} |{" "}
        {movie.genres
          .slice(0, 2)
          .map((genre) => genre.name)
          .join(" - ")}{" "}
        | {timeFormat(movie.runtime)}
      </p>

      {/* CTA button and rating */}
      <div className="mt-4 flex items-center justify-between pb-3">
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="bg-primary hover:bg-primary-dull cursor-pointer rounded-full px-4 py-2 text-xs font-medium transition"
        >
          Buy Tickets
        </button>
        <p className="mt-1 flex items-center gap-1 pr-1 text-sm text-gray-400">
          <StarIcon className="text-primary fill-primary size-4" />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
