import styles from './Skills.module.scss';
import HeaderFigure from './HeaderFigure';
import { Card1, Card2, Card3 } from './Card';

const Skills = () => (
  <>
    <div className={styles.headerContainer}>
        <img src="./assets/images/trace.svg" />
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>ACCÉLÉRATEUR<br /><b>DE COMPÉTENCES</b></h3>
        </div>
        <p>
          La vocation de l’Expédition POLHEIM est la montée en compétence d’un groupe à travers une aventure commune que nous pourrions comparer à un voyage dans l’espace.
        </p>
        <div className={styles.cards}>
          <div className={styles.cardsContainer}>
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Skills;
