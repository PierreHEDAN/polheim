import styles from './Partners.module.scss';
import { RoundedContainer } from '../utils';

const Partners = () => (
  <div className={styles.container}>
    <h4 className="secondary">Partenaires</h4>
    <div className={styles.partners}>
        {
          [...Array(4).keys()].map((key) => (
            <div className={styles.partner}>
              <RoundedContainer>
                <img src={`./assets/images/sponsors/${key}.png`} alt="Badge" />
              </RoundedContainer>
            </div>
          ))
        }
    </div>
  </div>
);

export default Partners;
