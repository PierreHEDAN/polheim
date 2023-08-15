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
    { link: 'https://www.dieteticienne-nutrition.fr/', imgSrc: '/assets/images/pt/coralievaugeois.jpeg', name: 'Coralie Vaugeois' },
    { link: '', imgSrc: '/assets/images/pt/as.png', name: 'Amandine Sauvée Graphiste' },
    { link: 'https://www.irvin.fr/', imgSrc: '/assets/images/pt/irvin.png', name: 'IRVIN' },
    { link: 'https://www.chu-rennes.fr/', imgSrc: '/assets/images/pt/chu.png', name: 'CHU Rennes' },
    { link: 'https://www.lessard.fr/', imgSrc: '/assets/images/pt/lessard.png', name: 'Lessard' },
    { link: 'https://www.mooodagency.com/', imgSrc: '/assets/images/pt/mood.png', name: 'Moood Agency' },
    { link: 'https://www.prepasport-performance.fr/', imgSrc: '/assets/images/pt/prepa_sport.jpeg', name: 'Prépa Sport Performance' },
    { link: 'https://www.flex-bat.fr/', imgSrc: '/assets/images/pt/flex_bat.jpeg', name: 'Flex Bat' },
    { link: 'https://yema.com/', imgSrc: '/assets/images/pt/yema.jpeg', name: 'Yema' },
    { link: 'https://www.m-extend.com/', imgSrc: '/assets/images/pt/mextrend.jpeg', name: 'M-Extend' },
    { link: 'https://www.brainmoove.com/', imgSrc: '/assets/images/pt/brainmoove.jpeg', name: 'Brainmoove' },
    { link: 'https://www.groupe-helios.com/', imgSrc: '/assets/images/pt/helios.png', name: 'Hélios' },
    { link: 'https://www.davidson.fr/nos-filiales/davidson-ouest', imgSrc: '/assets/images/pt/davidson.png', name: 'Davidson' },
    { link: 'http://www.kemijoki.fr/', imgSrc: '/assets/images/pt/kemijoki.jpeg', name: 'Kemijoki' },
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
