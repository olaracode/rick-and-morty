import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { CardCharacter } from "../../types";
import CharacterCard from "./CharacterCard";
import { RevolvingDot } from "react-loader-spinner";
import { GET_CHARACTERS } from "../../Queries";

/*

  */

const AllCharacters = () => {
  let [currentPage, setCurrentPage] = useState<number>(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS(currentPage));
  let smithFamily = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center py-5">
          <RevolvingDot color={"#70d026"} width={100} height={100} />
        </div>
      ) : (
        <>
          <div className="row m-auto p-5">
            {data.characters.results.map((character: CardCharacter) => {
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
          <div className="pb-5 d-flex justify-content-center">
            {currentPage === 1 ? (
              <button className="pagination-button" disabled>
                Prev
              </button>
            ) : (
              <button
                className="pagination-button"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>
            )}
            <p style={{ verticalAlign: "middle" }}>{currentPage}</p>
            {currentPage === data.characters.info.pages ? (
              <button disabled className="pagination-button">
                Next
              </button>
            ) : (
              <button
                className="pagination-button"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AllCharacters;
