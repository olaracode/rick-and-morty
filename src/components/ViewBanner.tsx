import React from "react";
import { BannerProps } from "../types";
/* 
    Este es un "banner" compartido por las vistas characters y episodes
*/

const ViewBanner = ({ img, text }: BannerProps) => {
  const styles =
    img === "personajes" ? "view-banner characters" : "view-banner episodes";
  return (
    <div className="view-banner-container">
      <div className={styles}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <p className="view-banner-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewBanner;
