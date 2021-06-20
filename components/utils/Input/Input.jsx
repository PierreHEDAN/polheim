import styles from './Input.module.scss';

const Input = ({ type, value, placeholder, onChange }) => (
  <div className={styles.input}>
    <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
  </div>
)

export default Input