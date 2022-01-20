import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Characters } from "../types";
import ViewBanner from "../components/ViewBanner";
import Personajes from "../img/personajes.jpg";

const Character = () => {
  return (
    <>
      <ViewBanner img={"../img/personajes.jpg"} text={"Personajes"} />
    </>
  );
};

export default Character;
