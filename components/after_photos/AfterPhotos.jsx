import styles from './AfterPhotos.module.scss';
import InstaPhoto from '../insta_photos/InstaPhoto';

const AfterPhotos = ({ onOpenImage }) => {
  const handleOpenImage = (imageSrc) => {
    onOpenImage(<img src={imageSrc} alt="Wide photo" />)
  }

  return (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.photos}>
        <div className={styles.instaContainer}>
          <InstaPhoto
            key="image1"
            src="./assets/images/photos/0.png"
            className={styles.insta}
            onOpenImage={onOpenImage}
            title="Une vision durable"
          />
        </div>
        <div className={styles.instaContainer}>
          <InstaPhoto
            key="image2"
            src="./assets/images/photos/0.png"
            className={styles.insta}
            onOpenImage={onOpenImage}
            title="Une approche scientifique"
          />
        </div>
        <div className={styles.instaContainer}>
          <InstaPhoto
            key="image3"
            src="./assets/images/photos/0.png"
            className={styles.insta}
            onOpenImage={onOpenImage}
            title="Une volontée de partage"
          />
        </div>
        <div className={styles.instaContainer}>
          <InstaPhoto
            key="image4"
            src="./assets/images/photos/0.png"
            className={styles.insta}
            onOpenImage={onOpenImage}
            title="Une démarche éducative"
          />
        </div>
      </div>
    </div>
  </div>
)};

export default AfterPhotos;
