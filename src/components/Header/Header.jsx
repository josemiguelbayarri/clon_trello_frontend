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
import PropTypes from "prop-types";
import { withRouter } from "react-router";

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

class Header extends React.Component {
  /* const [token, setToken] = useState(""); */

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  /*  useEffect(() => {
    const token = localStorage.getItem("user");
    console.log("este es el token", token);
    /* setToken(token); 
  }, []); */

  render() {
    /* const classes = useStyles(); */

    const { match, location, history } = this.props;

    const headerColor =
      location.pathname === "/boards"
        ? { background: "#026AA7" }
        : { background: "rgba(1,1,1,0.1)"};

    
    return (
      <div className="header">
        <header className="cabecera" style={headerColor}>
          <div className="left">
            <div className="icons" style={headerColor}>
              <AppsIcon fontSize="small" />
            </div>
            <div className="icons" style={headerColor}>
              <HomeOutlinedIcon fontSize="small" />
            </div>
            <div className="icons" style={headerColor}>
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
            <div className="icons" style={headerColor}>
              <AddOutlinedIcon />
            </div>
            <div className="icons" style={headerColor}>
              <InfoOutlinedIcon />
            </div>
            <div className="icons" style={headerColor}>
              <NotificationsNoneOutlinedIcon />
            </div>
            <div className="icons_image">
              <Avatar>N</Avatar>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const AdaptiveHeader = withRouter(Header)
export default AdaptiveHeader;
