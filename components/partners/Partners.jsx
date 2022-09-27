import styles from './Partners.module.scss';
import { RoundedContainer } from '../utils';

const PartnerLink = ({ link, imgSrc, name }) => {
  const image = link ? (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={imgSrc} alt="Badge" />
    </a>
  ) : (
    <img src={imgSrc} alt="Badge" />
  );

  return (
    <div className={styles.partner}>
      <RoundedContainer>
        {image}
      </RoundedContainer>
      <h4>{name}</h4>
    </div>
  );
};

const Partners = () => {
  const partnerList = [
    { link: '', imgSrc: '/assets/images/pt/ale.png', name: 'Antartic Logistics & Expeditions' },
    { link: 'https://www.facebook.com/guidepolaire/', imgSrc: '/assets/images/pt/bureauguidespolaire.png', name: 'Guide Polaire' },
    { link: 'https://www.dieteticienne-nutrition.fr/', imgSrc: '/assets/images/pt/coralievaugeois.png', name: 'Coralie Vaugeois' },
    { link: '', imgSrc: '/assets/images/pt/ferme_de_jeanne.jpg', name: 'La Ferme de Jeanne' },
    { link: '', imgSrc: '/assets/images/pt/as.png', name: 'Amandine Sauvée Graphiste' },
    { link: 'https://www.irvin.fr/', imgSrc: '/assets/images/pt/irvin.png', name: 'IRVIN' },
    { link: 'https://www.chu-rennes.fr/', imgSrc: '/assets/images/pt/chu.png', name: 'CHU Rennes' },
    { link: 'https://www.passeport-armorique.com/', imgSrc: '/assets/images/pt/passeportarmorique.png', name: 'Passeport Armorique' },
    { link: 'https://www.lessard.fr/', imgSrc: '/assets/images/pt/lessard.png', name: 'LESSARD' },
    { link: 'https://www.mooodagency.com/', imgSrc: '/assets/images/pt/mood.png', name: 'Moood Agency' },
    { link: 'https://www.prepasport-performance.fr/', imgSrc: '/assets/images/pt/prepa_sport.png', name: 'Prépa Sport Performance' },
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.container} id="partner">
      <div className={styles.content}>
        <div className={styles.title}>
          <h4 className="white">NOS PARTENAIRES</h4>
        </div>
        <div className={styles.partners}>
          {
            partnerList.map((partner) => (
              <PartnerLink
                key={partner.name}
                link={partner.link}
                imgSrc={partner.imgSrc}
                name={partner.name || 'name'}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Partners;
