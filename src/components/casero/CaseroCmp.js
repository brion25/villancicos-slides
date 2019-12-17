import React from "react";

import Slides from "../slides/Slides";
import { formatSlides } from "../../utils";
import { CASEROS } from "../../constants";

const Caseros = () => {
  const slides = formatSlides(CASEROS, "#0a7533");

  return <Slides slides={slides} slideColor="#0cb04a" />;
};

export default Caseros;
