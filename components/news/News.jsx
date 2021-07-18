import styles from './News.module.scss';
import NewsCard from './news-card';

const News = () => (
  <div className={styles.container}>
    <h4 className="secondary">Actualités</h4>
    <div className={styles.newsList}>
      <div className={styles.news}>
        <NewsCard news={{
          img: 'https://scontent.frns1-1.fna.fbcdn.net/v/t1.6435-9/200597718_3884488888341170_1448842024494358633_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_ohc=5retOQGr3WoAX-0nkDr&_nc_ht=scontent.frns1-1.fna&oh=cda0e57d7490384e9c0f233d5c7dde67&oe=60F96145',
          title: `La présentation officielle de l'expédition Polheim`,
          description: `La conférence de Pierre Hedan a eu lieu aujourd’hui sur la présentation officielle de l'expédition Polheim!`,
          date: '19/07/2021',
          link: 'https://www.facebook.com/ExpeditionPolheim/photos/a.2096136230509787/3884488885007837/'
        }}  />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: 'https://scontent.frns1-1.fna.fbcdn.net/v/t1.6435-9/197327998_3857282197728506_3796190730856142126_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=973b4a&_nc_ohc=1IZOdNJiK-UAX-AAvFo&_nc_ht=scontent.frns1-1.fna&oh=c45955a2e54fb075a390a226ae3772ee&oe=60F4EEFC',
          title: 'Pierre HEDAN à la conquête du Pôle Sud',
          description: `Pierre Hedan à la conquête du Pôle Sud. Les jeunes s'engagent avec Défi !`,
          date: '01/06/2021',
          link: 'https://www.betton.fr/accueil/ma-ville/nos-publications/betton-infos/1381-6916/ete-2021'
        }}  />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: 'https://scontent.frns1-1.fna.fbcdn.net/v/t1.6435-9/151787587_3524724844317578_6570132079636320016_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=973b4a&_nc_ohc=bF6kTqcMU9sAX_I4QcV&_nc_ht=scontent.frns1-1.fna&oh=8d7ae7fa33e7afac47504fe86081ba37&oe=60F9AE0B',
          title: 'La formation validée !',
          description: `Première formation validée, me voici aspirant guide polaire. Le cursus n'est pas terminé et j'ai hâte d'y retourner. Vivement mai si la covid ne gâche pas tout.`,
          date: '17/02/2021',
          link: 'https://www.facebook.com/ExpeditionPolheim/posts/3524724927650903'
        }}  />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: 'https://www.ecam-rennes.fr/wp-content/uploads/2021/01/pierre-2.jpg',
          title: 'Pierre HEDAN, apprenti-ingénieur à la conquête du pôle sud !',
          description: 'Apprenti-ingénieur en ECAM4A, Pierre HEDAN est parti début décembre en Suède pour suivre une formation de guide polaire. Il revient pour nous sur son parcours et ses envies d’ailleurs.',
          date: '15/01/2021',
          link: 'https://www.ecam-rennes.fr/pierre-hedan-apprenti-ingenieur-a-la-conquete-du-pole-sud/?fbclid=IwAR1seTBnLrNGvJ0V2_3jKwBf-iUNRKlKJSG9g7NoUQiJvXT9Gdjlzr8uP1E'
        }}  />
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: 'https://photos.lci.fr/images/613/344/gilles-bouleau-jt-20h-cc19ce-1@1x.png',
          title: 'Reportage : Bureau des guides polaires',
          description: 'Hier soir, TF1 diffusait un reportage au 20h sur les aurores boréales mais également sur le syndicat des Guides Polaires français. On y voit notre formation. Très heureux pour le syndicat et notre formateur, Jean-Marc, de pouvoir promouvoir leur travail.',
          date: '05/01/2021',
          link: 'https://www.facebook.com/ExpeditionPolheim/videos/397286801549261/'
        }}/>
      </div>
      <div className={styles.news}>
        <NewsCard news={{
          img: 'https://scontent.frns1-1.fna.fbcdn.net/v/t1.6435-9/84845332_2895829830482928_4701218417053532160_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=FldzHyJytR4AX-brpjp&_nc_ht=scontent.frns1-1.fna&oh=4ca67327e23e8d6c7c3dcbfc3183071a&oe=60F88809',
          title: 'Conférence ECAM : Comment partir en expédition ?',
          description: 'La conférence de Pierre Hedan a eu lieu aujourd’hui ! Il a pu raconter toutes ses expériences plus ou moins difficiles ainsi que la manière dont il s’est surpassé!',
          date: '05/02/2020',
          link: 'https://www.facebook.com/BDESmokeHead/posts/2895830627149515'
        }}
        />
      </div>
    </div>
  </div>
);

export default News;
