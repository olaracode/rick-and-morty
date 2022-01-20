import React, { useState } from "react";
import EpisodeCard from "./EpisodeCard";
import { useQuery, gql } from "@apollo/client";
import { EpisodeProps } from "../../types";
import { RevolvingDot } from "react-loader-spinner";

const GET_EPISODES = (page: number) => gql`
  query getEpisodes {
    episodes (page: ${page}){
      results {
        name, episode, id
      },
      info {
        pages
      }
    }
  }
`;

const AllEpisodes = () => {
  let [currentPage, setCurrentPage] = useState<number>(1);

  const { loading, error, data } = useQuery(GET_EPISODES(currentPage));
  return (
    <div className="row m-auto p-5">
      {loading ? (
        <div className="d-flex align-items-center justify-content-center py-5">
          <RevolvingDot color={"#70d026"} width={100} height={100} />
        </div>
      ) : (
        <>
          {data.episodes.results.map((episode: EpisodeProps) => {
            return (
              <EpisodeCard name={episode.name} episode={episode.episode} />
            );
          })}
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
            {currentPage === data.episodes.info.pages ? (
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
    </div>
  );
};

export default AllEpisodes;
