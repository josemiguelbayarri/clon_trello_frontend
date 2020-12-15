import React from "react";
import Header from "../Header/Header";
import "./Boards.css";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

function Boards() {
  return (
    <div className="boards">
      <Header />
      <div className="boards_general">
        <div className="boards_left">
          <div className="caja_tablero">
            <span className="icon_img">
              <DashboardOutlinedIcon fontSize="small" />
            </span>
            <span className="icon_title2">Tableros</span>
          </div>
        </div>
        <div className="boards_center">
          <h2 className="tablero_title">Tableros personales</h2>
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
          </div>
        </div>
        <div className="boards_right"></div>
      </div>
    </div>
  );
}

export default Boards;
