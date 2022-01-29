import classnames from 'classnames';
import styles from './Introduction.module.scss';

const Introduction = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <img className={styles.badge} src="./assets/images/polheimbadge.png" alt="Expedition Badge" />
      <div className={styles.paragraph}>
        <div className={styles.title}>
          <h4 className={classnames("primary", styles.orange)}>NOTRE EXPÉDITION <b>POLHEIM</b></h4>
        </div>
        <p className="primary">
          Inspirée par les valeurs de la conquête du Pôle Sud, l’expédition Polheim est l’entreprise d’une aventure folle. Atteindre le 90° Sud en autonomie, seul et sans moyen de traction depuis les côtes de l’Antarctique, une expédition de 650 kilomètres sur plus de 40 jours dans des conditions extrêmes. 
          <br />
          <br />
          Sortie initialement de la tête d’un petit breton ambitieux, sans réelle expérience et sans doute un peu fou, cette idée a su grandir avec lui et devenir aujourd’hui un vrai projet sérieux et structuré.
        </p>
      </div>
    </div>
  </div>
);

export default Introduction;
