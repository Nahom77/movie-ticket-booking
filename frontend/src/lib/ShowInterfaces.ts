interface Genre {
  id: number;
  name: string;
}

interface Cast {
  name: string;
  profile_path: string;
}

interface Movie {
  _id: string;
  title: string;
  poster_path: string;
  overview: string;
  runtime: number;
  vote_average: number;
  genres: Genre[];
  release_date: string;
  casts: Cast[];
}

interface ShowTime {
  time: string;
  showId: string;
}

interface DateTime {
  [date: string]: ShowTime[]; // Allow any date string key with array of ShowTime
}

export interface Show {
  movie: Movie;
  dateTime: DateTime; // You can replace `any` with a specific type for `dummyDateTimeData` if known
}
