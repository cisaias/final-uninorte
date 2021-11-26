import { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import axios from 'axios';

const endpoint = 'https://api-football-beta.p.rapidapi.com/countries';
const config = {
  headers: {
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    'x-rapidapi-key': 'b37c5fd846msh0d1ba271858cc7dp134b07jsn39ded8cea0d5',
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
