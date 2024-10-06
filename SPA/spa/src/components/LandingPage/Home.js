import React from "react";

import wineBottle from "../../assets/common/wine_bottles.png";

const Home = ({ ref1, scrollToSection }) => {
  return (
    <div
      className="w-full relative flex flex-col justify-end items-center h-screen"
      ref={ref1}
    >
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center text-center gap-3 -mt-14">
          <span className="font-light">
            “Empowering Agriculture with Precision Forecasting”
          </span>
          <span className="text-6xl font-gopherBold">
            Data-Driven Insights for
            <br />
            Smarter Farming.
          </span>
          <span className="mt-5">
            <button
              className="font-light bg-red-wine px-7 py-3 rounded-[10px] text-white hover:scale-110 tr"
              onClick={() => scrollToSection("subs")}
            >
              Subscribe
            </button>
          </span>
        </div>
      </div>

      {/* Carrusel de botellas */}
      <div className="w-full flex justify-between absolute bottom-0">
        <div className="carousel-inner flex opacity-20">
          <img src={wineBottle} />
          <img src={wineBottle} />
        </div>
      </div>
    </div>
  );
};

export default Home;