import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Characters, MainCardProps } from "../../types";
import Character from "../../views/Character";
const GET_CHARACTER = (id: number) => gql`
    query getCharacter {
        character(id: ${id}){
            id,
            name,
            species,
            image,
            origin{
                name
            },
            location{
                name
            },
            status
        }
    }
`;

const MainCard = ({ id }: MainCardProps) => {
  const { loading, error, data } = useQuery(GET_CHARACTER(id));
  return (
    <div className="card main-card">
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
