import React from "react";
import Logo from "../assets/MovieLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex items-center  px-4 py-2 border-b ">
      <div className="flex items-center space-x-4">
        <img className="w-[60px]" src={Logo} alt="Movie Logo" />
        <Link to="/" className="text-blue-800 text-3xl hover:underline">
          Movies
        </Link>
        <Link
          to="/Watchlist"
          className="text-blue-800 text-3xl hover:underline"
        >
          WatchList
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
