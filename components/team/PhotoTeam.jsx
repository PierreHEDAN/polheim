import * as React from 'react';
import styles from './Team.module.scss';

const PhotoTeam = ({ member, name, background }) => (
  <div className={styles.photoTeam}>
    <img className={background ? styles.background : undefined} src={require(`../../public/assets/images/team/${member}.png`)} alt={member} style={background ? { backgroundColor: background } : undefined} />
    <div className={styles.photoName}>
      {name}
    </div>
  </div>
);

export default PhotoTeam;
