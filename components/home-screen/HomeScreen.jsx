import React from 'react';
import classnames from 'classnames';
import {
  usePopoverState,
  Popover,
  PopoverDisclosure,
} from 'reakit/Popover';
import styles from './HomeScreen.module.scss';

const Button = ({ name, link }) => (
  <div className={styles.navbtn}>
    <a href={link}>{name}</a>
  </div>
);

const Facebook = () => (
  <div className={styles.fb}>
    <a href="https://www.facebook.com/ExpeditionPolheim/?hc_ref=ARSexrmjy16PRoTFS65ZHrxdo-cFvOmxdbyL-GnKfynC1fgHI9j-yXibQzUdUfihep4&fref=nf&__tn__=kC-R" target="_blank" rel="noreferrer">
      <img src="./assets/images/facebook-f-brands.svg" alt="Facebook" />
    </a>
  </div>
);

const Insta = () => (
  <div className={styles.fb}>
    <a href="https://www.instagram.com/expedition_polheim/" target="_blank" rel="noreferrer">
      <img src="./assets/images/instagram-brands.svg" alt="Instagram" />
    </a>
  </div>
);

const Mail = () => (
  <div className={styles.fb}>
    <a href="mailto:expeditionpolheim@gmail.com">
      <img src="./assets/images/mail-brands.svg" alt="Google" />
    </a>
  </div>
);

const MediaBrands = () => (
  <div className={classnames(styles.navbtn, styles.mediabtn)}>
    <Mail />
    <Facebook />
    <Insta />
  </div>
);

const HomeScreen = () => {
  const popover = usePopoverState({ placement: 'left-start' });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.socialMedias}>
          <PopoverDisclosure
            {...popover}
            as="div"
            className={classnames({
              [styles.bars]: true,
            })}
          >
            {popover.visible ? <img src="./assets/images/xmark-solid.svg" alt="Close menu" /> : <img src="./assets/images/bars.svg" alt="Open Menu" />}
          </PopoverDisclosure>
          <Popover {...popover} aria-label="Welcome">
            <div className={styles.menu}>
              <Button name="L'expedition" link="#expedition" />
              <Button name="L'équipe" link="#team" />
              <Button name="Notre but" link="#purpose" />
              <Button name="Les partenaires" link="#partner" />
              <Button name="Actualités" link="#news" />
              <Button name="Galerie" link="#galerie" />
              <MediaBrands />
            </div>
          </Popover>
        </div>
        <h1 className={`${styles.title} white uppercase`}>Polheim Expedition</h1>
        <span className={`${styles.subTitle} uppercase`}>
          <h2 className="secondary">2023</h2>
          <h2 className="primary">Pierre Hedan</h2>
        </span>
      </div>
      <img className={styles.bottomImage} src={require('../../public/assets/images/homescreen.png')} alt="Beautiful photography of antartica" />
    </div>
  );
};

export default HomeScreen;
