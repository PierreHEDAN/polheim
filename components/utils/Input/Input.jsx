import styles from './Input.module.scss';

const Input = ({ type, placeholder, name, id }) => (
  <div className={styles.input}>
    <input type={type} name={name} id={id} placeholder={placeholder} />
  </div>
)

export default Input