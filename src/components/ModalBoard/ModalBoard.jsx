import React, { useState } from "react";
import "./ModalBoard.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: "100px",
    marginRight: "8px",
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

  const history = useHistory();

  const userId = localStorage.getItem("userId");

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

    const board = {
      name: datos.name,

      userId: userId,
    };

    Axios.post("http://localhost:3000/boards/create", board).then((res) => {
      const newBoard = res.data;
      history.push("/board/" + newBoard.id);
      /*  console.log("tablero creado: ", newBoard); */
    });
  };

  return (
    <div>
      <div onClick={handleOpen} className="modal_board_button">
        <AddOutlinedIcon fontSize="small" />
        <p>Añada otra lista</p>
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
          <div className="modal_board">
            <input
              type="text"
              name=""
              placeholder="Introduzca el título de la lista..."
            />
            <div className="modal_button">
              <button type="submit">Añadir lista</button>
              <span onClick={handleClose}><CloseOutlinedIcon fontSize="medium" /></span>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
