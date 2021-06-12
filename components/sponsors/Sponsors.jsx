import styles from './Sponsors.module.scss';
import { RoundedContainer } from '../utils';

const Sponsors = () => (
  <div className={styles.container}>
    <h4 className="white">Sponsos</h4>
    <div className={styles.sponsors}>
        {
          [...Array(4).keys()].map((key) => (
            <div className={styles.sponsor}>
              <RoundedContainer>
                <img src={`./assets/images/sponsors/${key}.png`} alt="Badge" />
              </RoundedContainer>
            </div>
          ))
        }
    </div>
  </div>
);

export default Sponsors;
