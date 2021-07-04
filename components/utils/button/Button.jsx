import styles from './Button.module.scss';

const Button = ({ type, title }) => (
  <button className={`${styles.button} ${styles[type]}`}>
    <span className="small">{ title }</span>
  </button>
);

export default Button;
