import {
  usePopoverState,
  Popover,
  PopoverDisclosure,
} from "reakit/Popover";
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {
  const popover = usePopoverState({ placement: "left-start" });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.socialMedias}>
          <PopoverDisclosure {...popover} as="div" className={styles.bars}>
              <img src="./assets/images/bars.svg" alt="Menu" />
          </PopoverDisclosure>
          <Popover {...popover} aria-label="Welcome">
            <div className={styles.menu} >
              Welcome to Reakit!
              {/*
              <a href="https://www.facebook.com/ExpeditionPolheim/?hc_ref=ARSexrmjy16PRoTFS65ZHrxdo-cFvOmxdbyL-GnKfynC1fgHI9j-yXibQzUdUfihep4&fref=nf&__tn__=kC-R" target="_blank" >
                <img src="./assets/images/facebook-f-brands.svg" alt="Facebook" />
              </a>
              <a href="mailto:expeditionpolheim@gmail.com">
                <img src="./assets/images/google-brands.svg" alt="Google" />
              </a>
              <a href="https://www.instagram.com/expedition_polheim/" target="_blank">
                <img src="./assets/images/instagram-brands.svg" alt="Instagram" />
              </a>
              <div className={styles.separator} />
              */}
            </div>
          </Popover>
        </div>
        <h1 className={`${styles.title} white uppercase`}>Polheim Expedition</h1>
        <span className={`${styles.subTitle} uppercase`}>
          <h2 className="secondary">2023</h2>
          <h2 className="primary">Pierre Hedan</h2>
        </span>
      </div>
      <img className={styles.bottomImage} src="./assets/images/homescreen.png" alt="Beautiful photography of antartica" />
    </div>
  );
}

export default HomeScreen;
