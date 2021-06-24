import styles from './Sponsors.module.scss';
import { RoundedContainer } from '../utils';

const Sponsors = () => {
  const sponsorList = ['france3', 'ileetvilaine', 'northface', 'regbretagne'];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4 className="white">Sponsos</h4>
        <div className={styles.sponsors}>
            {
              sponsorList.map((key) => (
                <div className={styles.sponsor} key={key}>
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

export default Sponsors;
