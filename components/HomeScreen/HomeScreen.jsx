import styles from './HomeScreen.module.scss';

const HomeScreen = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.socialMedias}>
        <a href="">Test</a>
      </div>
      <h1 className={styles.title}> Polheim Expedition</h1>
    </div>
    <img src="./assets/images/homescreen.jpg" alt="Beautiful photography of antartica" />
  </div>
);

export default HomeScreen;
