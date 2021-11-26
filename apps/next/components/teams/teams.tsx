/* eslint-disable @next/next/no-img-element */
import styles from './teams.module.scss';
import { useTeams } from '../useTeams';
import { IndexProps } from '@final-uninorte/types';

/* eslint-disable-next-line */

export function Teams(props: IndexProps) {
  const [teamsArray] = useTeams();
  const teams = props.teams ? props.teams : teamsArray;
  return (
    <div>
      {teams && teams.length > 0 ? (
        teams.map(({ team }) => (
          <li key={team.id} className={styles.item}>
            {team.country} - {team.name}{' '}
            <img
              className={styles.picture}
              src={`${team.logo}`}
              alt="bandera"
            />
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}

export default Teams;
