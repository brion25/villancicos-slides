import './Slides.css';

import React from "react";
import PropTypes from 'prop-types'
import { Deck, Slide, Heading } from "spectacle";
import defaultTheme from 'spectacle/lib/themes/default';

const Slides = ({ slides, slideColor, onActive }) => {
  const theme = defaultTheme({
    primary: '#fff'
  })

  return (
    <Deck theme={theme} progress="bar" transition={["slide", "fade", "spin", "zoom"]}>
      {slides.map(slide => {
        if (slide.title) {
          return (
            <Slide bgColor={slide.bgColor || slideColor} onActive={onActive}>
              <Heading textSize="3rem">{slide.title}</Heading>
              {slide.content}
            </Slide>
          )
        }

        return (
          <Slide bgColor={slideColor} onActive={onActive}>{slide}</Slide>
        )
      })}
    </Deck>
  );
};

Slides.propTypes = {
  slides: PropTypes.array.isRequired,
  onActive: PropTypes.func,
  slideColor: PropTypes.string
}

export default Slides;
