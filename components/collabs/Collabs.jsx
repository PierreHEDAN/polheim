import styles from './Collabs.module.scss';
import { RoundedContainer } from '../utils';

const CollabLink = ({ link, imgSrc, name }) => {
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

const Collabs = () => {
  const partnerList = [
    { link: '', imgSrc: require('../../public/assets/images/pt/ale.png'), name: 'Antartic Logistics & Expeditions' },
    { link: '', imgSrc: require('../../public/assets/images/pt/ferme_de_jeanne.jpg'), name: 'La Ferme de Jeanne' },
    { link: 'https://www.facebook.com/guidepolaire/', imgSrc: require('../../public/assets/images/pt/bureauguidespolaire.png'), name: 'Guide Polaire' },
    { link: 'https://www.lyophilise.fr/', imgSrc: require('../../public/assets/images/pt/lyo.jpeg'), name: 'Lyophilisé & Co' },
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.container} id="partner">
      <div className={styles.content}>
        <div className={styles.title}>
          <h4 className="white">
            NOS
            {' '}
            <b>COLLABORATEURS</b>
          </h4>
        </div>
        <div className={styles.partners}>
          {
            partnerList.map((partner) => (
              <CollabLink
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

export default Collabs;
