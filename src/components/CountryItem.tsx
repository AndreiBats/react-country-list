import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

interface IProps {
  country: ICountry;
}

export const Countryitem = ({ country }: IProps) => {
  return (
    <li className="list-group-item">
      <div className="row align-items-start">
        <div className="col">
          <img src={country.flag} alt="flag" width={60} />
        </div>
        <div className="col">{country.name}</div>
        <div className="col">{country.capital}</div>
        <div className="col">{country.region}</div>
        <div className="col">
          <Badge value={country.area} type="area" color={Color.Primary} />
        </div>
        <div className="col">
          <Badge
            value={country.population}
            type="population"
            color={Color.Secondary}
          />
        </div>
      </div>
    </li>
  );
};
