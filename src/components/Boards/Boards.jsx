import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Boards.css";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ModalCenter from "../ModalCenter/ModalCenter";
import Axios from "axios";
import { Link } from "react-router-dom";

function Boards() {//función boards
  const userId = localStorage.getItem("userId");//guardamos en una variable llamada userId el userId que cogemos del localStorage
  const [boards, setBoards] = useState([]);//y aqui es donde se guardan los boards

  useEffect(() => {//cuando carga la pagina se hace automaticamente esta funcion mediante el useEffect
     Axios.get(`http://localhost:3000/boards/`+ userId).then((res) => {//hacemos un llamado al endpoint del backend y le pasamos el id de usuario para que nos devuelva todas las boards que tiene ese usuario
      const boards = res.data;//lo que sacas de hacer la peticion del endpoint
      setBoards(boards);// y lo guardas en la variable que se muestra en el usestate de arriba
      console.log(boards);
    });
  }, []);

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
            {boards?.map((board) => (//hacemos un mapeo de todas las boards para que se vayan pintando 
              <Link className="ancla_personal_board" to={"/board/" + board.id}>
                <div className="tableros" style={{ background: board.color }}>
                  <h4 className="tableros_title">{board.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boards;
