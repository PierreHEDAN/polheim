import styles from './AboutMe.module.scss';

const AboutMe = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.paragraph}>
        <h3 className="secondary uppercase">Pierre Hedan</h3>
        <p className="white">Ingénieur en devenir de vingt-trois ans, j’aspire à percevoir le monde à travers des 
          expéditions loin de toutes civilisations. J’aime à découvrir et partager la pureté d’un 
          univers inhabité et silencieux. Emerveillé par la beauté du monde polaire et 
          l’engagement de l’Himalayisme, je suis devenu guide polaire.
          Cette expédition est pour moi un nouveau défi, l’opportunité de contribuer à mon 
          échelle à la science et à la recherche. Après cette période d’incertitudes liée à la 
          pandémie, nous avons tous besoin de prendre un nouveau départ. 
          étudiants, travailleurs, la vie est trop courte pour passer à côté de nos rêves.
        </p>
        <p className="white bold">
          « Le jour où chaque Homme vivra ses rêves, il m’importe peu d’avoir une vie ordinaire. »
        </p>
      </div>
      <img src="./assets/images/pierrehedan.png" alt="Photo of Pierre Hedan" />
    </div>
  </div>
);

export default AboutMe;
