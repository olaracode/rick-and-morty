import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Characters } from "../types";
import ViewBanner from "../components/ViewBanner";
import Personajes from "../img/personajes.jpg";
import SmithFamily from "../components/characters/SmithFamily";
import AllCharacters from "../components/characters/AllCharacters";
const Character = () => {
  return (
    <>
      <ViewBanner img={"personajes"} text={"Personajes"} />
      <SmithFamily />

      <AllCharacters />
    </>
  );
};

export default Character;
