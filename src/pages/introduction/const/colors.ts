/**
 * @author { @Override }
 * @Since 2025-11-26 : @16:31
 **/


export type Colors = "intro"
  | "main"
  | "legend"
  | "blue"
  | "yellow"
  | "purple"
  | "orange"
  | "white"
  | "black";

export const ColorMap: Record<Colors, string> = {
  "intro": "var(--accent)",
  "main": "var(--green-divider)",
  "legend": "var(--legend)",
  "blue": "var(--blue-divider)",
  "yellow": "var(--yellow-divider)",
  "purple": "var(--purple-divider)",
  "orange": "var(--orange-divider)",
  "white": "var(--white-divider)",
  "black": "var(--black-divider)",
};
