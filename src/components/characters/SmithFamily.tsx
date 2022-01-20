import React from "react";
import MainCard from "./MainCard";
import Slider from "react-slick";

const SmithFamily = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let familyMembers = [1, 2, 3, 4, 5];
  let width = window.innerWidth;
  return (
    <>
      <p className="text-center my-5 top-text">
        Conoce a la familia Smith-Sanchez
      </p>
      {width < 600 ? (
        <div style={{ width: "90%", margin: "auto" }}>
          <Slider>
            {familyMembers.map((id) => {
              return (
                <div className="px-2">
                  <MainCard id={id} />
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <div className="row justify-content-center my-5">
          {familyMembers.map((id) => {
            return (
              <div className="col-xl-2 col-m-4">
                <MainCard id={id} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SmithFamily;
