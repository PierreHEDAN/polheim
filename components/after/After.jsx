import styles from './After.module.scss';
import Ecole from './Ecole';
import Fusee from './Fusee';
import Fiole from './Fiole';
import People from './People';
import Immeuble from './Immeuble';

const Quote = () => (
  <div className={styles.quoteContainer}>
    <div className={styles.quoteContent}>
      <div className={styles.quote}>
        <img
          src={require('../../public/assets/images/quote_after.svg')}
          style={{
            opacity: 0.5,
          }}
        />
      </div>
      <p>
        Avant de rentrer dans le monde du travail, il est important pour moi de partager cette expérience atypique. Parti d’un objectif personnel, qu’un jour j’atteindrai le Pôle Sud, j’ai monté un projet et notre équipe pour atteindre ce rêve. Nous n’avons aucun lien hiérarchique entre nous, nos compétences et domaines d’activités sont divers et pourtant nous allons réussir. Tout cela est possible car nous avons su construire une vision commune du projet. Chacun sait ce qu’il doit faire, pourquoi il le fait et ce qu’il peut en retirer. Ces relations transversales nous permettent d’appréhender notre objectif de manière plus performante et plus durable. Tout prend un autre sens quand il y a du partage.
      </p>
      <div className={styles.quoteEnd}>
        <img
          src={require('../../public/assets/images/quote_after.svg')}
          style={{
            transform: 'rotate(180deg)',
            opacity: 0.5,
          }}
        />
      </div>
    </div>
  </div>
);

const After = () => (
  <>
    <div className={styles.headerContainer}>
      <img src={require('../../public/assets/images/white-trace.svg')} />
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.firstLine}>
          <div className={styles.leftParagraph}>
            <div className={styles.header}>
              <h3>
                ET
                {' '}
                <b>APRÈS</b>
                {' '}
                ?
              </h3>
            </div>
            <p>
              L’atteinte du Pôle Sud n’est pas une finalité en soi. C’est le point de départ d’une nouvelle aventure : réaliser un retour d’expérience sur une durée minimale d’un an après le retour de Pierre. Ateliers éducatifs dans des écoles, analyses des données récoltées sur le terrain, conseils et soutiens aux décollages de nouveaux projets, la liste est longue et surtout passionnante. Les possibilités de retours sont multiples et nous restons ouverts aux suggestions.
            </p>
          </div>
          <div className={styles.capsule}>
            <img src={require('../../public/assets/images/capsule.svg')} />
          </div>
        </div>
        <div className={styles.secondLine}>
          <div className={styles.pictos}>
            <div className={styles.pictosOne}>
              <div className={styles.picto}>
                <Ecole />
                <p>École</p>
              </div>
              <div className={styles.picto}>
                <Immeuble />
                <p>Entreprises</p>
              </div>
            </div>
            <div className={styles.pictosCenter}>
              <div className={styles.picto}>
                <People />
                <p>
                  Évolution
                  <br />
                  collective
                </p>
              </div>
            </div>
            <div className={styles.pictosOne}>
              <div className={styles.picto}>
                <Fiole />
                <p>Sciences</p>
              </div>
              <div className={styles.picto}>
                <Fusee />
                <p>Aide projet</p>
              </div>
            </div>
          </div>
          <Quote />
        </div>
      </div>
    </div>
  </>
);

export default After;
