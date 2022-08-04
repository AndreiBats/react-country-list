import { Countrylist } from "./components/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers";

export const App = () => {
  return (
    <div className="container">
      <h1 className="m-4">Country List</h1>
      <Countrylist countries={transformCountries(countries)} />
    </div>
  );
};
