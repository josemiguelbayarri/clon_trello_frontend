import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdaptiveHeader from "../Header/Header";
import "./PersonalBoard.css";
import Axios from "axios";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ModalBoard from "../ModalBoard/ModalBoard";
import { Avatar } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

function PersonalBoard() {
  const { id } = useParams();

  const [personalBoards, setPersonalBoards] = useState("");

  const [personalPlanks, setPersonalPlanks] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3000/boards/board/` + id).then((res) => {
      const personalBoards = res.data;
      setPersonalBoards(personalBoards);
      console.log(personalBoards);
    });
    Axios.get(`http://localhost:3000/planks/` + id).then((res) => {
      const personalPlanks = res.data;
      setPersonalPlanks(personalPlanks);
      console.log("soy una lista preciosa" + personalPlanks);
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
            <ModalBoard />
          </div>
        </div>

        <div className="main_plank">
          {personalPlanks?.map((plank) => (
            <div className="plank">
              <div className="plank_div">
                <h2 className="plank_name">{plank.name}</h2>
                <span>x</span>
              </div>

              <div className="task_button">
                <button type="submit">
                  <AddOutlinedIcon fontSize="medium" />
                  Añada otra tarjeta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalBoard;
