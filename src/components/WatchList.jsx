import React, { useState, useEffect } from "react";
import genreids from "../Utility/genre";

function WatchList({ watchlist, setWatchList, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All genres"]);
  const [currGenre, setCurrGenre] = useState(["All Genres"]);

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  const sortByPopularityAsc = () => {
    let sortedp = [...watchlist].sort((a, b) => a.popularity - b.popularity);
    setWatchList(sortedp);
  };

  const sortByPopularityDesc = () => {
    let sortedd = [...watchlist].sort((a, b) => b.popularity - a.popularity);
    setWatchList(sortedd);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    const uniqueGenres = ["All genres", ...temp];
    setGenreList(uniqueGenres);
    console.log(uniqueGenres);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center bg-blue-400 items-center  h-[3rem] w-[9rem] rounded-xl text-white font-bold m-4 rounded-xl"
                  : "flex  justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold m-4 rounded-xl mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="search for movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded border border-gray-300 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th className="justify-center">Name</th>

              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2 cursor-pointer">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing} className="p-2 cursor-pointer">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th className="justify-center">
                <div
                  onClick={sortByPopularityAsc}
                  className="p-2 cursor-pointer "
                >
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">popularity</div>
                <div
                  onClick={sortByPopularityDesc}
                  className="p-2 cursor-pointer "
                >
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  ?.toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                      className="text-red-800"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
