import { useEffect, useState } from 'react';
import axios from 'axios';

const endpoint = 'https://api-football-beta.p.rapidapi.com/players';

export const usePlayers = (selectedTeam: string) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get(endpoint, {
        params: { team: selectedTeam, season: '2020' },
        headers: {
          'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
          'x-rapidapi-key':
            '7497086860msh9da42ebcfd16ecdp1f4cdfjsn8f3ee5b0c154',
        },
      })
      .then((data) => {
        setPlayers(data.data.response);
      });
  }, [selectedTeam]);

  return [players];
};

export default usePlayers;
