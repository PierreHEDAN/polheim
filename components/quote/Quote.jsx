import styles from './Quote.module.scss';
import QuoteSVG from './QuoteSVG';

const Quote = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.quote}>
        <QuoteSVG />
      </div>
        <h3 className="secondary">Construire cette expédition et grandir ensemble</h3>
      <div className={styles.quoteEnd}>
        <QuoteSVG style={{
          transform: "rotate(180deg)",
        }}/>
      </div>
    </div>
  </div>
);

export default Quote;
