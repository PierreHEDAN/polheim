import styles from './NewsCard.module.scss';
import { Button } from '../../utils';

const NewsCard = () => (
  <div className={styles.newsCard}>
    <div className={styles.thumbnail}>
      <img src="./assets/images/photos/1.png" alt="" />
    </div>
    <div className={styles.description}>
      <span className="bold">Préparation physique</span>
      <span className="small">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, itaque.</span>
      <div className={styles.info}>
        <span className="small">10.02.21</span>
        <div className={styles.button}>
          <Button type="secondary" title="Voir plus" />
        </div>
      </div>
    </div>
  </div>
);

export default NewsCard;
