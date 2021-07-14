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

export async function getStaticProps() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=-77.6554&lon=168.2227&units=metric&exclude=minutely,hourly,daily,alerts&appid=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}`)
  const forecast = await res.json()

  if (!forecast) {
    return {
      notFound: true,
    }
  }

  return {
    props: { forecast: forecast.current },
  }
}

export default function Home({ forecast }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const handleOpenModal = (content) => {
    if (content !== undefined) {
      setModalContent(content);
      setOpenModal(true);
    } else {
      setOpenModal(false);
      setModalContent();
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
          {modalContent}
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
        <Route forecast={forecast} onOpenImage={(image) => handleOpenModal(image)} />
      </section>
      <section className={styles.news}>
        <News />
      </section>
      <section className={styles.partners}>
        <Partners />
      </section>
      <section className={styles.photos}>
        <Photos onOpenImage={(image) => handleOpenModal(image)} />
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
