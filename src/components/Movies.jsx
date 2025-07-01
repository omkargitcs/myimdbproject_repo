import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies({
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=56f13417c80ea12d5de00b98e65189c3&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-5">
      <div className="text-2xl m-2 font-bold text-center">Trending Movies</div>
      <div className="flex flex-wrap  justify-center gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchList={handleAddtoWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;
//https://api.themoviedb.org/3/movie/popular?api_key=56f13417c80ea12d5de00b98e65189c3&language=en-US&page=1
