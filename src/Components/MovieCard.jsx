import React from "react";

function getPosterURL(posterPath) {
  return `https://image.tmdb.org/t/p/w500${posterPath}`
}

const MovieCard = ({ poster_path, title, release_date }) => {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={getPosterURL(poster_path)}
        alt={title}
        className="w-[300px] h-[450px] shadow-sm rounded-md"
      />
      <div className="flex flex-col px-3 w-[150px]">
        <h1 className="font-bold">{title}</h1>
        <p className="font-normal text-slate-500">{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
