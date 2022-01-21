import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { CardCharacter } from "../../types";
import CharacterCard from "../characters/CharacterCard";
import { GET_EPISODE_DETAILS } from "../../Queries";
import { RevolvingDot } from "react-loader-spinner";
const Episode = () => {
  let params = useParams();
  let id = params.id!;
  const { loading, error, data } = useQuery(GET_EPISODE_DETAILS(id));
  console.log(data);
  return (
    <div style={{ marginTop: 150, width: "90%" }} className="mx-auto">
      {loading ? (
        <div className="d-flex align-items-center justify-content-center py-5">
          <RevolvingDot color={"#70d026"} width={100} height={100} />
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <h3>{data.episode.name}</h3>
            <p>{data.episode.episode}</p>
          </div>
          <div className="row py-5">
            {data.episode.characters.map((character: CardCharacter) => {
              return (
                <CharacterCard
                  name={character.name}
                  id={character.id}
                  image={character.image}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Episode;
