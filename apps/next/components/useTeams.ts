import { useEffect, useState } from 'react';
import axios from 'axios';

const endpoint = 'https://api-football-beta.p.rapidapi.com/teams';

export const useTeams = (selectedCountry: string) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get(endpoint, {
        params: { country: selectedCountry },
        headers: {
          'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
          'x-rapidapi-key':
            '029c1a73c9msh463545a4a5dc887p11ed0bjsn39781a336bc2',
        },
      })
      .then((data) => {
        setTeams(data.data.response);
      });
  }, [selectedCountry]);

  return [teams];
};

export default useTeams;
