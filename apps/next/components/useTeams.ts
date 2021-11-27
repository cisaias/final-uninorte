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
            '46560a239amshdaea87f881e4771p1cfb87jsnd294a5f3d431',
        },
      })
      .then((data) => {
        setTeams(data.data.response);
      });
  }, [selectedCountry]);

  return [teams];
};

export default useTeams;
