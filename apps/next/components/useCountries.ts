import { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import axios from 'axios';

const endpoint = 'https://api-football-beta.p.rapidapi.com/countries';
const config = {
  headers: {
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    'x-rapidapi-key': '7497086860msh9da42ebcfd16ecdp1f4cdfjsn8f3ee5b0c154',
  },
};

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get(endpoint, config).then((data) => {
      setCountries(data.data.response);
    });
  }, []);

  return [countries];
};

export default useCountries;
