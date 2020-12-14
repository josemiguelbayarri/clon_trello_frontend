import React, { useEffect, useState } from "react";
import "./Boards.css";
import AppsIcon from "@material-ui/icons/Apps";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import logo_trello from "./logo_trello.png";

function Boards() {
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
            <AppsIcon fontSize="small"/>
          </div>
          <div className="icons">
            <HomeOutlinedIcon fontSize="small"/>
          </div>
          <div className="icons">
            <DashboardOutlinedIcon fontSize="small"/>
            <span className="icon_title">Tableros</span>
          </div>
        </div>

        <div className="center">
          <div className="logo_login">
            <img src={logo_trello} alt="" />
          </div>
        </div>

        <div className="right">
          <div className="icons">
            <AppsIcon />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Boards;
