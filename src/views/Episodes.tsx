import React from "react";
import ViewBanner from "../components/ViewBanner";
import AllEpisodes from "../components/episodes/AllEpisodes";
const Episodes = () => {
  return (
    <div>
      <ViewBanner img={"episodios"} text={"Episodios"} />
      <AllEpisodes />
    </div>
  );
};

export default Episodes;
