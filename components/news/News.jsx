import React, { useState, useEffect } from 'react';
import styles from './News.module.scss';
import NewsCard from './news-card';

/*
{
  "data": {
    "user": {
      "edge_owner_to_timeline_media": {
        "edges": [
          {
            "node": {
              "shortcode": "Cn4FvYGocQq",
              "display_url": "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/327493954_910696559968706_2509520446383984590_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=bI76YAiHfRQAX_VOa8d&edm=AOQ1c0wBAAAA&ccb=7-5&ig_cache_key=MzAyNDE5MjM5NTcwODMxODc2Mg%3D%3D.2-ccb7-5&oh=00_AfCj4DPaecgi9iotNgtQn1hP_zN927zmEitiLz_0HB_4FQ&oe=63D9FE3E&_nc_sid=8fd12b",
              "taken_at_timestamp": 1674731848,
              "edge_media_to_caption": {
                "edges": [
                  {
                    "node": {
                      "text": "[PODCAST] \n\n💥 Et c'est parti pour le 2ème épisode de la série de podcasts ! \n🎙 Dans cet épisode nous rencontrons @Coralie Vaugeois, nutritionniste et diététicienne du sport qui accompagne Pierre pour toute la dimension nutritionnelle de l'aventure. Elle nous parle de son accompagnement, des contraintes liées à l'alimentation pour Pierre et de son rôle dans le projet Polheim. Cette pro travaille avec des sportifs pour les aider à mettre toutes les chances de leur côté ! Enjoy 😉\n\n#onavanceensemble #expedition #antarctique #antarctica #polesud #southpole #polheimproject #antarcticaexpedition #podcast #spotify"
                    }
                  }
                ]
              }
            }
          },
          {
 *
 */

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
