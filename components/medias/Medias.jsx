import styles from './Medias.module.scss';
import { Carousel } from './Carousel';
import Button from '../utils/button';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Card = ({ name, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img src={link} />
      </div>
      <div className={styles.title}>
        {name}
      </div>
      <a className={styles.seeMore} href={link} target="_blank">
        <div className={styles.button}><p>Lire l'article</p></div>
      </a>
    </div>
  );
}

let slides = [
    <Card key={1} name="NOM PARTENAIRE" link="/assets/images/pt/passeportarmorique.png" />,
    <Card key={2} name="NOM PARTENAIRE" link="/assets/images/pt/passeportarmorique.png" />,
    <Card key={3} name="NOM PARTENAIRE" link="/assets/images/pt/passeportarmorique.png" />,
    <Card key={4} name="NOM PARTENAIRE" link="/assets/images/pt/passeportarmorique.png" />,
    <Card key={5} name="NOM PARTENAIRE" link="/assets/images/pt/passeportarmorique.png" />,
    <Card key={6} name="NOM PARTENAIRE" link="/assets/images/pt/passeportarmorique.png" />,
];

const Medias = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.header}>
        <h3>ILS PARLENT <b>DE NOUS</b></h3>
      </div>
      <div className={styles.carrousel}>
        <Carousel arrows arrowBorders slides={slides} autoplay={false} />
      </div>
    </div>
  </div>
);

export default Medias;
