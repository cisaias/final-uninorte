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
            '46560a239amshdaea87f881e4771p1cfb87jsnd294a5f3d431',
        },
      })
      .then((data) => {
        setPlayers(data.data.response);
      });
  }, [selectedTeam]);

  return [players];
};

export default usePlayers;
