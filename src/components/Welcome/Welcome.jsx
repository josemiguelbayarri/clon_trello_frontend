import React from "react";
import "./Welcome.css";
import portada from "../Images/portada.png";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <nav className="menu_welcome">
        <img src={logo} alt="logo"/>
        <div className="menu">
          <span className="menu_login"><Link to="/login">Iniciar sesión</Link></span>
          <span className="menu_registro"><Link to="/register">Registrarse</Link></span>
        </div>
      </nav>
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
