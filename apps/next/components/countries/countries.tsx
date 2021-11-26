import './countries.module.scss';
import {useCountries} from '../useCountries';
/* eslint-disable-next-line */
export interface CountriesProps {}

export function Countries(props: CountriesProps) {
  const [ countries ] = useCountries();
  //const countries = props.countries ? props.countries : countriesArray;

  return (
    <div>
       <h1>Countries</h1>
      {
        countries && countries.length > 0 
        ?
        countries.map(({code, name}) => <li key={code}>{code} - {name}</li>)
        :
        <p>no data</p>
      }
    </div>
  );
}

export default Countries;
