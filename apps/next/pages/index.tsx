import styles from './index.module.scss';
import Link from 'next/link';
import {Ui} from '@final-uninorte/ui'
import Countries from '../components/countries/countries';
import { request, gql } from 'graphql-request'
import { IndexProps } from '@final-uninorte/types';

const query = gql`
    query {
    countries {
      code
      name
    }
  }
`
export async function getStaticProps() {
  const data = await request('https://countries.trevorblades.com/', query);
  const {countries} = data

  return {
    props: {
      countries
    },
  }
}

export function Index(props: IndexProps) {
  const {countries} = props;
  return (
    <div className={styles.main}>
      <Ui title="Bienvenido rey" showtitle={true}/>
      <Link href="/about"> Nosotros
      </Link>
      <Countries  countries={countries}/>
    </div>
  );
}

export default Index;
