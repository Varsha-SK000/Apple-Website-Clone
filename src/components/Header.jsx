import React from 'react';
import mobileImages from "./images/Hero/mac_for_students_hero__dbi4flqyio2u_mediumtall.jpg";
import desktopImages from "./images/desktop/hero_bts_2025__kjxalx8t7ia2_largetall.jpg";

const Header = () => {
  const isDesktop = window.innerWidth >= 768;
  const bgImage = isDesktop ? desktopImages : mobileImages;
  return (
    <header
      className="text-center text-white h-1/2 flex flex-col items-center justify-center bg-cover mx-auto mt-3 cursor-pointer"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-5xl font-bold w-72 bg-blue-500 p-5 rounded-3xl cursor-pointer mt-20 text-left">
        Buy Mac or iPad for college{" "}
      </h1>

      <p className="text-2xl font-bold w-72 bg-blue-500 p-2 rounded-3xl mt-2 cursor-pointer">
        with education savings
      </p>

      <p className="text-5xl font-bold w-72 bg-blue-500 p-5 rounded-3xl mt-5 cursor-pointer text-left">
        Choose Airpods or an eligible accessory
      </p>

      <button className="border border-blue-400 py-2 px-4 rounded-3xl text-xl  hover:bg-blue-500 hover:text-white text-blue-500 mt-6 mb-20">
        Shop
      </button>
    </header>
  );
};

export default Header;
