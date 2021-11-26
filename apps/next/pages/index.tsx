import styles from './index.module.scss';
import Link from 'next/link';
import { Ui } from '@final-uninorte/ui';
import Countries from '../components/countries/countries';
import { IndexProps } from '@final-uninorte/types';
import Team from '../components/teams/teams';
import Players from '../components/players/players';

export function Index(props: IndexProps) {
  const { countries, teams, players } = props;

  return (
    <div className={styles.main}>
      <Ui title="Futbol Pro" showtitle={true} />
      <Link href="/about"> Nosotros</Link>
      <div className={styles.section}>
        <Countries countries={countries} />
        <Team teams={teams} />
        <Players players={players} />
      </div>
    </div>
  );
}

export default Index;
