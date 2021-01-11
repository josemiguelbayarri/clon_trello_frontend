import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdaptiveHeader from "../Header/Header";
import "./PersonalBoard.css";
import Axios from "axios";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ModalBoard from "../ModalBoard/ModalBoard";
import { Avatar } from "@material-ui/core";


function PersonalBoard() {
  const { id } = useParams();

  const [personalBoards, setPersonalBoards] = useState("");

  useEffect(() => {
    Axios.get(`http://localhost:3000/boards/board/` + id).then((res) => {
      const personalBoards = res.data;
      setPersonalBoards(personalBoards);
      console.log(personalBoards);
    });
  }, []);

  return (
    <div className="personal_boards">
      <div
        className="personal_main"
        style={{ background: personalBoards?.color }}
      >
        <AdaptiveHeader />

        <div className="personal_menu">
          <div className="personal_menu_left">
            <div className="personal_menu_buttons">
              <DashboardOutlinedIcon fontSize="small" />
              <p>Tablero</p>
            </div>
            <div className="personal_menu_buttons">
              <h1>{personalBoards?.name}</h1>
            </div>
            <div className="personal_menu_buttons">
              <StarBorderOutlinedIcon fontSize="small" />
            </div>
            <div className="personal_menu_buttons">
              <p>Espacio de trabajo de trello free</p>
            </div>
            <div className="personal_menu_buttons">
              <p>Visible para el equipo</p>
            </div>
            <div className="personal_menu_buttons_avatar">
              <span className="personal_board_avatar">
                <Avatar>N</Avatar>
              </span>
            </div>
            <div className="personal_menu_buttons">
              <p>invitar</p>
            </div>
          </div>
          <div className="personal_menu_right">
            <ModalBoard/>
            
          </div>
        </div>

        <div className="main_task">
          <div className="task">soy el task uno</div>

          <div className="task">soy el task dos</div>

          <div className="task">soy el task tres</div>

          <div className="task">soy el task cuatro</div>

          <div className="task">soy el task cuatro</div>
        </div>
      </div>
    </div>
  );
}

export default PersonalBoard;
