import styles from './Route.module.scss';

const Route = ({ onOpenImage }) => (
  <div className={styles.container}>
    <h4 className="secondary">Itinéraire</h4>
    <div className={styles.desktopContent}>
      <img className={styles.map} src="./assets/images/map.svg" alt="Map" />
      <img className={styles.trip} src="./assets/images/trip.svg" alt="Trip" />
      <img className={styles.expedition} src="./assets/images/expedition.svg" alt="Expedition" />
      <img className={styles.clock} src="./assets/images/clock.svg" alt="Clock" />
      <img className={styles.hygiene} src="./assets/images/hygiene.svg" alt="Hygiene" />
      <img className={styles.food} src="./assets/images/food.svg" alt="Food" />
      <div className={styles.weather}>
        <img src="./assets/images/sticker-base.svg" alt="Weather" />
      </div>
    </div>
    <div className={styles.mobileContent}>
      <img className={styles.map} src="./assets/images/map.svg" alt="Map" />
      <img className={styles.trip} src="./assets/images/sticker-mobile-trip.svg" alt="Trip"
        onClick={() => onOpenImage('./assets/images/trip.svg')} />
      <img className={styles.expedition} src="./assets/images/sticker-mobile-expedition.svg" alt="Expedition"
        onClick={() => onOpenImage('./assets/images/expedition.svg')} />
      <img className={styles.clock} src="./assets/images/sticker-mobile-clock.svg" alt="Clock"
        onClick={() => onOpenImage('./assets/images/clock.svg')} />
      <img className={styles.hygiene} src="./assets/images/sticker-mobile-health.svg" alt="Hygiene"
        onClick={() => onOpenImage('./assets/images/hygiene.svg')}/>
      <img className={styles.food} src="./assets/images/sticker-mobile-food.svg" alt="Food"
        onClick={() => onOpenImage('./assets/images/food.svg')}/>
      <img className={styles.weather} src="./assets/images/sticker-mobile-weather.svg" alt="Weather"
        onClick={() => onOpenImage('./assets/images/sticker-base.svg')}/>
    </div>
  </div>
)

export default Route;
