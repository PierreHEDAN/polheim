import styles from './Photos.module.scss';

const Photos = ({ onOpenPhoto }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h4 className="secondary">Quelques photos</h4>
      <div className={styles.photos}>
        {
          [...Array(7).keys()].map((key) => (
            <div className={styles.photo} key={key} onClick={() => onOpenPhoto(key)}>
              <img src={`./assets/images/photos/${key}.jpeg`} alt="key" />
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default Photos;
