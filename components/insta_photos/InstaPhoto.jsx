import React from 'react';
import classnames from 'classnames';
import styles from './InstaPhoto.module.scss';

const InstaPhoto = ({
  src, onOpenImage, title, titleMobile, className, secondary, travel, copyright, setPoint, leavePoint,
}) => {
  const handleOpenImage = (imageSrc) => {
    onOpenImage(<img src={imageSrc} alt="Wide photo" />);
  };

  return (
    <div className={classnames(styles.container, className)}>
      <div className={styles.photoContainer}>
        <div
          className={classnames(styles.photo, travel ? styles.photoTravel : undefined)}
          onClick={() => handleOpenImage(src)}
          onMouseEnter={setPoint ? () => setPoint() : () => { }}
          onMouseLeave={leavePoint ? () => leavePoint() : () => { }}
          style={{
            backgroundImage: `url('${src}')`,
          }}
        >
          {copyright && (<p>{copyright}</p>)}
        </div>
      </div>
      <div className={classnames(styles.web, styles.title, secondary ? styles.secondary : styles.primary)}>
        {title}
      </div>
      <div className={classnames(styles.mobile, styles.title, secondary ? styles.secondary : styles.primary)}>
        {titleMobile || title}
      </div>
    </div>
  );
};

export const InstaPoint = ({ hidden, className }) => (
  <div className={classnames(className)}>
    <div className={classnames({
      [styles.point]: true,
      [styles.hidden]: hidden,
    })}
    />
  </div>
);

export default InstaPhoto;
