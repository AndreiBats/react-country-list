import { ICountry } from "../types";

export const transformCountries = (countries: any[]): ICountry[] =>
  countries.map((country) => ({
    flag: country.flags.svg,
    name: country.name.common,
    capital: country.capital[0],
    region: country.region,
    area: country.area,
    population: country.population,
  }));
