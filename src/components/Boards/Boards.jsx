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
            <DashboardOutlinedIcon fontSize="small" />
            <span className="icon_title2">Tableros</span>
          </div>
        </div>
        <div className="boards_center">soy el centro</div>
        <div className="boards_right">soy la derecha</div>
      </div>
    </div>
  );
}

export default Boards;
