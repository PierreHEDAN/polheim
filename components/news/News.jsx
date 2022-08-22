import styles from './News.module.scss';
import NewsCard from './news-card';

const News = () => (
  <div className={styles.container} id="news">
    <h4 className="secondary">Actualités</h4>
    <div className={styles.newsList}>
      <div className={styles.news}>
        <NewsCard news={{
          img: require('../../public/assets/images/news/actu10022022.jpg?resize&size=1200'),
          title: 'Que le programme médical commence !',
          description: 'La préparation d\'une expédition polaire ce n\'est pas seulement tirer des pneus et dormir dans son frigo. 🤒🤧☃️',
          date: '10/02/2022',
          link: 'https://www.instagram.com/p/CZzc23LKPFX/',
        }}
        />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: require('../../public/assets/images/news/actu31012022.jpeg?resize&size=1200'),
          title: 'Un 10km plutôt original !',
          description: 'Hier, nous avons réalisé une grande première (mondiale peut être 😂), un joli 10km accroché à mon pneu.',
          date: '31/01/2022',
          link: 'https://www.instagram.com/p/CZZuKuzLeen/',
        }}
        />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: require('../../public/assets/images/news/actu1.jpg?resize&size=1200'),
          title: 'Une petite remise en jambe',
          description: 'De quoi prendre de belles gamelles en famille. 😂☃️🌨',
          date: '21/01/2022',
          link: 'https://www.instagram.com/p/CY9ZL_4sECr/',
        }}
        />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: require('../../public/assets/images/news/actu2.jpg?resize&size=1200'),
          title: 'Interview ingénieur - ECAM Rennes',
          description: 'Certains le savent déjà, je suis actuellement apprenti en dernière année au sein de l\'école d\'ingénieur @ecamrennes.',
          date: '15/11/2021',
          link: 'https://www.instagram.com/p/CWTbsF0Kpc7/',
        }}
        />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: require('../../public/assets/images/news/actu3.jpg?resize&size=1200'),
          title: 'Un bel accueil à la Ferme de Jeanne',
          description: 'La construction de l\'Expédition Polheim, c\'est aussi donner du sens à la collaboration avec nos partenaires.',
          date: '11/11/2021',
          link: 'https://www.instagram.com/p/CWJGRAlqvPM/',
        }}
        />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: require('../../public/assets/images/news/actu4.jpg?resize&size=1200'),
          title: 'Entraînement en Suisse',
          description: `En plein hiver, impossible d'apercevoir les crevasses cachées sous la neige.
En été, ces énormes fissures sont à l'air libre.`,
          date: '05/10/2021',
          link: 'https://www.instagram.com/p/CUoxD7Igh41/',
        }}
        />
      </div>
    </div>
  </div>
);

export default News;
