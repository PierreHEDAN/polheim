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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Vel cumque aspernatur doloribus amet inventore dignissimos in eligendi quam commodi fugiat.
        </p>
      </div>
    </div>
  </div>
);

export default Introduction;
