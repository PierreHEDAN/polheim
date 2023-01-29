import React, { useState, useEffect } from 'react';
import styles from './News.module.scss';
import NewsCard from './news-card';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json.data.user.edge_owner_to_timeline_media.edges.map((x) => x.node).slice(0, 6));
  }

  useEffect(() => { fetchData(); }, [url]);
  return data;
};

const News = () => {
  const a = useFetch('https://insta.polexpedition.fr/list') || [];

  const result = a.map((node) => (
    <div key={node.shortcode} className={styles.news}>
      <NewsCard
        key={node.shortcode}
        news={{
          img: `https://insta_cf.griffon.workers.dev/?image_url=${escape(node.thumbnail_src)}`,
          // title: '',
          description: node.edge_media_to_caption.edges[0].node.text,
          date: (new Date(node.taken_at_timestamp * 1000)).toLocaleDateString(),
          link: `https://www.instagram.com/p/${node.shortcode}/`,
        }}
      />
    </div>
  ));

  return (
    <div className={styles.container} id="news">
      <h4 className="secondary">Actualités</h4>
      <div className={styles.newsList}>
        {result}
      </div>
    </div>
  );
};

export default News;
