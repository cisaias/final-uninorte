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
            '029c1a73c9msh463545a4a5dc887p11ed0bjsn39781a336bc2',
        },
      })
      .then((data) => {
        setPlayers(data.data.response);
      });
  }, [selectedTeam]);

  return [players];
};

export default usePlayers;
