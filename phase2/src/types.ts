export enum AstralObject {
  Polyanet,
  Soloon,
  Cometh,
}

export enum SoloonColor {
  Blue = "blue",
  Red = "red",
  Purple = "purple",
  White = "whites",
}

export enum ComethDirection {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

export type GalaxyCell =
  | { type: AstralObject.Polyanet }
  | { type: AstralObject.Soloon; color: SoloonColor }
  | { type: AstralObject.Cometh; direction: ComethDirection }
  | null;
