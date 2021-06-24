import styles from './Route.module.scss';

const Route = () => (
  <div className={styles.container}>
    <h4 className="secondary">Itinéraire</h4>
    <div className={styles.content}>
      <img src="./assets/images/map.png" alt="Map" />
    </div>
  </div>
)

export default Route;
