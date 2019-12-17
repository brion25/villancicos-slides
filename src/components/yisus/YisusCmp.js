import "./Yisus.css";

import React from "react";

import Slides from "../slides/Slides";
import { formatSlides } from "../../utils";
import { YISUS } from "../../constants";

const slides = formatSlides(YISUS, "#a92921");
const Yisus = () => {
  return (
    <div>
      <Slides slides={slides} slideColor="#ff3a2f" />
    </div>
  );
};

export default Yisus;
