import React, { useEffect, useState } from "react";
import "./Header.css";
import AppsIcon from "@material-ui/icons/Apps";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
import logo_trello from "../Images/logo_trello.png";
import perfil_trello from "../Images/perfil.png";

function Header() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("user");
    console.log("este es el token", token);
    setToken(token);
  }, []);

  return (
    <div className="boards">
      <header className="cabecera">
        <div className="left">
          <div className="icons">
            <AppsIcon fontSize="small" />
          </div>
          <div className="icons">
            <HomeOutlinedIcon fontSize="small" />
          </div>
          <div className="icons">
            <DashboardOutlinedIcon fontSize="small" />
            <span className="icon_title">Tableros</span>
          </div>
        </div>

        <div className="center">
          <Link to="/header" className="logo_login">
            Regístrese para crear una cuenta
            <img src={logo_trello} alt="" />
          </Link>
        </div>

        <div className="right">
          <div className="icons">
            <AddOutlinedIcon />
          </div>
          <div className="icons">
            <AddOutlinedIcon />
          </div>
          <div className="icons">
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className="icons_image">
            <img src={perfil_trello} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
