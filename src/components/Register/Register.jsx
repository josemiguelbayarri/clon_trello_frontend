import React, { useState } from "react";
import "./Register.css";
import logo_trello from "../Images/logo_trello.png";
import atlassian from "../Images/atlassian-logo.png";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const [datos, setDatos] = useState({
    email: "",
    name: "",
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
    const user = {
      email: datos.email,
      name: datos.name,
      password: datos.password,
    };

    Axios.post("http://localhost:3000/users/signup", user).then((res) => {
      const user = res.data;
      console.log("usuario creado: ", user);
    });

    setTimeout(() => {
      history.push("/login");
    }, 500);
  };

  return (
    <div className="register_main">
      <div className="izq"></div>
      <div className="register">
        <div className="logo_register">
          <img src={logo_trello} alt="" />
        </div>
        <div className="cuerpo_register">
          <h2>Crea tu cuenta</h2>
          <form onSubmit={onSubmit} className="formulario_register">
            <div className="caja_register">
              <input
                onChange={handleInputChange}
                placeholder="Introducir el correo electrónico"
                type="email"
                name="email"
              />
              <input
                onChange={handleInputChange}
                placeholder="Introducir nombre completo"
                type="text"
                name="name"
              />
              <input
                onChange={handleInputChange}
                placeholder="Crear contraseña"
                type="password"
                name="password"
              />
              <p className="info_register">
                Al registrarse, confirma que ha leído y aceptado nuestras{" "}
                <a
                  href="https://www.atlassian.com/legal/cloud-terms-of-service"
                  target="blank"
                >
                  Condiciones del Servicio
                </a>{" "}
                y nuestra{" "}
                <a
                  href="https://www.atlassian.com/legal/privacy-policy"
                  target="blank"
                >
                  Política de Privacidad.
                </a>
              </p>
              <button type="submit">Crear</button>
            </div>
          </form>
          <hr />
          <div className="enlaces_register">
            <Link to="/login" className="register_record">
              ¿Ya tiene una cuenta? Inicie sesión
            </Link>
          </div>
        </div>
        <div className="footer_register">
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

export default Register;
