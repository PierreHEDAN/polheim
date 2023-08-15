import styles from './AboutMe.module.scss';

const AboutMe = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.paragraph}>
        <h3 className="secondary uppercase">
          Pierre
          {' '}
          <b>Hedan</b>
        </h3>
        <p className="primary">
          Pierre HEDAN est le pilote de ce projet et le futur Homme de terrain de l’expédition Polheim : « Jeune ingénieur de métier, j’aime découvrir des univers épurés et évoluer là où toute ressource est limitée, renouer avec la sobriété.
          <br />
          <br />
          Ascension du Mont Blanc, Ascension du Kilimandjaro, Traversée du Groenland, treks hivernaux en Laponie, atteinte du sommet du Kilimandjaro, tout ce parcours m’a permis de prendre du recul et de gagner en maturité. À travers ma formation de guide polaire, j’aime partager mes connaissances et mon expérience. J’affectionne tout particulièrement cette idée : “A chacun son Everest”, il faut croire en ses rêves et bien s’entourer pour se donner les moyens d’y arriver.
          <br />
          <br />
          J’ai présenté mon projet un peu fou à mon entourage jusqu’à constituer une équipe motivée. Nous sommes tous tournés vers un objectif commun et chacun pourra en retirer une expérience personnelle et/ou professionnelle.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.meContainer}>
          <img className={styles.me} src="./assets/images/pierre_photo.png" alt="Photo of Pierre Hedan" />
        </div>
        <div className={styles.tags}>
          <div className={styles.tagsLine}>
            <div className={styles.tag}>
              <img src="./assets/images/curious.svg" alt="Curious" />
              <span className="primary">Curieux</span>
            </div>
            <div className={styles.tag}>
              <img src="./assets/images/vigorous.svg" alt="Vigorous" />
              <span className="primary">Entreprenant</span>
            </div>
          </div>
          <div className={styles.tagsLine}>
            <div className={styles.tag}>
              <img src="./assets/images/sport.svg" alt="Sport" />
              <span className="primary">Sportif</span>
            </div>
            <div className={styles.tag}>
              <img src="./assets/images/bald.svg" alt="Bald" />
              <span className="primary">De - en - de cheveux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
