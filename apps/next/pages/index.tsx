import styles from './index.module.scss';
import Link from 'next/link';
import {Ui} from '@final-uninorte/ui'
import Countries from '../components/countries/countries';
import { request, gql } from 'graphql-request'
import { IndexProps, TeamsProps, PlayerProps } from '@final-uninorte/types';
import Team from '../components/teams/teams';
import Players from '../components/players/players';

export function Index(props: IndexProps, prop: TeamsProps, props2: PlayerProps) {
  const {countries} = props;
  const {teams}= prop;
  const {players}=props2;
 
 return (
    <div className={styles.main}>
      <Ui title="Futbol Pro" showtitle={true}/>
      <Link href="/about"> Nosotros
      </Link>
      <div className={styles.section}>
        <Countries  countries={countries} />
        <Team teams={teams}/>
        <Players players={players}/>
        </div>
     </div>
  );
}

export default Index;
