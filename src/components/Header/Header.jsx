import React, { useEffect, useState } from "react";
import "./Header.css";
import AppsIcon from "@material-ui/icons/Apps";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Link } from "react-router-dom";
import logo_header from "../Images/logo_header.png";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

function Header() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("user");
    console.log("este es el token", token);
    setToken(token);
  }, []);

  const classes = useStyles();

  return (
    <div className="header">
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
          <Link to="/boards" className="logo_header">
            <img src={logo_header} alt="" />
          </Link>
        </div>

        <div className="right">
          <div className="icons">
            <AddOutlinedIcon />
          </div>
          <div className="icons">
            <InfoOutlinedIcon />
          </div>
          <div className="icons">
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className="icons_image">
            <Avatar className={classes.orange}>N</Avatar>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
