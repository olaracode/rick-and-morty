import React from "react";
import { EpisodeProps } from "../../types";
import { useNavigate } from "react-router";
const EpisodeCard = ({ name, episode, id }: EpisodeProps) => {
  let navigate = useNavigate();
  return (
    <div className="col-xl-3 col-sm-12 py-2">
      <div
        className="card p-3 episode-card"
        onClick={() => {
          navigate(`/episode/${id}`, { replace: true });
        }}
      >
        <p className="m-0">{name}</p>
        <p className="m-0 text-end episode">{episode}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
