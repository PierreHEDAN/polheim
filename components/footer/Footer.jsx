import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.container}>
    <img className={styles.bottom} src="./assets/images/mountain-bottom.svg" alt="Mountain Bottom" />
    <img className={styles.top} src="./assets/images/mountain-top.svg" alt="Mountain Top" />
    <div className={styles.content}>
      <div className={styles.topRow}>
        <div className={styles.contact}>
          <h3 className="white uppercase">Nous Contacter</h3>
          <span className="white">expeditionpolheim@gmail.com</span>
        </div>
        <div className={styles.weather}>
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.bottomRow}>
        <span className="white">Expédition Polheim 2023. Tous droits réservés. Mentions légales.</span>
        <div className={styles.socialMedias}>
          <a href="">
            <img src="./assets/images/facebook-f-brands.svg" alt="Facebook" />
          </a>
          <a href="">
            <img src="./assets/images/google-brands.svg" alt="Google" />
          </a>
          <a href="">
            <img src="./assets/images/instagram-brands.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
