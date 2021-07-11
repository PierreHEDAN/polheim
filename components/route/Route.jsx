import styles from './Route.module.scss';

const Route = () => (
  <div className={styles.container}>
    <h4 className="secondary">Itinéraire</h4>
    <div className={styles.desktopContent}>
      <img className={styles.map} src="./assets/images/map.png" alt="Map" />
      <img className={styles.expedition} src="./assets/images/sticker1.svg" alt="Sticker 1" />
      <img className={styles.hygiene} src="./assets/images/sticker2.svg" alt="Sticker 2" />
      <img className={styles.food} src="./assets/images/sticker3.svg" alt="Sticker 3" />
      <div className={styles.weather}>
        <img src="./assets/images/sticker-base.svg" alt="Weather" />
      </div>
    </div>
    <div className={styles.mobileContent}>
      <img className={styles.map} src="./assets/images/map.png" alt="Map" />
      <img className={styles.expedition} src="./assets/images/sticker-base.svg" alt="Sticker 1" />
      <img className={styles.hygiene} src="./assets/images/sticker-base.svg" alt="Sticker 2" />
      <img className={styles.food} src="./assets/images/sticker-base.svg" alt="Sticker 3" />
      <img className={styles.weather} src="./assets/images/sticker-base.svg" alt="Weather" />
    </div>
  </div>
)

export default Route;
