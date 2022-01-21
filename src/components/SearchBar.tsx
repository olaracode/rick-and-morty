import React, { useState } from "react";
import Portal from "../img/portal.png";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  let navigate = useNavigate();

  let [searchTerm, setSearch] = useState<string>("");
  let handleSubmit = (e: any, term: string) => {
    e.preventDefault();
    let trimmedTerm = term.replace(" ", "-");
    navigate(`/search/${trimmedTerm}`);
  };
  return (
    <div className="search-bar-container d-flex justify-content-center">
      <div className="search-bar">
        <input
          type="text"
          className="search-bar-input"
          placeholder={searchTerm == "" ? "Morty Smith" : searchTerm}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) =>
            e.key === "Enter" ? handleSubmit(e, searchTerm) : null
          }
        />
        <img
          src={Portal}
          alt=""
          className="mx-auto p-2 portal"
          onClick={(e) => handleSubmit(e, searchTerm)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
