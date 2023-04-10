import React, { useEffect, useState } from "react";

function getPosterURL(posterPath) {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
}

const MovieCard = ({ poster_path, title, release_date, overview }) => {
  const [date, setDate] = useState("");

  // Lifepoint functionality
  const initialLives = 3;
  const [lives, setLives] = useState(initialLives);

  const handleLostLives = () => {
    setLives(lives - 1);
    localStorage.setItem("lives", lives - 1);
  };

  useEffect(() => {
    const savedLives = localStorage.getItem("lives");
    if (savedLives) {
      setLives(parseInt(savedLives));
    }
  }, []);
  // Lifepoint functionality

  // Score
  const initialScore = 0;
  const [score, setScore] = useState(initialScore);

  const handleScore = () => {
    setScore(score + 1);
    localStorage.setItem("Score", score + 1);
  };

  useEffect(() => {
    const savedScore = localStorage.getItem("Score");
    if (savedScore) {
      setScore(parseInt(savedScore));
    }
  }, []);

  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
      setHighScore(Number(storedHighScore));
    }
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.removeItem("score");
    } else {
      localStorage.setItem("score", score);
    }
  }, [score, highScore]);
  // Score

  // Reset

  // Reset

  let releaseDateConvert = JSON.stringify({ release_date }).slice(17, 21);
  let userDateConvert = JSON.stringify({ date })
    .replace(/\s+/g, "")
    .slice(9, 13);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Input Submission
    if (lives <= 0) {
      console.log("game over");
    } else if (userDateConvert != releaseDateConvert) {
      handleLostLives();
    } else if (userDateConvert === releaseDateConvert) {
      handleScore();
      window.location.reload();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-center">
          <p className="text-[#ff0000] mr-4 text-xl mb-8">
            Lives Remaining : {lives}
          </p>
          {lives >= 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="red"
              class="bi bi-balloon-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
              />
            </svg>
          )}
          {lives >= 2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="red"
              class="bi bi-balloon-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
              />
            </svg>
          )}
          {lives >= 3 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="red"
              class="bi bi-balloon-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
              />
            </svg>
          )}
          <p className="text-[#ff0000] mr-4 text-xl ml-8">Score : {score}</p>
          <p className="text-[#ff0000] mr-4 text-xl ml-8">
            Highscore : {highScore}
          </p>
        </div>

        <div>
          <img
            src={getPosterURL(poster_path)}
            alt={title}
            id="poster"
            className="shadow-md rounded-md object-cover text-center mx-auto w-48 sm:w-72"
          />

          <div className="text-center mt-4 opacity-90">
            <h1
              className="font-bold mb-4 underline text-xl text-amber-500"
              id="title"
            >
              {title}
            </h1>
            <p className="font-normal text-slate-500">{release_date}</p>
            <p className="mx-auto w-72 sm:w-96 md:w-[600px] text-[#e9e6e6]">
              {overview}
            </p>

            <form onSubmit={handleSubmit}>
              <input
                autoComplete="off"
                type="text"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Guess the Year"
                id="year"
                class="border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-amber-500 focus:ring-blue-500 focus:border-blue-500 mx-auto mt-8 mb-8 text-center"
              />
              <button type="submit" className="hidden">
                submit
              </button>
            </form>
          </div>
        </div>

        {lives <= 0 && (
          <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/90 text-[#e1e1e1] flex justify-center items-center text-center">
              <div>
                <p className="mb-8 text-3xl">Game Over!</p>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800">
                  <span class="text-2xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Play Again?
                  </span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieCard;
