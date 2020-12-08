import React from "react";
import "./Login.css";
import logo_trello from "./logo_trello.png";
import atlassian from "./atlassian-logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_main">
      <div className="izq"></div>
      <div className="login">
        <div className="logo_login">
          <img src={logo_trello} alt="" />
        </div>
        <div className="cuerpo_login">
          <h2>Iniciar sesión en Trello</h2>
          <form className="formulario_login">
            <div className="caja_login">
              <input
                placeholder="Introduzca el correo electrónico"
                type="text"
              />
              <input placeholder="Introduzca la contraseña" type="password" />
              <button>Iniciar sesión</button>
            </div>
          </form>
          <hr />
          <div className="enlaces_login">
            {/* <a
              className="forgotLink"
              href="/forgot"
              data-analytics-link="forgotPasswordLink"
            >
              ¿No puede iniciar sesión?
            </a> */}
            <Link to="/register">Regístrese para crear una cuenta</Link>
          </div>
        </div>
        <div className="footer_login">
          <hr />
          <img src={atlassian} alt="" />
          <div className="miscelania">
            <a href="/">Plantillas</a>
            <a href="/">Precios</a>
            <a href="/">Aplicaciones</a>
            <a href="/">Trabajos</a>
            <a href="/">Blog</a>
            <a href="/">Desarrolladores</a>
            <a href="/">Acerca de</a>
            <a href="/">Ayuda</a>
            <a href="/">Configuración de las cookies</a>
          </div>
        </div>
      </div>
      <div className="derecha"></div>
    </div>
  );
}

export default Login;
