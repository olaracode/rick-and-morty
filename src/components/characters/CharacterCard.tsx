import React from "react";
import { CardCharacter } from "../../types";
import { useNavigate } from "react-router";
const CharacterCard = ({ name, image, id }: CardCharacter) => {
  let navigate = useNavigate();
  return (
    <div className="col-xl-3 col-sm-6 mt-5">
      <div
        className="card character-card w-85 p-3 align-items-center"
        onClick={() => {
          navigate(`/character/${id}`, { replace: true });
        }}
      >
        <div>
          <img src={image} alt="" className="character-card-image" />
        </div>
        <p className="text-center px-3 character-text">{name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
