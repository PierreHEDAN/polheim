import React from 'react';
import classnames from 'classnames';
import {
  usePopoverState,
  Popover,
  PopoverDisclosure,
} from 'reakit/Popover';
import styles from './HomeScreen.module.scss';

const Button = ({ name, link, onClick }) => (
  <div className={styles.navbtn}>
    <a href={link} onClick={onClick}>{name}</a>
  </div>
);

const Facebook = () => (
  <div className={styles.fb}>
    <a href="https://www.facebook.com/ExpeditionPolheim/?hc_ref=ARSexrmjy16PRoTFS65ZHrxdo-cFvOmxdbyL-GnKfynC1fgHI9j-yXibQzUdUfihep4&fref=nf&__tn__=kC-R" target="_blank" rel="noreferrer">
      <img src={require('../../public/assets/images/facebook-f-brands.svg')} alt="Facebook" />
    </a>
  </div>
);

const Insta = () => (
  <div className={styles.fb}>
    <a href="https://www.instagram.com/expedition_polheim/" target="_blank" rel="noreferrer">
      <img src={require('../../public/assets/images/instagram-brands.svg')} alt="Instagram" />
    </a>
  </div>
);

const Mail = () => (
  <div className={styles.fb}>
    <a href="mailto:expeditionpolheim@gmail.com">
      <img src={require('../../public/assets/images/mail-brands.svg')} alt="Google" />
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
    <div
      className={styles.container}
      style={{
        background: `no-repeat center url(${require('../../public/assets/images/homescreenbg.png?resize&size=1200')})`,

      }}
    >
      <div className={styles.content}>
        <div className={styles.socialMedias}>
          <PopoverDisclosure
            {...popover}
            as="div"
            className={classnames({
              [styles.bars]: true,
            })}
          >
            {popover.visible ? <img src={require('../../public/assets/images/xmark-solid.svg')} alt="Close menu" /> : <img src={require('../../public/assets/images/bars.svg')} alt="Open Menu" />}
          </PopoverDisclosure>
          <Popover {...popover} aria-label="Welcome">
            <div className={styles.menu}>
              <Button name="L'expedition" link="#expedition" onClick={popover.hide} />
              <Button name="L'équipe" link="#team" onClick={popover.hide} />
              <Button name="Notre but" link="#purpose" onClick={popover.hide} />
              <Button name="Les partenaires" link="#partner" onClick={popover.hide} />
              <Button name="Actualités" link="#news" onClick={popover.hide} />
              <Button name="Galerie" link="#galerie" onClick={popover.hide} />
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
      <img className={styles.bottomImage} src={require('../../public/assets/images/homescreen.png?resize&size=2400')} alt="Beautiful photography of antartica" />
    </div>
  );
};

export default HomeScreen;
