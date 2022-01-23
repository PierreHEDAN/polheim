import styles from './Medias.module.scss';
import { Carousel } from '3d-react-carousal';
import "react-multi-carousel/lib/styles.css";

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
      <a src="">Lire l'article</a>
    </div>
  );
}

let slides = [
    <Card name="blblbl" link="/assets/images/pt/passeportarmorique.png" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" />   ];

const Medias = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h3>ILS PARLENT <b>DE NOUS</b></h3>
    </div>
    <div className={styles.content}>
      <div className={styles.carrousel}>
        {process.browser && (
          <Carousel slides={slides} autoplay={false} />
        )}
      </div>
    </div>
  </div>
);

export default Medias;
