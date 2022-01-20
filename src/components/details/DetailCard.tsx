import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = (id: string) => gql`
  query getCharacter {
    character (id: ${id}){
      name, status, species, location{ name }, origin{ name }, image, episode{name, episode}
    }
  }
`;

const DetailCard = () => {
  let params = useParams();
  let id = params.id!;
  const { loading, error, data } = useQuery(GET_CHARACTER(id));
  return (
    <div className="detail mx-auto">
      <div className="card card-detail p-5 row">
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <img
              src={data.character.image}
              className="col-xl-4 rounded-circle"
              alt=""
            />
            <div className="col-xl-8 align-items-center d-flex">
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
    </div>
  );
};

export default DetailCard;
