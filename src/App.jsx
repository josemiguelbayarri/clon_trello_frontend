import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
