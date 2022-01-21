import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { GET_SEARCH } from "../Queries";
import CharacterCard from "../components/characters/CharacterCard";
import { CardCharacter } from "../types";
import Image from "../img/search.png";
import { RevolvingDot } from "react-loader-spinner";

const Search = () => {
  let params = useParams();
  let searchTerm = params.input ? params.input : "";
  let [currentPage, setCurrentPage] = useState<number>(1);
  let processedTerm = searchTerm.replace("-", " ");
  const { loading, error, data } = useQuery(
    GET_SEARCH(currentPage, processedTerm)
  );
  return (
    <div style={{ marginTop: 150 }}>
      <h5 className="text-center">Busca a tu personaje favorito</h5>
      <SearchBar />
      {loading ? (
        <div className="d-flex align-items-center justify-content-center py-5">
          <RevolvingDot color={"#70d026"} width={100} height={100} />
        </div>
      ) : (
        <>
          {error ? (
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-sm-12 col-m-6 text-center">
                <p>
                  Ooops no conseguimos lo que estabas buscando, revisa tu
                  busqueda y vuelve a intentarlo
                </p>
              </div>
              <img src={Image} alt="" className="col-lg-4 col-sm-12 col-m-6" />
            </div>
          ) : (
            <>
              <div className="row m-auto p-5">
                {data.characters.results.map((character: CardCharacter) => {
                  return (
                    <CharacterCard
                      name={character.name}
                      image={character.image}
                      id={character.id}
                    />
                  );
                })}
              </div>

              <div className="py-5 d-flex justify-content-center">
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
      )}
    </div>
  );
};

export default Search;
