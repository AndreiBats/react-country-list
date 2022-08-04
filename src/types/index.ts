export interface ICountry {
  flag: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

export type BadgeLabel = "area" | "population";

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
  Light = "light",
  Dark = "dark",
}
