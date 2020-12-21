import React, { useState } from "react";
import "./ModalCenter.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "60px",
  },
  paper: {
    backgroundColor: "transparent",
    padding: theme.spacing(2, 4, 3),
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

  const [color, setColor] = useState("AntiqueWhite");

  return (
    <div>
      <div onClick={handleOpen} className="tableros tablero_crear">
        <h4 className="tableros_title2">Crear un nuevo tablero</h4>
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
          {/* <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div> */}
          <div className="main_modal">
            <div className="modal_general">
              <div className="modal_izquierda" style={{ background: color }}>
                <div className="margenes">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Añadir título de tablero"
                  />
                  <p>Espacio de trabajo de Trello</p>
                </div>
              </div>
              <div className="modal_derecha">
                <button
                  className="boton_1"
                  onClick={() => {
                    setColor("AntiqueWhite");
                  }}
                ></button>
                <button
                  className="boton_2"
                  onClick={() => {
                    setColor("DarkOrchid");
                  }}
                ></button>
                <button
                  className="boton_3"
                  onClick={() => {
                    setColor("orange");
                  }}
                ></button>
                <button
                  className="boton_4"
                  onClick={() => {
                    setColor("YellowGreen");
                  }}
                ></button>
                <button
                  className="boton_5"
                  onClick={() => {
                    setColor("purple");
                  }}
                ></button>
                <button
                  className="boton_6"
                  onClick={() => {
                    setColor("pink");
                  }}
                ></button>
                <button
                  className="boton_7"
                  onClick={() => {
                    setColor("yellow");
                  }}
                ></button>
                <button
                  className="boton_8"
                  onClick={() => {
                    setColor("green");
                  }}
                ></button>
                <button
                  className="boton_9"
                  onClick={() => {
                    setColor("red");
                  }}
                ></button>
              </div>
            </div>
            <div className="submodal">
              <div className="modal_abajo">
                <button>Crear tablero</button>
                <DashboardOutlinedIcon fontSize="small" />{" "}
                <span className="plantilla_crear">
                  {" "}
                  Empiece con una plantilla
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
