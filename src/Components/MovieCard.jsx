import React from "react";

function getPosterURL(posterPath) {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
}

const MovieCard = ({ poster_path, title, release_date, overview }) => {
  return (
    <div className="text-amber-500">
      <img
        src={getPosterURL(poster_path)}
        alt={title}
        className="shadow-md rounded-md object-cover text-center mx-auto w-48 lg:w-72"
      />

      <div className="text-center mt-4">
        <h1 className="font-bold">{title}</h1>
        <p className="font-normal text-slate-500">{release_date}</p>
        <p className=" w-96 mx-auto">{overview}</p>

        <input
          type="text"
          placeholder="Guess the Year"
          id="year"
          class="border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mx-auto mt-8 text-center"
        />
      </div>
    </div>
  );
};

export default MovieCard;
