import styles from './Button.module.scss';

const Button = ({ type, title }) => (
  <div className={`${styles.button} ${styles[type]}`}>
    <span className="small">{ title }</span>
  </div>
);

export default Button;
