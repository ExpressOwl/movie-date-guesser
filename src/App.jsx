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
      <div class="bg-cover bg-no-repeat bg-[url('./images/hero-bg.jpg')] bg-gray-700 bg-blend-multiply w-full h-screen pt-16 overflow-y-scroll">
        {randomMovie.map((randomMovie) => {
          return (
            <MovieCard
              key={randomMovie.id}
              poster_path={randomMovie.poster_path}
              title={randomMovie.title}
              release_date={randomMovie.release_date}
              overview={randomMovie.overview}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
