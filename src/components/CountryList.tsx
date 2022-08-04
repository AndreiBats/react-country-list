import { ICountry } from "../types";
import { Countryitem } from "./CountryItem";

interface IProps {
  countries: ICountry[];
}

export const Countrylist = ({ countries }: IProps) => {
  return (
    <ul className="list-group ">
      {countries.map((country) => {
        return <Countryitem country={country} />;
      })}
    </ul>
  );
};
