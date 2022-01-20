import React from "react";
import { EpisodeProps } from "../../types";

const EpisodeCard = ({ name, episode }: EpisodeProps) => {
  return (
    <div className="col-xl-3 col-sm-12 py-2">
      <div className="card p-3 episode-card">
        <p className="m-0">{name}</p>
        <p className="m-0 text-end episode">{episode}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
