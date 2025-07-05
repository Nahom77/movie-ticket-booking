import { dummyShowsData } from "../assets/assets";
import BlurCircle from "../components/BlurCircle";
import MovieCard from "../components/MovieCard";

const Favorite = () => {
  // If there are movies display them other wise display other message
  return dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-60 min-h-[80vh] overflow-hidden px-6 md:px-16 lg:px-40 xl:px-44">
      {/* Blur circle decor */}
      <BlurCircle top="150px" left="0" bottom="auto" right="auto" />
      <BlurCircle top="auto" left="auto" bottom="50px" right="50px" />

      {/* Title */}
      <h1 className="my-4 text-lg font-medium">Your Favourite movies</h1>

      {/* Movie cards */}
      <div className="flex flex-wrap gap-8 max-sm:justify-center">
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    // If there are no movies
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold">No movies available</h1>
    </div>
  );
};

export default Favorite;
