import { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import axios from 'axios';

const endpoint = 'https://api-football-beta.p.rapidapi.com/countries';
const config = {
  headers: {
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',

    'x-rapidapi-key': '029c1a73c9msh463545a4a5dc887p11ed0bjsn39781a336bc2',

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
