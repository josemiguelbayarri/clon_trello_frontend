import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
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
      <Header />
      <div
        className="personal_main"
        style={{ background: personalBoards?.color }}
      >
        <h1>{personalBoards?.name}</h1>
      </div>
    </div>
  );
}

export default PersonalBoard;
