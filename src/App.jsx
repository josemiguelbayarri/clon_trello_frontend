import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Boards from "./components/Boards/Boards";
import Login from "./components/Login/Login";
import PersonalBoard from "./components/PersonalBoard/PersonalBoard";
import Register from "./components/Register/Register";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/boards" exact component={Boards} />
        <Route path="/board/:id" exact component={PersonalBoard} />
        {/* <Route path="/:username/boards" exact component={Boards} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
