import React, { useState } from "react";


function getPosterURL(posterPath) {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
}

const MovieCard = ({ poster_path, title, release_date, overview }) => {
  const [date, setDate] = useState('')

  return (
    <div className="text-amber-500">
      <img
        src={getPosterURL(poster_path)}
        alt={title}
        className="shadow-md rounded-md object-cover text-center mx-auto w-48 sm:w-72"
      />

      <div className="text-center mt-4">
        <h1 className="font-bold">{title}</h1>
        <p className="font-normal text-slate-500">{release_date}</p>
        <p className="mx-auto w-72 sm:w-96 md:w-[600px]">{overview}</p>

        <input
          type="text"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Guess the Year"
          id="year"
          class="border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-amber-500 focus:ring-blue-500 focus:border-blue-500 mx-auto mt-8 mb-8 text-center"
        />
        <button type="submit" class='hidden'>submit</button>
      </div>
    </div>
  );
};

export default MovieCard;
