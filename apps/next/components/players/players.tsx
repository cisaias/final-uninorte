import styles from './players.module.scss';
import { usePlayers } from '../usePlayers';
import { PlayerProps } from '@final-uninorte/types';
/* eslint-disable-next-line */


export function Players(props: PlayerProps) {
  const [playersArray] = usePlayers();
  const players = props.players ? props.players : playersArray;
 return (
    <div>
      <h1>Lista de jugadores  </h1>
      
      {players && players.length > 0 ? (
        players.map(({ player }) => ( 
          <li key={player.id} >
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
