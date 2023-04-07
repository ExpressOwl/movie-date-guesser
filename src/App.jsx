import TMDB from "./api/TMDB";
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";

function App() {
  const [randomMovie, setRandomMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await TMDB.get("discover/movie");
      setRandomMovie(data.results.slice(0, 1));
    };

    fetchMovie();
  }, []);

  return (
    <>
      <div class="bg-cover bg-no-repeat bg-[url('./images/hero-bg.jpg')] bg-gray-700 bg-blend-multiply w-full h-screen pt-24">
        {randomMovie.map((randomMovie) => {
          return <MovieCard {...randomMovie} />;
        })}
      </div>
    </>
  );
}

export default App;
