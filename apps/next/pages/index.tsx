import styles from './index.module.scss';
import Link from 'next/link';
import { Ui } from '@final-uninorte/ui';
import Countries from '../components/countries/countries';
import { IndexProps } from '@final-uninorte/types';
import Team from '../components/teams/teams';
import Players from '../components/players/players';
import { useState } from 'react';

export function Index({ countries, teams, players }: IndexProps) {
  const [selectedCountry, setselectedCountry] = useState('');
  const [selectedTeam, setselectedTeam] = useState('');
  function changeCountry(country: string) {
    setselectedCountry(country);
  }
  function changeTeam(teamCode: string) {
    setselectedTeam(teamCode);
  }
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <Ui title="Futbol Pro - UniNorte" showtitle={true} />
      </nav>
      <section className={styles.mainsection}>

        <div className={styles.section}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Paises</h1>
          </div>
          <div className={styles.back}>
            <Countries countries={countries} setCountry={changeCountry} />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Equipos</h1>
          </div>
          <div className={styles.back}>
            <Team teams={teams} selectedCountry={selectedCountry} setTeam={changeTeam} />
          </div>
        </div>
        
        <div className={styles.section}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Jugadores</h1>
          </div>
          <div className={styles.back}>
            <Players players={players} selectedTeam={selectedTeam} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
