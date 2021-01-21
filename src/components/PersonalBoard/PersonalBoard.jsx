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

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function PersonalBoard() {
  const { id } = useParams();
  const [personalBoards, setPersonalBoards] = useState("");
  const [newPlank, setNewPlank] = useState("");
  const [personalPlanks, setPersonalPlanks] = useState([]);
  const [tasks, setTasks] = useState([]);
  
    

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
      setPersonalPlanks(planks);
      console.log("soy una lista preciosa" + personalPlanks);
    });
    Axios.get(`http://localhost:3000/tasks/` + personalPlanks.id).then((res) => {
      const tasks = res.data;
      setTasks(tasks);
      console.log("soy una tarea preciosa" + tasks);
    });
  }, []);

  const deletePlank = (id) => {
    Axios.delete(`http://localhost:3000/planks/` + id).then((res) => {
      const plank = res.data;
      /* personalPlanks = personalPlanks.filter(function(plank) {
        return plank.id !== id; 
      });
      console.log(personalPlanks); */

      const newPlanks = personalPlanks.filter((item) => item.id !== id);
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
      onSubmit();
    }
  };

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

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit2 = (event) => {
    event.preventDefault();

    const task = {
      description: datos.description,
      plankId: personalPlanks.id, 
    };

    Axios.post("http://localhost:3000/tasks/create", task).then((res) => {
      const newTask = res.data;
      handleClose();
      console.log("tarea creada: ", newTask);
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
                  onKeyPress={keyPressed}
                />

                <button type="submit">
                  <AddOutlinedIcon fontSize="large" />
                </button>
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
              <div className="modal_board_button">
                <div onClick={handleOpen} className="task_button">
                  <button type="submit">
                    <AddOutlinedIcon fontSize="medium" />
                    Añada otra tarjeta
                  </button>
                </div>

                <Modal
                  disableEnforceFocus
                  disableAutoFocus
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className="modal_board_task">
                      <form onSubmit={onSubmit2}>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="description"
                          placeholder="Introduzca un título para esta tarjeta..."
                        />
                        <div className="modal_button">
                          <button type="submit">Añadir tarjeta</button>
                          <span onClick={handleClose}>
                            <CloseOutlinedIcon fontSize="medium" />
                          </span>
                        </div>
                      </form>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalBoard;
