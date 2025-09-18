import React from 'react';
import mobileImages from ".//images/mobile/mac_for_students_hero__dbi4flqyio2u_small.jpg";
import desktopImages from "./images/desktop/mac_for_students_hero__dbi4flqyio2u_largetall.jpg";

const Hero = () => {
  const isDesktop = window.innerWidth >= 768;
  const bgImage = isDesktop ? desktopImages : mobileImages;
  return (
    <section
      className="text-center text-white h-[70vh] sm:h-[80vh] md:h-[70vh] flex flex-col items-center justify-end bg-cover bg-center mt-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <button className="border py-2 px-6 rounded-full mb-10 text-black bg-white hover:bg-gray-200 transition">
        Learn more
      </button>
    </section>
  );
};

export default Hero;
