import "./Choice.css";

import React from "react";
import { Link } from "react-router-dom";

const Choice = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-5">Es tiempo de pedir Posada!</h1>
      <p className="lead">
        Elige si eres parte del team "Yisus" o del team "Casero".
      </p>
      <hr className="my-4" />
      <div className="choice">
        <Link to="/yisus">
          <button type="button" className="btn btn-danger">
            Team "Yisus"
          </button>
        </Link>
        <Link to="/casero">
          <button type="button" className="btn btn-success">
            Team "Casero"
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Choice;
