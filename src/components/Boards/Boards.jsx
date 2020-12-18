import React from "react";
import Header from "../Header/Header";
import "./Boards.css";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ModalCenter from "../ModalCenter/ModalCenter";


function Boards() {
  return (
    <div className="boards">
      <Header />
      <div className="boards_general">
        <div className="boards_left">
          <div className="caja_tablero">
            <DashboardOutlinedIcon fontSize="small" />

            <span className="icon_title2">Tableros</span>
          </div>
          <div className="caja_tablero2">
            <DashboardOutlinedIcon fontSize="small" />

            <span className="icon_title2">Plantillas</span>
          </div>
          <div className="caja_tablero2">
            <DashboardOutlinedIcon fontSize="small" />

            <span className="icon_title2">Inicio</span>
          </div>
          <div className="equipos1">
            <p>Equipos</p>
          </div>
          <div className="equipos2">
            <AddOutlinedIcon color="action" fontSize="small" />

            <span className="icon_title2">Cree un equipo</span>
          </div>
        </div>
        <div className="boards_center">
          <div className="titulo_tableros">
            <AddOutlinedIcon color="action" />
            <span className="tablero_title">Creación de Nuevo Tablero</span>
          </div>
          <ModalCenter />
          <div className="titulo_tableros">
            <PersonOutlineOutlinedIcon color="action" />
            <span className="tablero_title">Tableros personales</span>
          </div>

          <div className="main_tableros">
            <div className="tableros">
              <h4 className="tableros_title">Web Development</h4>
            </div>
            <div className="tableros">
              <h4 className="tableros_title">Web Development</h4>
            </div>
            <div className="tableros">
              <h4 className="tableros_title">Web Development</h4>
            </div>
            <div className="tableros">
              <h4 className="tableros_title">Web Development</h4>
            </div>
            <div className="tableros">
              <h4 className="tableros_title">Web Development</h4>
            </div>
            <div className="tableros">
              <h4 className="tableros_title">Web Development</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boards;
