export interface ICountry {
  flag: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

interface IFlag {
  png: string;
  svg: string;
}

interface ILanguage {
  official: string;
  common: string;
}

interface INative {
  [key: string]: ILanguage;
}

interface IName {
  common: string;
  official: string;
  nativeName: INative;
}

export interface ICountryList {
  flags: IFlag;
  name: IName;
  capital: string[];
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
