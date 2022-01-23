import classnames from 'classnames'
import styles from './Travel.module.scss';
import InstaPhoto from '../insta_photos/InstaPhoto';

const Description = () => (
  <div className={styles.instaDesc}>
    <h3>JOUR 3</h3>
    <p>0km (côte du continent)<br />
    85°S - Altitude 200m<br />
      Température: -10°C</p>
  </div>
)

const Travel = ({ onOpenImage }) => {
  const handleOpenImage = (imageSrc, content) => {
    onOpenImage(<img src={imageSrc} alt="Wide photo" />, content)
  }

  return (
  <div className={styles.container}>
    <div className={styles.title}>
      <h4 className={"primary"}>ITINÉRAIRE<br /><b>DÉTAILLÉ</b></h4>
    </div>
    <div className={styles.desktopContent}>
      <img className={styles.map} src="./assets/images/montagne.svg" alt="ontains" />
      <div className={styles.instaContainer}>
        <InstaPhoto
          key="image1"
          src="./assets/images/photos/0.png"
          className={classnames(styles.insta, styles.photo1)}
          onOpenImage={() => handleOpenImage("./assets/images/photos/0.png", <Description />)}
          title="JOUR 1"
        />
        <InstaPhoto
          key="image2"
          src="./assets/images/photos/1.png"
          className={classnames(styles.insta, styles.photo2)}
          onOpenImage={() => handleOpenImage("./assets/images/photos/1.png")}
          title="JOUR 6"
        />
        <InstaPhoto
          key="image3"
          src="./assets/images/photos/2.png"
          className={classnames(styles.insta, styles.photo3)}
          onOpenImage={() => handleOpenImage("./assets/images/photos/2.png")}
          title="JOUR 12"
        />
        <InstaPhoto
          key="image4"
          src="./assets/images/photos/3.png"
          className={classnames(styles.insta, styles.photo4)}
          onOpenImage={() => handleOpenImage("./assets/images/photos/3.png")}
          title="JOUR 30"
        />
        <InstaPhoto
          key="image5"
          src="./assets/images/photos/4.png"
          className={classnames(styles.insta, styles.photo5)}
          onOpenImage={() => handleOpenImage("./assets/images/photos/4.png")}
          title="JOUR 40"
        />
      </div>
      <div className={styles.traceContainer}>
        <img className={styles.trace} src="./assets/images/trace_itineraire.svg" alt="ontains" />
      </div>
    </div>
  </div>
);
}

export default Travel;
