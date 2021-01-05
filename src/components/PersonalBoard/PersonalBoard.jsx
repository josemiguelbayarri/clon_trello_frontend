import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdaptiveHeader from "../Header/Header";
import "./PersonalBoard.css";
import Axios from "axios";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { Avatar } from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

function onDragStart(event) {
  console.log("entrame hasta los huevos");
  event.dataTransfer.setData("text/plain", event.target.id);

  /* event.currentTarget.style.backgroundColor = "yellow"; */
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  event.preventDefault();
  /* const id = event.dataTransfer.getData("text"); */

  const draggableElement = document.getElementById("draggable-1");
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}

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
            <div className="personal_menu_buttons">
              <p>Butler</p>
            </div>
            <div className="personal_menu_buttons">
              <MoreHorizOutlinedIcon fontSize="small" />
              <p>Mostrar menú</p>
            </div>
          </div>
        </div>
        <div className="task">
          <div className="task_board">
            <div className="task_board_object1" onDrag={(event) => {onDragStart(event);}} id="draggable-1" draggable="true">
              draggable
          </div>
        </div>
        
        <div className="task">
          <div className="task_board_object2" onDrag={(event) => {
            onDragStart(event);
          }}
            onDragOver={(event) => {
              onDragOver(event);
            }}
            onDrop={(event) => {
              onDrop(event);
            }}
             id="dropzone" draggable="true">
               draggable
             </div>
        </div>

        <div className="task">
          <div className="task_board_object3" onDrag={(event) => {
            onDragStart(event);
          }}
            onDragOver={(event) => {
              onDragOver(event);
            }}
            onDrop={(event) => {
              onDrop(event);
            }}
             id="dropzone" draggable="true">
               draggable
             </div>

        </div>

        <div className="task">
          <div className="task_board_object4" onDrag={(event) => {
            onDragStart(event);
          }}
            onDragOver={(event) => {
              onDragOver(event);
            }}
            onDrop={(event) => {
              onDrop(event);
            }}
             id="dropzone" draggable="true">
               draggable
             </div>
        </div>

        <div className="task">
          <div className="task_board_object5" onDrag={(event) => {
            onDragStart(event);
          }}
            onDragOver={(event) => {
              onDragOver(event);
            }}
            onDrop={(event) => {
              onDrop(event);
            }}
             id="dropzone" draggable="true">
               draggable
             </div>

        </div>


      </div>
       
      </div>
    </div>
  );
}

export default PersonalBoard;


{/* <div class="example-parent">
<div class="example-origin">
  <div onDrag={(event) => {onDragStart(event);}}
    id="draggable-1" 
    class="example-draggable"
    draggable="true"
  >
    draggable
  </div>
</div>

<div
onDrag={(event) => {
  onDragStart(event);
}}
  onDragOver={(event) => {
    onDragOver(event);
  }}
  onDrop={(event) => {
    onDrop(event);
  }}
  class="example-dropzone" id="dropzone" draggable="true"
>
  <div onDrag={(event) => {onDragStart(event);}}
    id="draggable-1"
    class="example-draggable"
    draggable="true"
  >
    draggable
  </div>
</div>
<div
onDrag={(event) => {
  onDragStart(event);
}}
  onDragOver={(event) => {
    onDragOver(event);
  }}
  onDrop={(event) => {
    onDrop(event);
  }}
  class="example-dropzone" id="dropzone" draggable="true"
>
  dropzone{" "}
</div>
</div> */}