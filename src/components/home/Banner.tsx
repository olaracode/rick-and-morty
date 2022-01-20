import React from "react";

const Banner = () => {
  let width: number = window.innerWidth;
  let isDesktop: boolean = width > 480 ? true : false;
  return (
    <div className="landing d-flex justify-content-center align-items-center">
      <div
        className="quote"
        style={isDesktop ? { width: "75%" } : { width: "100%" }}
      >
        <p>
          Vivir es arriesgarlo todo, de lo contrario eres solo un trozo inerte
          de moleculas que se desplazan dondequiera que el universo te lleve
        </p>
        <p className="text-end p-5">- Rick Sanchez</p>
        <button className="cta-button w-75 text-white">Explora su mundo</button>
      </div>
    </div>
  );
};

export default Banner;
