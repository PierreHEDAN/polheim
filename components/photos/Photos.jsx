import styles from './Photos.module.scss';

const Photos = ({ onOpenImage }) => {
  const handleOpenImage = (imageSrc) => {
    onOpenImage(<img src={imageSrc} alt="Wide photo" />)
  }

  return (
  <div className={styles.container}>
    <div className={styles.content}>
      <h4 className="secondary">Quelques photos</h4>
      <div className={styles.photos}>
        {
          [...Array(8).keys()].map((key) => (
            <div className={styles.photo} key={key} onClick={() => handleOpenImage(`./assets/images/photos/${key}.png`)}>
              <img src={`./assets/images/photos/${key}.png`} alt="key" />
            </div>
          ))
        }
      </div>
    </div>
  </div>
)};

export default Photos;
