import { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import axios from 'axios';

const endpoint = 'https://api-football-beta.p.rapidapi.com/countries';
const config = {
  headers: {
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',

    'x-rapidapi-key': '46560a239amshdaea87f881e4771p1cfb87jsnd294a5f3d431',

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
