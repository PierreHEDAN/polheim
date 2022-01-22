import styles from './BigQuote.module.scss';
import QuoteSVG from './QuoteSVG';

const Quote = () => (
  <div className={styles.quoteContainer}>
    <div className={styles.quoteContent}>
      <div className={styles.quote}>
        <QuoteSVG />
      </div>
        <p>
          Ensemble, réalisons cette aventure un peu folle. Entreprenons un projet qui pour beaucoup semble impossible, pas à leur portée mais qui souvent fait rêver. Nous devons dans nos réflexions être disruptif, abandonner nos vieilles certitudes, sortir de notre zone de confort pour démontrer que rien n’est impossible si on s’en donne les moyens.<br /><br />
          Travaillons avec des partenaires et des acteurs locaux pour mener à bien cette aventure. Valorisons le travail d’équipe et la réussite collective pour que chacun puisse en sortir une richesse personnelle. Soyons tous gagnants à travers ce projet qu’est l’Expédition Polheim.<br /><br />
          Si nous voulons un avenir avec un monde plus durable, il est nécessaire de rêver et d’oser changer les codes.
        </p>
      <div className={styles.quoteEnd}>
        <QuoteSVG style={{
          transform: "rotate(180deg)",
        }}/>
      </div>
    </div>
  </div>
);

const BigQuote = () => (
  <div className={styles.splash}>
    <div className={styles.container}>
      <div className={styles.content}>
        <Quote />
      </div>
    </div>
  </div>
);

export default BigQuote;
