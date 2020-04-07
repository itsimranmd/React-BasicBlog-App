import React from "react";
import "./styles.css";
import { Button } from "reactstrap";
import Header from "./Components/Header";
import { Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={routes.home} />
        <Home />
      </Switch>
    </div>
  );
}
