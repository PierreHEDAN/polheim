import styles from './News.module.scss';
import NewsCard from './news-card';

const News = () => (
  <div className={styles.container}>
    <h4 className="secondary">Actualités</h4>
    <div className={styles.newsList}>
      <div className={styles.news}>
        <NewsCard news={{
          img: './assets/images/news/actu1.jpg',
          title: `Une petite remise en jambe`,
          description: `De quoi prendre de belles gamelles en famille. 😂☃️🌨`,
          date: '21/01/2022',
          link: 'https://www.instagram.com/p/CY9ZL_4sECr/'
        }}  />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: './assets/images/news/actu2.jpg',
          title: 'Interview ingénieur - ECAM Rennes',
          description: `Certains le savent déjà, je suis actuellement apprenti en dernière année au sein de l'école d'ingénieur @ecamrennes.`,
          date: '15/11/2021',
          link: 'https://www.instagram.com/p/CWTbsF0Kpc7/'
        }}  />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: './assets/images/news/actu3.jpg',
          title: 'Un bel accueil à la Ferme de Jeanne',
          description: `La construction de l'Expédition Polheim, c'est aussi donner du sens à la collaboration avec nos partenaires.`,
          date: '11/11/2021',
          link: 'https://www.instagram.com/p/CWJGRAlqvPM/'
        }}  />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: './assets/images/news/actu4.jpg',
          title: 'Entraînement en Suisse',
          description: `En plein hiver, impossible d'apercevoir les crevasses cachées sous la neige.
En été, ces énormes fissures sont à l'air libre.`,
          date: '05/10/2021',
          link: 'https://www.instagram.com/p/CUoxD7Igh41/'
        }}  />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: './assets/images/news/actu5.jpg',
          title: 'Préparation physique',
          description: `Même si le départ de l'expédition n'est prévu que pour 2023, il vaut mieux prendre de l'avance pour s'entraîner.`,
          date: '13/09/2021',
          link: 'https://www.instagram.com/p/CTxHbs9sl01/'
        }}/>
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: './assets/images/news/actu6.jpg',
          title: 'Guide Polaire, un métier hors du commun',
          description: `Ca y est ! Je peux enfin vous partager cette grande nouvelle. Lundi 19 Juillet 2021, l'Espace des Mondes Polaires de PREMANON (39) ouvrira ses portes au bureau des Guides Polaires et à moi-même pour deux conférences inédites.`,
          date: '17/06/2021',
          link: 'https://www.instagram.com/p/CQO_x8DsqmG/'
        }}
        />
      </div>
    </div>
  </div>
);

export default News;
