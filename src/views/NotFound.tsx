import React from "react";
import SearchBar from "../components/SearchBar";
import Rick from "../img/404a.png";
const NotFound = () => {
  return (
    <div style={{ marginTop: 150 }}>
      <SearchBar />
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 col-sm-6 text-center">
          <h3 style={{ fontSize: 58 }}>404</h3>
          <p>
            La pagina que estas buscando no existe en esta dimensión <br />
            Verifica tu link o url e intenta de nuevo o realiza tu busqueda
            ahora
          </p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <img src={Rick} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
