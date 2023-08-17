import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.container}>
    <img className={styles.bottom} src={require('../../public/assets/images/mountain-bottom.svg')} alt="Mountain Bottom" />
    <img className={styles.top} src={require('../../public/assets/images/mountain-top.svg')} alt="Mountain Top" />
    <div className={styles.content}>
      <div className={styles.topRow}>
        <div className={styles.contact}>
          <h3 className="white uppercase">Nous Contacter</h3>
          <a href="mailto:expeditionpolheim@gmail.com">
            <span className="white">expeditionpolheim@gmail.com</span>
          </a>
        </div>
        <div className={styles.weather} />
      </div>
      <div className={styles.separator} />
      <div className={styles.bottomRow}>
        <span className="white">Expédition Polheim 2023. Tous droits réservés.</span>
        <div className={styles.socialMedias}>
          <a href="https://www.facebook.com/ExpeditionPolheim/?hc_ref=ARSexrmjy16PRoTFS65ZHrxdo-cFvOmxdbyL-GnKfynC1fgHI9j-yXibQzUdUfihep4&fref=nf&__tn__=kC-R" target="_blank" rel="noreferrer">
            <img src={require('../../public/assets/images/facebook-f-brands.svg')} alt="Facebook" />
          </a>
          <a href="mailto:expeditionpolheim@gmail.com">
            <img src={require('../../public/assets/images/google-brands.svg')} alt="Google" />
          </a>
          <a href="https://www.instagram.com/expedition_polheim/" target="_blank" rel="noreferrer">
            <img src={require('../../public/assets/images/instagram-brands.svg')} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
