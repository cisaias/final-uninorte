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
      <Ui title="Futbol Pro" showtitle={true} />
      <Link href="/about"> Nosotros</Link>
      <div className={styles.section}>
        <Countries countries={countries} setCountry={changeCountry} />
        <Team
          teams={teams}
          selectedCountry={selectedCountry}
          setTeam={changeTeam}
        />
        <Players players={players} selectedTeam={selectedTeam} />
      </div>
    </div>
  );
}

export default Index;
