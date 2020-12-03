import React from "react";
import "./Welcome.css";
import portada from "./portada.png"; // with import

function Welcome() {
  return (
    <div className="welcome">
      <header>
        <h1 className="titulo">trello</h1>
        <div className="menu">
          <p>Iniciar sesión</p>
          <p>Registrarse</p>
        </div>
      </header>
      <body>
        <div className="main">
          <div className="info_text">
            <h2 className="info_text_h2">
              Trello permite que los equipos trabajen de forma más colaborativa
              y sean más productivos.
            </h2>
            <h3 className="info_text_h3">
              Las tarjetas, listas y tableros de Trello permiten que los equipos
              organicen y prioricen sus proyectos de forma divertida, flexible y
              provechosa.
            </h3>
          </div>
          <div className="info_img">
            <img src={portada} alt="" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default Welcome;
