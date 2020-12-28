import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdaptiveHeader from "../Header/Header";
import "./PersonalBoard.css";
import Axios from "axios";

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
              <p>Tablero</p>
            </div>
            <div className="personal_menu_buttons">
              <h1>{personalBoards?.name}</h1>
            </div>
            <div className="personal_menu_buttons">
              <p>estrella</p>
            </div>
            <div className="personal_menu_buttons">
              <p>Espacio de trabajo de trello free</p>
            </div>
            <div className="personal_menu_buttons">
              <p>Visible para el equipo</p>
            </div>
            <div className="personal_menu_buttons">
              <p>icono</p>
            </div>
            <div className="personal_menu_buttons">
              <p>invitar</p>
            </div>
          </div>
          <div className="personal_menu_right">
            <div className="personal_menu_buttons"><p>Butler</p></div>
            <div className="personal_menu_buttons"><p>Mostrar menú</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalBoard;
