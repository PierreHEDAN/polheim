import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.container}>
    <img className={styles.bottom} src="./assets/images/mountain-bottom.svg" alt="Mountain Bottom" />
    <img className={styles.top} src="./assets/images/mountain-top.svg" alt="Mountain Top" />
  </div>
);

export default Footer;
