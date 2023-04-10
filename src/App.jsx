import TMDB from "./api/TMDB";
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";

function App() {
  const [randomMovie, setRandomMovie] = useState([]);

  axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
      Accept: "application/json"
    },
    params: {
      api_key: `process.env.REACT_APP_API_KEY`,
      region: 'US',
      sort_by: 'popularity.desc',
      include_adult: false,
      page: Math.floor(Math.random() * 500),
    }
  })

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
