import styles from './HomeScreen.module.scss';

const HomeScreen = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.socialMedias}>
        <a href="">
          <img src="./assets/images/facebook.png" alt="Facebook" />
        </a>
        <a href="">
          <img src="./assets/images/google.png" alt="Google" />
        </a>
        <a href="">
          <img src="./assets/images/instagram.png" alt="Instagram" />
        </a>
        <div className={styles.separator} />
      </div>
      <h1 className={`${styles.title} white uppercase`}>Polheim Expedition</h1>
      <span className={`${styles.subTitle} uppercase`}>
        <h2 className="secondary">2023</h2>
        <h2 className="primary">Pierre Hedan</h2>
      </span>
    </div>
    <img src="./assets/images/homescreen.png" alt="Beautiful photography of antartica" />
  </div>
);

export default HomeScreen;
