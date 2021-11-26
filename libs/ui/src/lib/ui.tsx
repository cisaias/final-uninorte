import styles from './ui.module.scss';
import {UiProps} from '@final-uninorte/types'
/* eslint-disable-next-line */


export function Ui(props: UiProps) {
  const {title,showtitle} = props;
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{showtitle && title}</h1>
    </div>
  );
}

export default Ui;
