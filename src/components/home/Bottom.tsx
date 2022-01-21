import React from "react";
import SearchBar from "../SearchBar";
const Bottom = () => {
  return (
    <div className="container-fluid bottom p-4" id="explore">
      <p className="text-center bottom-text">
        Busca a tus personajes favoritos
      </p>
      <SearchBar />
    </div>
  );
};

export default Bottom;
