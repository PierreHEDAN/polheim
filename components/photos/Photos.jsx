import styles from './Photos.module.scss';
import InstaPhoto from '../insta_photos/InstaPhoto';

const Photos = ({ onOpenImage }) => {
  const handleOpenImage = (imageSrc) => {
    onOpenImage(<img src={imageSrc} alt="Wide photo" />);
  };

  return (
    <div className={styles.container} id="galerie">
      <div className={styles.content}>
        <h4 className="secondary">Quelques photos</h4>
        <div className={styles.photos}>
          {
            [...Array(8).keys()].map((key) => (
              <InstaPhoto
                key={key}
                src={require(`../../public/assets/images/photos/${key}.png?resize&size=400`)}
                className={styles.insta}
                onOpenImage={() => handleOpenImage(require(`../../public/assets/images/photos/${key}.png`))}
                title={(
                  <>
                    <br />
                    <br />
                  </>
                )}
                travel
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Photos;
