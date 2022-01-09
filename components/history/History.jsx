import styles from './History.module.scss';

const Introduction = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.paragraph}>
        <div className={styles.title}>
          <h4 className={"primary"}>UN PEU D'<b>HISTOIRE...</b></h4>
        </div>
        <p className="primary">
          Le 14 Décembre 1911, l’explorateur Roald Amundsen est le premier Homme à atteindre le Pôle Sud. Arrivé, il met ainsi un terme à la course au pôle disputée contre les britanniques. Pour s’abriter, lui et son équipe installent une tente. Elle s’appelle “Polheim”, littéralement “la maison du pôle” en norvégien. Le symbole d’un exploit humain et d’un rêve pour les prochains explorateurs du grand Sud. Fatigués, n’étant pas sûr de rentrer vivants, ils laissent leurs calculs et preuves de leur réussite sur place, avant de repartir vers les côtes.
          <br />
          <br />
          Les britanniques, dirigés par le capitaine Scott, arrivent un mois plus tard sur Polheim. Ils décident de rentrer avec les preuves des norvégiens pour l’honneur et par fair-play. Malheureusement, ils ne parviendront jamais aux côtes. Il restera d’eux à jamais le souvenir d’Hommes courageux, humbles et déterminés, allant au-delà du possible au nom de la coopération et du respect.
          <br />
          <br />
          Retraçons avec l’Expédition POLHEIM, le parcours de ces aventuriers, travaillons en équipe afin de réussir l’impossible. Atteindre le Pôle Sud n’est pas une finalité en soi mais bien la preuve d’une réussite collective.

        </p>
      </div>
      <img className={styles.badge} src="./assets/images/expedition-amundsen.png" alt="Expedition Badge" />
    </div>
  </div>
);

export default Introduction;
