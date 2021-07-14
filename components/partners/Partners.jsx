import styles from './Partners.module.scss';
import { RoundedContainer } from '../utils';

const Partners = () => {
  const partnerList = [
    { link: '', imgSrc: 'amandinesauve'},
    { link: 'https://www.facebook.com/guidepolaire/', imgSrc: 'bureauguidespolaire'},
    { link: 'https://www.dieteticienne-nutrition.fr/', imgSrc: 'coralievaugeois'},
    { link: 'https://www.irvin.fr/', imgSrc: 'irvin'},
    { link: 'https://www.passeport-armorique.com/', imgSrc: 'passeportarmorique'},
    { link: 'https://polarctika.com/', imgSrc: 'polarctika'},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4 className="white">Partenaires</h4>
        <div className={styles.partners}>
            {
              partnerList.map((partner) => (
                <div className={styles.partner} key={partner.imgSrc}>
                  <RoundedContainer>
                    <a href={partner.link} target="_blank">
                      <img src={`./assets/images/pt/${partner.imgSrc}.png`} alt="Badge" />
                    </a>
                  </RoundedContainer>
                </div>
              ))
            }
        </div>
      </div>
    </div>
)};

export default Partners;
