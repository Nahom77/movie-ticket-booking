import { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import ReactPlayer from "react-player";
import { PlayCircleIcon } from "lucide-react";

const TrailerSection = () => {
  const [currTrailer, setCurrTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="overflow-hidden px-6 py-20 md:px-16 lg:px-24 xl:px-44">
      {/* Title */}
      <p className="mx-auto max-w-[960px] text-lg font-medium text-gray-300">
        Trailers
      </p>

      {/* Player  */}
      <div className="relative mt-6 aspect-video">
        <BlurCircle top="-100px" right="-100px" left="auto" bottom="auto" />
        <div className="h-[100%] w-[100%]">
          <ReactPlayer
            url={currTrailer.videoUrl}
            style={{ margin: "0 auto", width: "100%" }}
            width="100%"
            height="100%"
          />
        </div>
      </div>

      {/* Other trailers to be played */}
      <div className="group mx-auto mt-8 grid max-w-3xl grid-cols-4 gap-4 md:gap-8">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            onClick={() => setCurrTrailer(trailer)}
            className="relative aspect-video cursor-pointer transition duration-300 group-hover:not-hover:opacity-50 hover:-translate-y-1"
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="h-full w-full rounded-lg object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform md:h-12 md:w-8"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
