import styles from './index.module.scss';
import Link from 'next/link';
import {Ui} from '@final-uninorte/ui'
import Countries from '../components/countries/countries';
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.main}>
      <Ui title="Bienvenido rey" showtitle={true}/>
      <Link href="/about"> Nosotros
      </Link>
      <Countries/>
    </div>
  );
}

export default Index;
