/* eslint-disable @next/next/no-img-element */
import styles from './countries.module.scss';
import { useCountries } from '../useCountries';
import { IndexProps } from '@final-uninorte/types';

/* eslint-disable-next-line */
//export interface CountriesProps {}

export function Countries(props: IndexProps) {
  const [countriesArray] = useCountries();
  const countries = props.countries ? props.countries : countriesArray;

  return (
    <div>
      <h1>Countries</h1>
      {countries && countries.length > 0 ? (
        countries.map(({ code, name, flag }) => (
          <li className={styles.item} key={code}>
            {code} {name}{' '}
            <img
              className={styles.picture}
              src={`${flag}`}
              alt="foto de bandera"
            />
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}

export default Countries;
