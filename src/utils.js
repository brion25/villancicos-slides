import { TODOS } from "./constants";

export const formatSlides = (slides, lastColor) => [
  ...slides,
  { title: "Todos!", content: TODOS[0], bgColor: lastColor }
];
