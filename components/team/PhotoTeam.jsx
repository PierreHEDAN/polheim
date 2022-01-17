import * as React from "react"
import styles from './Team.module.scss';

const PhotoTeam = ({ member, name }) => {
  return (
    <div className={styles.photoTeam} >
      <img src={`./assets/images/team/${member}.png`} alt={member} />
      <div className={styles.photoName}>
        {name}
      </div>
    </div>
)};

export default PhotoTeam
