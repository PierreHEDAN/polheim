import styles from './Introduction.module.scss';

const Introduction = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <img className={styles.badge} src="./assets/images/polheimbadge.png" alt="Expedition Badge" />
      <div className={styles.paragraph}>
        <div className={styles.title}>
          <h4 className="primary">Qu’est-ce que <b>l’expédition POLHEIM ?</b></h4>
          <span className="secondary uppercase"><b>De Pierre Hedan</b></span>
        </div>
        <p className="primary">
          « L’entreprise d’une aventure folle, l’atteinte du Pôle Sud, seul, sans assistance et en totale autonomie depuis les côtes de l’Antarctique. »
          Une expédition retraçant le parcours de Roald Amundsen, le premier Homme à avoir atteint le pôle en 1911. Un périple en solitaire de quarante jours mis à disposition de la science et de l’éducation.
          <br />
          Le but : promouvoir et informer sur ce continent méconnu qu’est l’Antarctique en le rendant accessible aux yeux de tous.
        </p>
      </div>
    </div>
  </div>
);

export default Introduction;
