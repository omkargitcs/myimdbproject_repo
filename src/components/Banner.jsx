import React from "react";

function Banner() {
  return (
    <div
      className="relative h-[40vh] md:h-[75vh] bg-cover bg-center text-white "
      style={{
        backgroundImage: `url(https://images.hdqwalls.com/wallpapers/avengers-endgame-new-poster-2019-4y.jpg)`,
      }}
    >
      <div className="font-serif text-white text-3xl text-center bg-gray-800/50 p-4 ">
        Avengers Endgame
      </div>
    </div>
  );
}

export default Banner;
