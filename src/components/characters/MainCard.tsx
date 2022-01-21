import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Characters, MainCardProps } from "../../types";
import Character from "../../views/Character";
import { useNavigate } from "react-router-dom";
import { GET_CHARACTER } from "../../Queries";

const MainCard = ({ id }: MainCardProps) => {
  const { loading, error, data } = useQuery(GET_CHARACTER(id));
  let navigate = useNavigate();
  return (
    <div
      className="card main-card"
      onClick={() => {
        navigate(`/character/${id}`, { replace: true });
      }}
    >
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="m-auto p-3">
          <div className="d-flex justify-content-center">
            <img
              src={data.character.image}
              alt=""
              className="rounded-circle main-card-image"
            />
          </div>
          <p className="main-card-text">{data.character.name}</p>
        </div>
      )}
    </div>
  );
};

export default MainCard;
