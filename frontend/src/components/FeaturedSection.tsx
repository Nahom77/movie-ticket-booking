import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import BlurCircle from "./BlurCircle";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "./MovieCard";

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden px-6 md:px-16 lg:px-24 xl:px-44">
      {/* Headers of this section */}
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="0" right="-80px" left="auto" bottom="auto" />
        <p className="text-lg font-medium text-gray-300">Now Showing</p>
        <button
          onClick={() => navigate("/movies")}
          className="group flex cursor-pointer items-center gap-2 text-sm text-gray-300"
        >
          View All{" "}
          <ArrowRight className="size-4.5 transition group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Displaying movie cards by mounting <MovieCard/> component using map function (only 4 movie cards) */}
      <div className="mt-8 flex flex-wrap gap-8 max-md:justify-center">
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}{" "}
      </div>

      {/* 'Show more' button */}
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
  );
};

export default FeaturedSection;
