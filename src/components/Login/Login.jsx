import React, { useState } from "react";
import "./Login.css";
import logo_trello from "./logo_trello.png";
import atlassian from "./atlassian-logo.png";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: datos.email,
      password: datos.password,
    };
    console.log("estas son las credenciales", credentials);
    Axios.post("http://localhost:3000/users/login", credentials).then((res) => {
      const user = res.data.user;
      console.log("usuario logueado: ", user);

      localStorage.setItem("user", user.name);
      /* localStorage.setItem("email", user.email); */

      localStorage.setItem("authToken", res.data.token);

      setTimeout(() => {
        /* const email = localStorage.getItem("email", user.email); */
  
        /* history.push(`/` + {email} + `/boards`); */
        history.push("/boards");
      }, 500);
    });
  };
  return (
    <div className="login_main">
      <div className="izq"></div>
      <div className="login">
        <div className="logo_login">
          <img src={logo_trello} alt="" />
        </div>
        <div className="cuerpo_login">
          <h2>Iniciar sesión en Trello</h2>
          <form onSubmit={onSubmit} className="formulario_login">
            <div className="caja_login">
              <input
                onChange={handleInputChange}
                placeholder="Introduzca el correo electrónico"
                type="text"
                name="email"
              />
              <input
                onChange={handleInputChange}
                placeholder="Introduzca la contraseña"
                type="password"
                name="password"
              />
              <button type="submit">Iniciar sesión</button>
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
