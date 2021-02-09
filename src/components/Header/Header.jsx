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
import { useHistory} from "react-router-dom";



const logout = () => {//funcion logout para quitar el usuario
  
  localStorage.removeItem("authToken");//eliminamos el token del localstorage cuando ejecutamos la funcion logout
  
}

class Header extends React.Component {
  /* const [token, setToken] = useState(""); */
  
  
  static propTypes = {//esto pertenecio al header reactivo que lo saque de stackoverflow
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  
  
  

  
  render() {
    /* const classes = useStyles(); */
    const nickLogged = localStorage.getItem("name");//cogemos la propiedad name de localstorage y la guardamos dentro de la variable nicklogged que la usaremos en el html




    const { match, location, history } = this.props;

    const headerColor = //en esta variable le pasamos una ruta
      location.pathname === "/boards" //que es esta y le indicamos que si estamos en esta ruta
        ? { background: "#026AA7" } //el background del header sea este 
        : { background: "rgba(1,1,1,0.1)"};//y si no que sea este otro

    
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
              <Avatar>{nickLogged.charAt(0)}</Avatar> {/* dentro del avatar a nicklogged le pasamos la propiedad charAt en la poscicion 0 para coger la primera letra del nombre del usuario y pintarla */}
            </div>
            <div className="logout">
              <button onClick={() => logout()}><Link to="/">salir</Link></button> {/* aqui ejecutamos la funcion logout con un evento onClick que redirije auromaticamente fuera con el link to */}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const AdaptiveHeader = withRouter(Header)//parte de la funcionalidad del header reactivo
export default AdaptiveHeader;
