import styles from './Team.module.scss';
import PhotoTeam from './PhotoTeam';

const Team = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.title}>
        <h3>LA <b>TEAM POLHEIM</b></h3>
      </div>
      <div className={styles.paragraph}>
        <p>
          L’association Expédition Polheim a vu le jour à l’été 2021. Une étape importante qui officialise le travail d’une équipe motivée. Une expérience personnelle et/ou professionnelle pour toute l’équipe. <br /><b>Tous différents mais tournés vers un objectif commun</b>: construire ensemble cette expédition et aller au bout de cette aventure.
        </p>
      </div>
    </div>
    <div className={styles.team}>
      <PhotoTeam member="equip-bruno" name="Bruno" />
      <PhotoTeam member="equip-veronique" name="Véronique" />
      <PhotoTeam member="equip-coralie" name="Coralie" />
      <PhotoTeam member="equip-camille" name="Camille" />
      <PhotoTeam member="equip-amelie" name="Amélie" />
      <PhotoTeam member="equip-nathan" name="Nathan" />
      <PhotoTeam member="equip-amandine-08" name="Amandine" />
      <PhotoTeam member="equip-picto" name="Et pourquoi pas vous ?" />
    </div>
  </div>
);

export default Team;
