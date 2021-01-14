import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdaptiveHeader from "../Header/Header";
import "./PersonalBoard.css";
import Axios from "axios";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ModalTask from "../ModalTask/ModalTask";
import { Avatar } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { util } from "../../util";

function PersonalBoard() {
  const { id } = useParams();
  const [personalBoards, setPersonalBoards] = useState("");
  const [newPlank, setNewPlank] = useState("");
  const [personalPlanks, setPersonalPlanks] = useState([]);
  

  const nickLogged = localStorage.getItem("name");
  /* console.log(nameLogged); */
  

  useEffect(() => {
    Axios.get(`http://localhost:3000/boards/board/` + id).then((res) => {
      const personalBoards = res.data;
      setPersonalBoards(personalBoards);
      console.log(personalBoards);
    });
    Axios.get(`http://localhost:3000/planks/` + id).then((res) => {
      const planks = res.data;
      /* util.arrayPlanks = personalPlanks; */
      /* console.log(personalPlanks);
      console.log(util.arrayPlanks); */
      setPersonalPlanks(planks);
      console.log("soy una lista preciosa" + personalPlanks);
    });
  }, []);

  const deletePlank = (id) => {
    Axios.delete(`http://localhost:3000/planks/` + id).then((res) => {
      const plank = res.data;
      /* personalPlanks = personalPlanks.filter(function(plank) {
        return plank.id !== id; 
      });
      console.log(personalPlanks); */
       
        const newPlanks = personalPlanks.filter(item => item.id !== id)
        setPersonalPlanks(newPlanks);
        console.log(newPlanks);    
      console.log("la lista a sido eliminada" + plank);
    });
  };

  const [datos, setDatos] = useState({
    name: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const keyPressed = ({ key }) => {
    // Capture search on Enter key
    if (key === "Enter") {
      onSubmit()
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const plank = {
      name: datos.name,
      boardId: id,
      /* userId: userId, */
    };

    Axios.post("http://localhost:3000/planks/create", plank).then((res) => {
      const newPlank = res.data;
      setNewPlank(newPlank);
      console.log("lista creada: ", newPlank);
      setPersonalPlanks((personalPlanks) => personalPlanks.concat(newPlank));
    });
  };

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
                <Avatar>{nickLogged.charAt(0)}</Avatar>
              </span>
            </div>
            <div className="personal_menu_buttons">
              <p>invitar</p>
            </div>
          </div>
          <div className="personal_menu_right">
            <form onSubmit={onSubmit}>
            <div className="new_plank">
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                required
                placeholder="Introduzca el título de la lista..."
                onKeyPress = {keyPressed}
              />
              
                <button type="submit"><AddOutlinedIcon fontSize="large" /></button>

              </div>
            </form>
          </div>
        </div>

        <div className="main_plank">
          {personalPlanks?.map((plank) => (
            <div className="plank" key={plank.id}>
              <div className="plank_div">
                <h2 className="plank_name">{plank.name}</h2>
                <span onClick={() => deletePlank(plank.id)}>
                  <CloseOutlinedIcon fontSize="small" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalBoard;
