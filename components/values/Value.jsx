import styles from './Value.module.scss';

export const Card1 = () => (
  <div className={styles.card}>
    <h3 className={styles.title}>INNOVER</h3>
    <p>
      La recherche médicale, l’optimisation des ressources et des énergies, l’innovation technique... Évoluer en Antarctique là où toute action est limitée et engagée.
    </p>
    <div className={styles.logo}>
      <img className={styles.logoimg} src="./assets/images/values/innover.svg" />
    </div>
  </div>
);

export const Card2 = () => (
  <div className={styles.card}>
    <h3 className={styles.title} style={{ color: '#73C3D0' }} >TRANSMETTRE</h3>
    <p style={{ color: '#73C3D0' }}>
      Programmes éducatifs, interventions en écoles supérieures, conférences, ateliers en entreprises… Transmettre les enjeux et être moteur de la sobriété énergétique.
    </p>
    <div className={styles.logo} style={{ backgroundColor: '#73C3D0' }}>
      <img className={styles.logoimg} src="./assets/images/values/transmettre.svg" />
    </div>
  </div>
);

export const Card3 = () => (
  <div className={styles.card}>
    <h3 className={styles.title} style={{ color: '#00374B' }}>RASSEMBLER</h3>
    <p style={{ color: '#00374B' }}>
      Médecins, diététiciens, graphistes, ingénieurs, étudiants, bénévoles… Construire ensemble et rassembler autour d’un projet aux convictions humaines.
    </p>
    <div className={styles.logo} style={{ backgroundColor: '#fff' }}>
      <img className={styles.logoimg} src="./assets/images/values/ampoule.svg" />
    </div>
  </div>
);

const Values = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.paragraph}>
        <h3>NOS <b>VALEURS</b></h3>
        <h4>Ensemble, innovons et préparons</h4>
        <h4>le monde de demain</h4>
      </div>
      <div className={styles.cards}>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  </div>
);

export default Values;
