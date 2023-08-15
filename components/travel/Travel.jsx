import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './Travel.module.scss';
import { default as InstaPhoto, InstaPoint } from '../insta_photos/InstaPhoto';

const Description = ({
  jour,
  km,
  altitude,
  temp,
}) => (
  <div className={styles.instaDesc}>
    <h3>{jour}</h3>
    <p>
      {km}
      <br />
      {altitude}
      <br />
      {temp}

    </p>
  </div>
);

const j1desc = (
  <Description
    jour="JOUR 0"
    km="1130km (côte du continent)"
    altitude="80°S - Altitude 480m"
    temp="Température: -15°C"
  />
);

const j2desc = (
  <Description
    jour="JOUR 14"
    km="870km"
    altitude="82°S - Altitude 850m"
    temp="Température: -20°C"
  />
);

const j3desc = (
  <Description
    jour="JOUR 28"
    km="550km (Thiel Corner)"
    altitude="85°S - Altitude 1350m"
    temp="Température: -25°C"
  />
);

const j4desc = (
  <Description
    jour="JOUR 45"
    km="470km (last degre)"
    altitude="89°S - Altitude 2750m"
    temp="Température: -30°C"
  />
);

const j5desc = (
  <Description
    jour="JOUR 50"
    km="0km (Pôle Sud)"
    altitude="90°S - Altitude 2850m"
    temp="Température: -35°C"
  />
);

const Travel = ({ onOpenImage }) => {
  const [pointHovered, setPointHovered] = useState(null);
  const handleOpenImage = (imageSrc, content) => {
    onOpenImage(<img src={imageSrc} alt="Wide photo" />, content);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4 className="primary">
          ITINÉRAIRE
          {' '}
          <b>DÉTAILLÉ</b>
        </h4>
      </div>
      <div className={styles.desktopContent}>
        <img className={styles.map} src="./assets/images/montagne.svg" alt="" />
        <div className={styles.instaTopContainer}>
          <div className={styles.instaContainer}>
            <InstaPhoto
              key="image1"
              src={require('../../public/assets/images/travel/0.jpg?resize&size=1200')}
              className={classnames(styles.insta, styles.photo1)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/0.jpg', j1desc)}
              setPoint={() => setPointHovered(1)}
              leavePoint={() => setPointHovered(null)}
              title="JOUR 0"
              titleMobile={j1desc}
              travel
              copyright="@ALE"
            />

            <InstaPoint hidden={pointHovered !== 1} key="point1" className={classnames(styles.point, styles.point1)} />
            <InstaPoint hidden={pointHovered !== 2} key="point2" className={classnames(styles.point, styles.point2)} />
            <InstaPoint hidden={pointHovered !== 3} key="point3" className={classnames(styles.point, styles.point3)} />
            <InstaPoint hidden={pointHovered !== 4} key="point4" className={classnames(styles.point, styles.point4)} />
            <InstaPoint hidden={pointHovered !== 5} key="point5" className={classnames(styles.point, styles.point5)} />
            <InstaPhoto
              key="image2"
              src={require('../../public/assets/images/travel/1.jpg?resize&size=1200')}
              className={classnames(styles.insta, styles.photo2)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/1.jpg', j2desc)}
              title="JOUR 14"
              titleMobile={j2desc}
              travel
              copyright="@ALE"
              setPoint={() => setPointHovered(2)}
              leavePoint={() => setPointHovered(null)}
            />
            <InstaPhoto
              key="image3"
              src={require('../../public/assets/images/travel/2.jpeg?resize&size=1200')}
              className={classnames(styles.insta, styles.photo3)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/2.jpeg', j3desc)}
              title="JOUR 28"
              titleMobile={j3desc}
              travel
              copyright="@Jérôme BRISEBOURG"
              setPoint={() => setPointHovered(3)}
              leavePoint={() => setPointHovered(null)}
            />
            <InstaPhoto
              key="image4"
              src={require('../../public/assets/images/travel/3.jpg?resize&size=1200')}
              className={classnames(styles.insta, styles.photo4)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/3.jpg', j4desc)}
              title="JOUR 45"
              titleMobile={j4desc}
              travel
              copyright="@ALE"
              setPoint={() => setPointHovered(4)}
              leavePoint={() => setPointHovered(null)}
            />
            <InstaPhoto
              key="image5"
              src={require('../../public/assets/images/travel/4.jpg?resize&size=1200')}
              className={classnames(styles.insta, styles.photo5)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/4.jpg', j5desc)}
              title="JOUR 50"
              titleMobile={j5desc}
              travel
              copyright="@ALE"
              setPoint={() => setPointHovered(5)}
              leavePoint={() => setPointHovered(null)}
            />
            <img className={styles.traceEnd} src="./assets/images/trace_end.svg" alt="ontains" />
          </div>
        </div>
        <div className={classnames(styles.traceContainer, styles.traceWeb)}>
          <img className={styles.trace} src="./assets/images/trace_itineraire.svg" alt="ontains" />
        </div>
        <div className={classnames(styles.traceContainer, styles.traceMobile)}>
          <img className={styles.trace} src="./assets/images/trace_mobile.svg" alt="ontains" />
        </div>
      </div>
    </div>
  );
};

export default Travel;
