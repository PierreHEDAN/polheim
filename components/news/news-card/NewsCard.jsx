import styles from './NewsCard.module.scss';
import { Button } from '../../utils';

const NewsCard = ({ news }) => (
  <div className={styles.newsCard}>
    <div className={styles.thumbnail}>
      <img src={news.img} alt="" />
    </div>
    <div className={styles.details}>
      <span className="bold">{ news.title }</span>
      <span className={styles.description}>{ news.description }</span>
      <div className={styles.info}>
        <span className="small">{ news.date }</span>
        <div className={styles.button}>
          <a href={news.link} target="_blank">
            <Button type="secondary" title="Voir plus" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default NewsCard;
