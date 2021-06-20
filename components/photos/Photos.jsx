import styles from './Photos.module.scss';

const Photos = () => (
  <div className={styles.container}>
    <h4 className="secondary">Quelques photos</h4>
    <div className={styles.photos}>
      {
        [...Array(7).keys()].map((key) => (
          <div className={styles.photo}>
            <img src={`./assets/images/photos/${key}.jpeg`} alt="" />
          </div>
        ))
      }
    </div>
  </div>
);

export default Photos;
