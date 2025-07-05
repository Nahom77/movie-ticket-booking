// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import { dummyDateTimeData, dummyShowsData } from "../assets/assets";

// import type { Show } from "../lib/ShowInterfaces";
// import { ClockIcon } from "lucide-react";

const SeatLayout = () => {
  //   const { id, date } = useParams<{ id: string; date: string }>();
  //   const [selectedSeats, setSelectedSeats] = useState([]);
  //   const [selectedTime, setSelectedTime] = useState(null);
  //   const [show, setShow] = useState<Show | null>(null);
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     // if (!id || !date) {
  //     //   navigate("/error-or-homepage"); // or show error
  //     //   return;
  //     // }
  //     const getShow = async () => {
  //       const movie = dummyShowsData.find((show) => show._id === id);
  //       if (movie) {
  //         setShow({ movie, dateTime: dummyDateTimeData });
  //       }
  //     };
  //     getShow();
  //   }, [id]);
  //   if (!show || !date) return <div></div>;
  //   return show ? (
  //     <div className="flex flex-col px-6 py-30 md:flex-row md:px-16 md:pt-50 lg:px-40">
  //       {/* Available Timings */}
  //       <div className="bg-primary/10 border-primary/20 h-max w-60 rounded-lg border py-10 md:sticky md:top-30">
  //         <p className="px-6 text-lg font-semibold">Available Titles</p>
  //         <div
  //           className={`flex w-max cursor-pointer items-center gap-2 rounded-r-md px-6 py-2 transition`}
  //         >
  //           {show.dateTime[date].map((item, index) => (
  //             <div>
  //               <ClockIcon key={index} className="size-4" />
  //               <p className="text-sm">{item.time}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   ) : (
  //     <div></div>
  //   );
  return <div></div>;
};

export default SeatLayout;
