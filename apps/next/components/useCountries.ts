import { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import axios from 'axios';

const endpoint = 'https://api-football-beta.p.rapidapi.com/countries';
const config = {
  headers: {
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    'x-rapidapi-key': 'bd95782141mshb0f4b1dbfc466a2p1e5684jsnc2fc943ec7d9',
  },
};

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries)
  useEffect(() => {
    axios.get(endpoint, config).then((data) => {
      setCountries(data.data.response);
    });
  }, []);

  return [countries];
};

export default useCountries;
