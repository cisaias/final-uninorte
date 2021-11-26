import { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import axios from 'axios';

const endpoint = 'https://api-football-beta.p.rapidapi.com/players';
const config = {
  params: {season: '2020', team: '1125'},
  headers: {
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    'x-rapidapi-key': 'bd95782141mshb0f4b1dbfc466a2p1e5684jsnc2fc943ec7d9'
  },
  
};

export const usePlayers = () => {
  const [players, setPlayers] = useState([]);
 useEffect(() => {
    axios.get(endpoint, config).then((data) => {
      setPlayers(data.data.response);
    });
  }, []);
  console.log("ojito",players)
  return [players];
};

export default usePlayers;
