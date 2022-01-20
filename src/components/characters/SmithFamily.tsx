import React from "react";
import MainCard from "./MainCard";

const SmithFamily = () => {
  return (
    <>
      <p className="text-center my-5 top-text">
        Conoce a la familia Smith-Sanchez
      </p>
      <div className="row justify-content-center my-5">
        <div className="col-xl-2">
          <MainCard id={1} />
        </div>
        <div className="col-xl-2">
          <MainCard id={2} />
        </div>
        <div className="col-xl-2">
          <MainCard id={3} />
        </div>
        <div className="col-xl-2">
          <MainCard id={4} />
        </div>
        <div className="col-xl-2">
          <MainCard id={5} />
        </div>
      </div>
    </>
  );
};

export default SmithFamily;
