import styles from './News.module.scss';
import NewsCard from './news-card';

const News = () => (
  <div className={styles.container}>
    <h4 className="secondary">Actualités</h4>
    <div className={styles.newsList}>
      <div className={styles.news}>
        <NewsCard />
      </div>
      <div className={styles.news}>
        <NewsCard />
      </div>
      <div className={styles.news}>
        <NewsCard />
      </div>
      <div className={styles.news}>
        <NewsCard />
      </div>
      <div className={styles.news}>
        <NewsCard />
      </div>
      <div className={styles.news}>
        <NewsCard />
      </div>
    </div>
  </div>
);

export default News;
