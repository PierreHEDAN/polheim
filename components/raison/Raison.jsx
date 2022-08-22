import React from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player';
import styles from './Raison.module.scss';

const Quoted = () => (
  <div className={styles.quoted}>
    <div className={classnames('primary', styles.quotedTitle)}>
      <em>
        "Si quelqu'un rêve seul ce n'est qu'un rêve. Si plusieurs
        {' '}
        <br />
        personnes rêvent ensemble, c'est le début de la réalité."
      </em>
      <div className={styles.label}>
        F.Hundertwasser
      </div>
    </div>
  </div>
);

const Raison = () => (
  <div className={styles.container} id="purpose">
    <div className={styles.content}>
      <div className={styles.flexWrapper}>
        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.reactPlayer}
            url="https://www.youtube.com/watch?v=RFBCE8vd1jY"
            playing
            controls
            volume={1}
            muted
            width="100%"
            height="100%"
            youtube={{
              autoplay: true,
            }}
          />
        </div>
      </div>
      <div className={styles.paragraph}>
        <div className={styles.title}>
          <h4 className={classnames('primary', styles.orange, styles.firstTitle)}>
            Notre raison d'être
          </h4>
          <h4 className={classnames('primary', styles.orange, styles.subtitle)}>
            Construire en commun pour permettre
            <br />
            à chacun d'accomplir son rêve
          </h4>
        </div>
        <Quoted />
        <p className="primary">
          Sortie initialement de la tête d’un petit breton ambitieux, sans réelle expérience et sans doute un peu fou, l’Expédition
          {' '}
          <b>POLHEIM</b>
          {' '}
          a su grandir et devenir une belle aventure collective. Nos profils sont divers, nos rêves sont multiples. Aujourd’hui, c’est grâce à cela, à la force du groupe, à l’épanouissement de chacun que l’expédition
          {' '}
          <b>POLHEIM</b>
          {' '}
          est un projet sérieux et structuré.
        </p>
      </div>
    </div>
  </div>
);

export default Raison;
