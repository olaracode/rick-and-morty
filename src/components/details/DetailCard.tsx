import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import EpisodeCard from "../episodes/EpisodeCard";
import { EpisodeProps } from "../../types";
import { GET_CHARACTER_DETAIL } from "../../Queries";
import { RevolvingDot } from "react-loader-spinner";
const DetailCard = () => {
  let params = useParams();
  let id = params.id!;
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAIL(id));
  return (
    <div className="detail mx-auto">
      <div className="card card-detail p-5 row">
        {loading ? (
          <div className="d-flex align-items-center justify-content-center py-5">
            <RevolvingDot color={"#70d026"} width={100} height={100} />
          </div>
        ) : (
          <>
            <img
              src={data.character.image}
              className="col-xl-4 rounded-circle"
              alt=""
            />
            <div className="col-xl-8 align-items-center d-flex my-3 justify-content-center">
              <div>
                <h3 className="text-center">{data.character.name}</h3>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6 col-sm-12 my-3 text-center">
                    Especie: {data.character.species}
                  </div>
                  <div className="col-lg-6 col-sm-12 my-3 text-center">
                    Origen: {data.character.origin.name}
                  </div>
                  <div className="col-lg-6 col-sm-12 my-3 text-center">
                    Locacion actual: {data.character.location.name}
                  </div>
                  <div className="col-lg-6 col-sm-12 my-3 text-center">
                    Estado: {data.character.status}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center py-5">
          <RevolvingDot color={"#70d026"} width={100} height={100} />
        </div>
      ) : (
        <div className="row py-5">
          {data.character.episode.map((ep: EpisodeProps) => {
            return (
              <EpisodeCard
                name={ep.name}
                episode={ep.episode}
                id={ep.id}
                key={ep.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DetailCard;
