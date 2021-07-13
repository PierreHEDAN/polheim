import styles from './HomeScreen.module.scss';

const HomeScreen = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.socialMedias}>
        <a href="">
          <img src="./assets/images/facebook-f-brands.svg" alt="Facebook" />
        </a>
        <a href="">
          <img src="./assets/images/google-brands.svg" alt="Google" />
        </a>
        <a href="">
          <img src="./assets/images/instagram-brands.svg" alt="Instagram" />
        </a>
        <div className={styles.separator} />
      </div>
      <h1 className={`${styles.title} white uppercase`}>Polheim Expedition</h1>
      <span className={`${styles.subTitle} uppercase`}>
        <h2 className="secondary">2023</h2>
        <h2 className="primary">Pierre Hedan</h2>
      </span>
    </div>
    <img className={styles.bottomImage} src="./assets/images/homescreen.png" alt="Beautiful photography of antartica" />
  </div>
);

export default HomeScreen;
