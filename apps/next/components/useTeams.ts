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
            '7497086860msh9da42ebcfd16ecdp1f4cdfjsn8f3ee5b0c154',
        },
      })
      .then((data) => {
        setTeams(data.data.response);
      });
  }, [selectedCountry]);

  return [teams];
};

export default useTeams;
