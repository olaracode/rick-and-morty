import React from "react";
import { useQuery, gql } from "@apollo/client";
import { CardCharacter } from "../../types";
import CharacterCard from "./CharacterCard";

const GET_CHARACTER = () => gql`
  query getCharacter {
    characters {
      results {
        name
        image
        id
      }
    }
  }
`;

/*

  */

const AllCharacters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTER());
  let smithFamily = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="row m-auto p-5">
          {data.characters.results.map((character: CardCharacter) => {
            console.log(character.id);
            if (character.id in smithFamily) {
              return null;
            } else {
              return (
                <CharacterCard
                  name={character.name}
                  image={character.image}
                  id={character.id}
                />
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default AllCharacters;
