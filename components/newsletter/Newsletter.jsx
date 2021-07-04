import { useState } from 'react';
import styles from './Newsletter.module.scss';
import { Button, Input } from '../utils';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.container}>
      <h4 className="secondary">Newsletter</h4>
      <h4 className="primary">Vous voulez voir l'avancée de <b>l’expédition ?</b></h4>
      <form className={styles.form} name="contact" method="POST" data-netlify="true">
        <div className={styles.input}>
          <Input type="email" value={email} placeholder="Email" onChange={(value) => setEmail(value.target.value)} />
          <input type="hidden" name="form-name" value="contact" />
        </div>
        <div className={styles.button}>
          <Button type="primary" title="S'inscrire" />
        </div>
      </form>
    </div>
  )
};

export default Newsletter;
