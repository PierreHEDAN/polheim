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
          « Le jour où chaque Homme vivra ses rêves, il m’importera peu d’avoir une vie ordinaire. »
        </p>
        <div className={styles.tags}>
          <div className={styles.tag}>
            <img src="./assets/images/curious.svg" alt="Curious" />
            <span className="white">Curieux</span>
          </div>
          <div className={styles.tag}>
            <img src="./assets/images/vigorous.svg" alt="Vigorous" />
            <span className="white">Entreprenant</span>
          </div>
          <div className={styles.tag}>
            <img src="./assets/images/sport.svg" alt="Sport" />
            <span className="white">Sportif</span>
          </div>
          <div className={styles.tag}>
            <img src="./assets/images/bald.svg" alt="Bald" />
            <span className="white">De - en - de cheveux</span>
          </div>
        </div>
      </div>
      <img className={styles.me} src="./assets/images/pierrehedan.png" alt="Photo of Pierre Hedan" />
    </div>
  </div>
);

export default AboutMe;
