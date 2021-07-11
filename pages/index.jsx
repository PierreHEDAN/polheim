import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/pages/Home.module.scss';
import HomeScreen from '../components/home-screen';
import Introduction from '../components/introduction';
import AboutMe from '../components/about-me';
import Route from '../components/route';
import News from '../components/news';
import Partners from '../components/partners';
import Photos from '../components/photos';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [photo, setPhoto] = useState();

  const handleOpenModal = (photo) => {
    if (photo !== undefined) {
      setPhoto(photo);
      setOpenModal(true);
    } else {
      setOpenModal(false);
      setPhoto();
    }
  }

  return (
    <div className={styles.home}>
      <Head>
        <title>Antartica</title>
        <meta name="description" content="Atartica by Pierre Hedan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { openModal && (
        <div id="modal-root" onClick={() => handleOpenModal()}>
          <img src={`./assets/images/photos/${photo}.png`} alt="Wide photo" />
        </div>
      )}
      <section className={styles.homeScreen}>
        <HomeScreen />
      </section>
      <section className={styles.introduction}>
        <Introduction />
      </section>
      <section className={styles.aboutMe}>
        <AboutMe />
      </section>
      <section className={styles.route}>
        <Route />
      </section>
      <section className={styles.news}>
        <News />
      </section>
      <section className={styles.partners}>
        <Partners />
      </section>
      <section className={styles.photos}>
        <Photos onOpenPhoto={(photo) => handleOpenModal(photo)} />
      </section>
      <section className={styles.newsletter}>
        <Newsletter />
      </section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  );
};
