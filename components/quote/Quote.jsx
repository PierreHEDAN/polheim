import styles from './Quote.module.scss';
import QuoteSVG from './QuoteSVG';

const Quote = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <QuoteSVG
        style={{
          position: 'relative',
          top: '-100px',
        }}
      />
        <h3 className="secondary">Construire cette expédition et grandir ensemble</h3>
      <QuoteSVG style={{
        transform: "rotate(180deg)",
      }}/>
    </div>
  </div>
);

export default Quote;
