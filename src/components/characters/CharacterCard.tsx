import React from "react";
import { CardCharacter } from "../../types";
const CharacterCard = ({ name, image, id }: CardCharacter) => {
  return (
    <div className="col-xl-3 col-sm-6 mt-5">
      <div className="card character-card w-85 p-3 align-items-center">
        <div>
          <img src={image} alt="" className="character-card-image" />
        </div>
        <p className="text-center px-3 character-text">{name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
