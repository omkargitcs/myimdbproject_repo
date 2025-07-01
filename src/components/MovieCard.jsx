import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[35vh] w-[150px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-xl w-full p-2 text-center bg-gray-800/60 bg-gray-900/60">
        {name}
      </div>
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className=" flex flex-bottom justify-center h-8 w-8 items-bottom rouned-lg"
        >
          {" "}
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className=" flex flex-bottom justify-center h-8 w-8 items-bottom rouned-lg"
        >
          &#128525;
        </div>
      )}
    </div>
  );
}

export default MovieCard;
