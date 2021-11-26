/* eslint-disable @next/next/no-img-element */
import styles from './teams.module.scss';
import { useTeams } from '../useTeams';
import { TeamProps } from '@final-uninorte/types';
import { useEffect } from 'react';

/* eslint-disable-next-line */

export function Teams(props: TeamProps) {
  const [teamsArray] = useTeams(props.selectedCountry);

  const teams = teamsArray ? teamsArray : props.teams;

  if (!props.selectedCountry) {
    return (
      <div>
        <h1>Welcome to Teams!</h1>
        <p> Please select a country</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome to Teams!</h1>
      {teams && teams.length > 0 ? (
        teams.map(({ team }) => (
          <li key={team.id} className={styles.item}>
            {team.country} - {team.name}{' '}
            <img
              className={styles.picture}
              src={`${team.logo}`}
              alt="bandera"
            />
            <button onClick={() => props.setTeam(team.id)}>
              Select {team.name}
            </button>
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}

export default Teams;
