import styles from './teams.module.scss';
import { useTeams } from '../useTeams';
import { TeamsProps } from '@final-uninorte/types';

/* eslint-disable-next-line */

export function Teams(props: TeamsProps) {
  const [teamsArray] = useTeams();
  const teams = props.teams ? props.teams : teamsArray;
  return (
    <div>
      <h1>Welcome to Teams!</h1>
      {teams && teams.length > 0 ? (
        teams.map(({ team }) => ( 
          <li key={team.id} className={styles.item}>
            {team.country} - {team.name}{' '}
            <img className={styles.picture} src={`${team.logo}`} alt="bandera" />
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}

export default Teams;
