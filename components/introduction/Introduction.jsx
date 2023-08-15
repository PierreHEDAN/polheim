import React from 'react';
import classnames from 'classnames';
import styles from './Introduction.module.scss';

const Introduction = () => (
  <div className={styles.container} id="expedition">
    <div className={styles.content}>
      <img className={styles.badge} src="./assets/images/polheimbadge.png" alt="Expedition Badge" />
      <div className={styles.paragraph}>
        <div className={styles.title}>
          <h4 className={classnames('primary', styles.orange)}>
            NOTRE EXPÉDITION
            {' '}
            <b>POLHEIM</b>
          </h4>
        </div>
        <p className="primary">
          L’expédition
          {' '}
          <b>POLHEIM</b>
          {' '}
          est l’entreprise d’une aventure folle. Atteindre le Pôle Sud en autonomie et sans moyen de traction depuis les côtes de l’Antarctique, une expédition de 1130 kilomètres sur plus de 50 jours dans des conditions extrêmes.
        </p>
      </div>
    </div>
  </div>
);

export default Introduction;
