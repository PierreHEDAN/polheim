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
    km="0km (côte du continent)"
    altitude="85°S - Altitude 200m"
    temp="Température: -10°C"
  />
);

const j2desc = (
  <Description
    jour="JOUR 6"
    km="80km (Glacier Axel Heiberg)"
    altitude="85,4°S - Altitude 1000m"
    temp="Température: -15°C"
  />
);

const j3desc = (
  <Description
    jour="JOUR 12"
    km="130km (Mont Engelstad)"
    altitude="86°S - Altitude 2850m"
    temp="Température: -25°C"
  />
);

const j4desc = (
  <Description
    jour="JOUR 30"
    km="470km (Plateau Antarctique)"
    altitude="88,5°S - Altitude 3200m"
    temp="Température: -40°C"
  />
);

const j5desc = (
  <Description
    jour="JOUR 40"
    km="650km (Pôle Sud)"
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
        <img className={styles.map} src="./assets/images/montagne.svg" alt="ontains" />
        <div className={styles.instaTopContainer}>
          <div className={styles.instaContainer}>
            <InstaPhoto
              key="image1"
              src="./assets/images/travel/0.jpg"
              className={classnames(styles.insta, styles.photo1)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/0.jpg', j1desc)}
              setPoint={() => setPointHovered(1)}
              leavePoint={() => setPointHovered(null)}
              title="JOUR 1"
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
              src="./assets/images/travel/1.jpg"
              className={classnames(styles.insta, styles.photo2)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/1.jpg', j2desc)}
              title="JOUR 6"
              titleMobile={j2desc}
              travel
              copyright="@ALE"
              setPoint={() => setPointHovered(2)}
              leavePoint={() => setPointHovered(null)}
            />
            <InstaPhoto
              key="image3"
              src="./assets/images/travel/2.jpeg"
              className={classnames(styles.insta, styles.photo3)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/2.jpeg', j3desc)}
              title="JOUR 12"
              titleMobile={j3desc}
              travel
              copyright="@Jérôme BRISEBOURG"
              setPoint={() => setPointHovered(3)}
              leavePoint={() => setPointHovered(null)}
            />
            <InstaPhoto
              key="image4"
              src="./assets/images/travel/3.jpg"
              className={classnames(styles.insta, styles.photo4)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/3.jpg', j4desc)}
              title="JOUR 30"
              titleMobile={j4desc}
              travel
              copyright="@ALE"
              setPoint={() => setPointHovered(4)}
              leavePoint={() => setPointHovered(null)}
            />
            <InstaPhoto
              key="image5"
              src="./assets/images/travel/4.jpg"
              className={classnames(styles.insta, styles.photo5)}
              onOpenImage={() => handleOpenImage('./assets/images/travel/4.jpg', j5desc)}
              title="JOUR 40"
              titleMobile={j5desc}
              travel
              copyright="@ALE"
              setPoint={() => setPointHovered(5)}
              leavePoint={() => setPointHovered(null)}
            />
          </div>
        </div>
        <div className={classnames(styles.traceContainer, styles.traceWeb)}>
          <img className={styles.trace} src="./assets/images/trace_itineraire.svg" alt="ontains" />
        </div>
        <div className={classnames(styles.traceContainer, styles.traceMobile)}>
          <img className={styles.trace} src="./assets/images/trace_trajet_2.svg" alt="ontains" />
        </div>
      </div>
    </div>
  );
};

export default Travel;
