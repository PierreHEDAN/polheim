import styles from './Route.module.scss';
import Weather from './weather/Weather';

const Route = ({ forecast, onOpenImage }) => {
  const handleOpenImage = (imageSrc) => {
    onOpenImage(<img src={imageSrc} alt="Wide photo" />);
  };

  return (
    <div className={styles.container}>
      <h4 className="secondary">
        DONNÉES
        {' '}
        <b>GÉNÉRALES</b>
      </h4>
      <div className={styles.desktopContent}>
        <img className={styles.map} src={require('../../public/assets/images/map.svg')} alt="Map" />
        <img className={styles.trip} src={require('../../public/assets/images/trip.svg')} alt="Trip" />
        <img className={styles.expedition} src={require('../../public/assets/images/expedition.svg')} alt="Expedition" />
        <img className={styles.clock} src={require('../../public/assets/images/clock.svg')} alt="Clock" />
        <img className={styles.hygiene} src={require('../../public/assets/images/hygiene.svg')} alt="Hygiene" />
        <img className={styles.food} src={require('../../public/assets/images/food.svg')} alt="Food" />
        <div className={styles.weather}>
          <Weather forecast={forecast} />
        </div>
      </div>
      <div className={styles.mobileContent}>
        <img className={styles.map} src={require('../../public/assets/images/map.svg')} alt="Map" />
        <img
          className={styles.trip}
          src={require('../../public/assets/images/sticker-mobile-trip.svg')}
          alt="Trip"
          onClick={() => handleOpenImage('./assets/images/trip.svg')}
        />
        <img
          className={styles.expedition}
          src={require('../../public/assets/images/sticker-mobile-expedition.svg')}
          alt="Expedition"
          onClick={() => handleOpenImage('./assets/images/expedition.svg')}
        />
        <img
          className={styles.clock}
          src={require('../../public/assets/images/sticker-mobile-clock.svg')}
          alt="Clock"
          onClick={() => handleOpenImage('./assets/images/clock.svg')}
        />
        <img
          className={styles.hygiene}
          src={require('../../public/assets/images/sticker-mobile-health.svg')}
          alt="Hygiene"
          onClick={() => handleOpenImage('./assets/images/hygiene.svg')}
        />
        <img
          className={styles.food}
          src={require('../../public/assets/images/sticker-mobile-food.svg')}
          alt="Food"
          onClick={() => handleOpenImage('./assets/images/food.svg')}
        />
        <img
          className={styles.weather}
          src={require('../../public/assets/images/sticker-mobile-weather.svg')}
          alt="Weather"
          onClick={() => onOpenImage(<Weather forecast={forecast} />)}
        />
      </div>
    </div>
  );
};

export default Route;
