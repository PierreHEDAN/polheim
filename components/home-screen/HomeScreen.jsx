import styles from './HomeScreen.module.scss';

const HomeScreen = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.socialMedias}>
        <a href="">fa</a>
        <a href="">go</a>
        <a href="">insta</a>
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
