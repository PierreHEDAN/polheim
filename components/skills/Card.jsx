import classnames from 'classnames';
import styles from './Skills.module.scss';
import Number1 from './Number1';
import Number2 from './Number2';
import Number3 from './Number3';
import Fusee from './Fusee';
import Computer from './Computer';

export const Card1 = () => (
  <div className={styles.card}>
    <div className={styles.number}>
      <Number1 number="1" />
    </div>
    <div className={styles.logo}>
      <Fusee />
    </div>
    <p>
      Ensemble, construisons nos propulseurs, donnons le meilleur de nous-mêmes pour décoller vers nos rêves, nos objectifs. Quelque soit la taille ou l’avancement de notre projet, <span className="secondary">nous avons besoin des compétences de chacun</span> pour le rendre opérationnel. À travers l’<span className="secondary">Expédition POLHEIM</span>, chacun participe à la fabrication de la fusée en direction du Pôle Sud mais aussi prépare sa propre fusée.
    </p>
  </div>
);

export const Card2 = () => (
  <div className={classnames(styles.card, styles.card2)}>
    <div className={styles.number}>
      <Number2 />
    </div>
    <p>
      La fusée terminée, il faut l’installer sur le pas de tir. Même si dans notre cas, la capsule n’accueille qu’un astronaute, l’équipe au sol est vitale. Conditions météo, suivi médical, psychologique et autres données essentielles, les opérateurs au sol sont là pour veiller au bon déroulement de la mission.
    </p>
    <div className={styles.logo}>
      <img src="./assets/images/persos.svg" />
    </div>
  </div>
);

export const Card3 = () => (
  <div className={classnames(styles.card, styles.card3)}>
    <div className={styles.number}>
      <Number3 number="3" />
    </div>
    <div className={styles.logo}>
      <img src="./assets/images/fuseemoon.svg" />
    </div>
    <p>
      Arrivé sur son objectif, l’astronaute n’est pas le seul vainqueur de cette aventure. Toute l’<span className="secondary">équipe</span> ayant travaillé sur cette fusée peut être <span className="secondary">fière de son travail</span>. Dès lors, il faudra célébrer cette réussite collective et préparer le retour de la capsule.
    </p>
  </div>
);
