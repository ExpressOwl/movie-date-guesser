import TMDB from "./api/TMDB";
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";


function App() {
  const [randomMovie, setRandomMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const {data} = await TMDB.get('discover/movie')
      setRandomMovie(data.results)
    }

    fetchMovie()
  }, []);

  return (
    <div className="text-blue-500">
      {randomMovie.map((randomMovie, index) => {
        return <MovieCard key={index} {...randomMovie} />
      })}
    </div>
  )
}

export default App;
