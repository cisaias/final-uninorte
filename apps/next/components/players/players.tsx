/* eslint-disable @next/next/no-img-element */

import { usePlayers } from '../usePlayers';
import { PlayerProps } from '@final-uninorte/types';
/* eslint-disable-next-line */

export function Players(props: PlayerProps) {

  const [playersArray] = usePlayers(props.selectedTeam);

  const players = playersArray ? playersArray : props.players;

  if (!props.selectedTeam) {
    return (
      <div>
         <p> Please select a team</p>
      </div>
    );
  }
  return (
    <div>

      {players && players.length > 0 ? (
        players.map(({ player }) => (
          <li key={player.id}>
            {player.name}
            <img src={`${player.photo}`} alt="photo jugador" />
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}

export default Players;
