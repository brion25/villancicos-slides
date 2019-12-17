import "./Choice.css";

import React from "react";
import { Link } from "react-router-dom";

const Choice = () => {
  return (
    <div className="jumbotron">
      <h1 class="display-5">Es tiempo de pedir Posada!</h1>
      <p class="lead">
        Elige si eres parte del team "Yisus" o del team "Casero".
      </p>
      <hr class="my-4" />
      <div className="choice">
        <Link to="/yisus">
          <button type="button" className="btn btn-success">
            Team "Yisus"
          </button>
        </Link>
        <Link to="/casero">
          <button type="button" className="btn btn-danger">
            Team "Casero"
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Choice;
