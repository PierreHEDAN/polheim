import classnames from 'classnames';
import styles from './InstaPhoto.module.scss';

const InstaPhoto = ({ src, onOpenImage, title, className }) => {
  const handleOpenImage = (imageSrc) => {
    onOpenImage(<img src={imageSrc} alt="Wide photo" />)
  }

  return (
  <div className={classnames(styles.container, className)}>
    <div className={styles.photoContainer}>
      <div className={styles.photo} onClick={() => handleOpenImage(src)} style={{
    'background-image': `url('${src}')`,
    }} />
    </div>
    <div className={styles.title}>
      {title}
    </div>
  </div>
)};

export default InstaPhoto;
