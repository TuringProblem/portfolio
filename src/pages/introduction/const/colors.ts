import { match } from "ts-pattern";

export type Colors = "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "orange"
  | "white"
  | "black"
  | undefined;


export const convertColor = (color: Colors): string => {
  console.log(`Hey! We are actually calling this function: ${color}`);

  return match(color)
    .with("red", () => "--red-divider")
    .with("green", () => "--green-divider")
    .with("blue", () => "--white-divider")
    .with("yellow", () => "--white-divider")
    .with("purple", () => "--purple-divider")
    .with("orange", () => "--orange-divider")
    .with("white", () => "--white-divider")
    .with("black", () => "--black-divider")
    .with(undefined, () => "--white-divider")
    .exhaustive()
}



