import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Choice from "./components/choice/ChoiceCmp";
import Yisus from "./components/yisus/YisusCmp";
import Casero from "./components/casero/CaseroCmp";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/yisus">
          <Yisus />
        </Route>
        <Route path="/casero">
          <Casero />
        </Route>
        <Route path="/">
          <Choice />
        </Route>
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
