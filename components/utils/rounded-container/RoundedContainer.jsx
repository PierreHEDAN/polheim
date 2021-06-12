import styles from './RoundedContainer.module.scss';

const RoundedContainer = ({ children }) => (
  <div className={styles.roundedContainer}>
    <div className={styles.content}>
      { children }
    </div>
  </div>
);

export default RoundedContainer;
