import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import BlurCircle from "./BlurCircle";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface Props {
  dateTime: object;
  id: string | undefined;
}

const DateSelect = ({ dateTime, id }: Props) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const onBookHandler = () => {
    if (!selected) {
      return toast.error("Please select a date");
    }

    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  return (
    <div id="dateSelect" className="pt-30">
      {/* Container */}
      <div className="bg-primary/10 border-primary/20 relative flex flex-col items-center justify-between gap-10 rounded-lg border p-8 md:flex-row">
        <BlurCircle top="-100px" left="-100px" bottom="auto" right="auto" />
        <BlurCircle top="100px" right="0px" bottom="auto" left="auto" />
        <div>
          {/* Title */}
          <p className="text-lg font-semibold">Choose Date</p>
          <div className="mt-5 flex items-center gap-6 text-sm">
            <ChevronLeftIcon width={28} className="cursor-pointer" />

            {/* Mapping each key of dateTime object to a button  */}
            <span className="grid grid-cols-3 flex-wrap gap-4 md:flex md:max-w-lg">
              {Object.keys(dateTime).map((date) => (
                <button
                  onClick={() => setSelected(date)}
                  key={date}
                  className={`${selected === date ? `bg-primary text-white` : `border-primary/70 border`} flex aspect-square size-14 cursor-pointer flex-col items-center justify-center rounded`}
                >
                  {/* To get the date in number from 2025-05-12 formatted date */}
                  <span>{new Date(date).getDate()}</span>
                  <span>
                    {/* To get only the month in short format */}
                    {new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                    })}
                  </span>
                </button>
              ))}
            </span>
            <ChevronRightIcon width={28} className="cursor-pointer" />
          </div>
        </div>

        {/* Book Now Button */}
        <button
          onClick={onBookHandler}
          className="bg-primary hover:bg-primary/90 mt-6 cursor-pointer rounded px-8 py-2 text-white transition-all"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
