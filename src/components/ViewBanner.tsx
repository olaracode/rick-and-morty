import React from "react";
import { BannerProps } from "../types";
/* 
    Este es un "banner" compartido por las vistas characters y episodes
*/

const ViewBanner = ({ img, text }: BannerProps) => {
  const styles =
    img === "personajes" ? "view-banner characters" : "view-banner episodes";
  return <div className={styles}>This is my banner</div>;
};

export default ViewBanner;
