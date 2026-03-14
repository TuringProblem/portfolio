export type Color =
  | "main"
  | "secondary"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "purple"
  | "pink"
  | "orange"
  | "gray"
  | "black"
  | "white";

export type GetColor = (color: Color) => string;
