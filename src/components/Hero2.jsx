import React from 'react';
import mobileImages from "./images/mobile/hero_macbook_air_avail__fpm99qgohx2e_small.jpg";
import desktopImages from "./images/desktop/hero_macbook_air_avail__fpm99qgohx2e_largetall.jpg";
import Button from "./common/Button";

const Hero2 = () => {
  const isDesktop = window.innerWidth >= 768;
  const bgImage = isDesktop ? desktopImages : mobileImages;
  return (
    <section
      className="relative min-h-[60vh] xs:min-h-[50vh] bg-cover bg-center rounded-xl shadow-lg overflow-hidden flex items-start justify-center mt-4 cursor-pointer"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Card content positioned at the top */}
      <div className="relative px-4 xs:px-2 pt-6 xs:pt-4">
        <div className="rounded-xl w-full px-4 xs:px-2 py-3 xs:py-2 text-center text-black">
          <h1 className="text-black text-2xl xs:text-lg sm:text-3xl font-bold">
            MacBook Air
          </h1>
          <p className="text-black text-lg xs:text-sm sm:text-xl">
            Sky blue Colour
          </p>
          <p className="text-black text-lg xs:text-sm sm:text-xl">
            Sky high performance with M4
          </p>

          <Button />

          {/* <div className="mt-3 xs:mt-2 space-x-2">
        <button className="border py-2 px-4 xs:py-1 xs:px-3 rounded-3xl bg-blue-500 text-white text-sm xs:text-xs">
          Learn more
        </button>
        <button className="border border-blue-400 py-2 px-4 xs:py-1 xs:px-3 rounded-3xl hover:bg-blue-500 hover:text-white text-blue-500 text-sm xs:text-xs">
          Buy
        </button>
      </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
