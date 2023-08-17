import styles from './Medias.module.scss';
import { Carousel } from './Carousel';
import Button from '../utils/button';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Card = ({ name, imgSrc, link }) => (
  <div className={styles.card}>
    <div className={styles.media}>
      <img src={imgSrc} />
    </div>
    <div className={styles.title}>
      {name}
    </div>
    <a className={styles.seeMore} href={link} target="_blank" rel="noreferrer">
      <div className={styles.button}><p>Lire l'article</p></div>
    </a>
  </div>
);

const slides = [
  <Card key={1} name="France 3 Bretagne" imgSrc={require('../../public/assets/images/medias/f3.jpg')} link="https://www.youtube.com/watch?v=UhVn733uESc" />,
  <Card key={2} name="France Bleu" imgSrc={require('../../public/assets/images/medias/france_bleu.png')} link="https://www.instagram.com/tv/CaAVaE6vvhY/" />,
  <Card key={3} name="Ouest France" imgSrc={require('../../public/assets/images/medias/ouest_france.png')} link="https://www.ouest-france.fr/bretagne/betton-35830/betton-pierre-hedan-tractera-des-pneus-sur-tout-betton-court-95d2a062-7d06-11ec-9f2d-d3903e493249" />,
  <Card key={4} name="Le Pays Gessien" imgSrc={require('../../public/assets/images/medias/pays_gessien.jpeg')} link="https://www.lepaysgessien.fr/55143/article/2023-02-14/il-s-entraine-monts-jura-avant-de-partir-en-antarctique" />,
  <Card key={5} name="Ouest France" imgSrc={require('../../public/assets/images/medias/ouest_france.png')} link="https://www.ouest-france.fr/bretagne/betton-35830/betton-pierre-hedan-tractera-des-pneus-sur-tout-betton-court-95d2a062-7d06-11ec-9f2d-d3903e493249" />,
  <Card key={6} name="Passeport Armorique" imgSrc={require('../../public/assets/images/medias/passport.png')} link="https://www.passeport-armorique.com/pierre-hedan-explorateur-polaire/" />,
  <Card key={7} name="Betton Info" imgSrc={require('../../public/assets/images/medias/betton.png')} link="https://www.betton.fr/upload/espace/12/pj/6916_15700_BI___juin_2021_BAT___72_dpi.pdf" />,
  <Card key={8} name="Espace Monde Polaires" imgSrc={require('../../public/assets/images/medias/espace.png')} link="https://www.espacedesmondespolaires.org/event/le-metier-de-guide-polaire/" />,
  <Card key={9} name="Rennes Métropole" imgSrc={require('../../public/assets/images/medias/rennes.jpg')} link="https://fr.calameo.com/read/005416234c1c64fd8b0f9?page=40" />,
];

const Medias = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.header}>
        <h3>
          ILS PARLENT
          {' '}
          <b>DE NOUS</b>
        </h3>
      </div>
      <div className={styles.carrousel}>
        <Carousel arrows arrowBorders slides={slides} autoplay={false} />
      </div>
    </div>
  </div>
);

export default Medias;
