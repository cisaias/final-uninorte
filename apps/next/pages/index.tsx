import styles from './index.module.scss';
import Link from 'next/link';
import {Ui} from '@final-uninorte/ui'
import Countries from '../components/countries/countries';
import { request, gql } from 'graphql-request'
import { IndexProps, TeamsProps } from '@final-uninorte/types';
import Team from '../components/teams/teams';


export function Index(props: IndexProps, prop:TeamsProps) {
  const {countries} = props;
  const {teams}= prop;
 return (
    <div className={styles.main}>
      <Ui title="Bienvenido rey" showtitle={true}/>
      <Link href="/about"> Nosotros
      </Link>
      <div className={styles.section}>
        <Countries  countries={countries} />
        <Team teams={teams}/>
      </div>
      
     </div>
  );
}

export default Index;
