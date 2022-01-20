import React from "react";
import Portal from "../img/portal.png";
const SearchBar = () => {
  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        width: "90%",
        height: 60,
        borderRadius: "100px",
        margin: "auto",
        display: "flex",
      }}
    >
      <input
        type="text"
        style={{
          width: "90%",
          height: 60,
          borderRadius: "100px",
          padding: "15px",
          border: 0,
        }}
      />
      <img src={Portal} alt="" className="mx-auto p-2" />
    </div>
  );
};

export default SearchBar;
