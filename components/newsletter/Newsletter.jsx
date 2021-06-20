import styles from './Newsletter.module.scss';
import { Button, Input } from '../utils'

const Newsletter = () => (
  <div className={styles.container}>
    <h4 className="secondary">Newsletter</h4>
    <h4 className="primary">Vous voulez voir l'avancée de <b>l’expédition ?</b></h4>
    <div className={styles.form}>
      <div className={styles.input}>
        <Input type="email" value="" placeholder="Email" />
      </div>
      <div className={styles.button}>
        <Button type="primary" title="S'inscrire" />
      </div>
    </div>
  </div>
);

export default Newsletter;
