import classnames from 'classnames';
import styles from './InstaPhoto.module.scss';

const InstaPhoto = ({ src, onOpenImage, title, titleMobile, className, secondary, travel }) => {
  const handleOpenImage = (imageSrc) => {
    onOpenImage(<img src={imageSrc} alt="Wide photo" />)
  }

  return (
  <div className={classnames(styles.container, className)}>
    <div className={styles.photoContainer}>
      <div className={classnames(styles.photo, travel ? styles.photoTravel : undefined)} onClick={() => handleOpenImage(src)} style={{
    'background-image': `url('${src}')`,
    }} />
    </div>
    <div className={classnames(styles.web, styles.title, secondary ? styles.secondary : styles.primary)}>
      {title}
    </div>
    <div className={classnames(styles.mobile, styles.title, secondary ? styles.secondary : styles.primary)}>
      {titleMobile ? titleMobile : title}
    </div>
  </div>
)};

export default InstaPhoto;
