import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ModalTask.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Axios from "axios";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { util } from "../../util";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams();

  /* const userId = localStorage.getItem("userId"); */

  const [datos, setDatos] = useState({
    name: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const task = {
      description: datos.description,
      plankId: id, 
    };

    Axios.post("http://localhost:3000/tasks/create", task).then((res) => {
      const newTask = res.data;
      
      
      handleClose();
      console.log("tarea creada: ", newTask);
    });
  };

  return (
    <>
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
            <form onSubmit={onSubmit}>
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
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
    </>
  );
}
