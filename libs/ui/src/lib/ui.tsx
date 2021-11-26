import './ui.module.scss';
import {UiProps} from '@final-uninorte/types'
/* eslint-disable-next-line */


export function Ui(props: UiProps) {
  const {title,showtitle} = props;
  return (
    <div>
      <h1>{showtitle && title}</h1>
    </div>
  );
}

export default Ui;
