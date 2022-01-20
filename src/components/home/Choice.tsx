import React from "react";
import Characters from "../../img/episodes.png";
import Episodes from "../../img/epis.jpg";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Choice = () => {
  let navigate = useNavigate();
  return (
    <div className="my-5 container-fluid">
      <div className="row jusitfy-content-between m-auto">
        <div
          className="col-lg-6 col-xs-12 m-auto p-5"
          onClick={() => navigate("/episodes", { replace: true })}
        >
          <img
            src={Episodes}
            alt=""
            style={{ maxWidth: "100%" }}
            className="rounded choice-img"
          />
          <div className="d-flex justify-content-end pt-1">
            <p className="choice-link">
              Episodios
              <FaArrowRight className="mx-2" />
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 col-xs-12 m-auto p-5"
          onClick={() => navigate("/characters", { replace: true })}
        >
          <img
            src={Characters}
            alt=""
            style={{ maxWidth: "100%" }}
            className="rounded choice-img"
          />
          <div className="d-flex justify-content-end pt-1">
            <p className="choice-link">
              Personajes
              <FaArrowRight className="mx-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
