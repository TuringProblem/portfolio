export type Colors = "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "orange"
  | "white"
  | "black";

export const ColorMap: Record<Colors, string> = {
  "red": "var(--red-divider)",
  "green": "var(--green-divider)",
  "blue": "var(--blue-divider)",
  "yellow": "var(--yellow-divider)",
  "purple": "var(--purple-divider)",
  "orange": "var(--orange-divider)",
  "white": "var(--white-divider)",
  "black": "var(--black-divider)",
};
