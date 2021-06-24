import styles from './Partners.module.scss';
import { RoundedContainer } from '../utils';

const Partners = () => {
  const sponsorList = ['france3', 'ileetvilaine', 'northface', 'regbretagne'];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4 className="secondary">Partenaires</h4>
        <div className={styles.partners}>
            {
              sponsorList.map((key) => (
                <div className={styles.partner} key={key}>
                  <RoundedContainer>
                    <img src={`./assets/images/sp/${key}.png`} alt="Badge" />
                  </RoundedContainer>
                </div>
              ))
            }
        </div>
      </div>
    </div>
)};

export default Partners;
