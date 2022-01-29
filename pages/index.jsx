import classnames from 'classnames';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/pages/Home.module.scss';
import HomeScreen from '../components/home-screen';
import Introduction from '../components/introduction';
import History from '../components/history';
import Travel from '../components/travel';
import AboutMe from '../components/about-me';
import Team from '../components/team';
import Skills from '../components/skills';
import After from '../components/after';
import AfterPhotos from '../components/after_photos';
import BigQuote from '../components/bigquote';
import Medias from '../components/medias';
import Quote from '../components/quote';
import Route from '../components/route';
import News from '../components/news';
import Partners from '../components/partners';
import Photos from '../components/photos';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';

export async function getStaticProps() {
  const res = await fetch(`http://api.theweather.com/index.php?api_lang=eu&localidad=12325&affiliate_id=53fqqdyhvp54&v=3.0`)
  const forecast = await res.json()

  if (!forecast) {
    return {
      notFound: true,
    }
  }

  return {
    props: { forecast: forecast.day[1] },
  }
}

export default function Home({ forecast }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [legendContent, setLegendContent] = useState();

  const [openModalTravel, setOpenModalTravel] = useState(false);
  const [modalContentTravel, setModalContentTravel] = useState();

  const handleOpenModal = (content, legend) => {
    if (content !== undefined) {
      setModalContent(content);
      setLegendContent(legend);
      setOpenModal(true);
    } else {
      setOpenModal(false);
      setModalContent();
      setLegendContent();
    }
  }

  const handleOpenModalTravel = (content) => {
    if (content !== undefined) {
      setModalContentTravel(content);
      setOpenModalTravel(true);
    } else {
      setOpenModalTravel(false);
      setModalContentTravel();
    }
  }

  return (
    <div className={classnames({
        [styles.home]: true,
        [styles.blur]: openModal,
      })}>
      <Head>
        <title>Expedition Polheim</title>
        <meta name="description" content="Atartica by Pierre Hedan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { openModal && (
        <div style={{ zIndex: 20000000 }} id={styles.['modal-root']} onClick={() => handleOpenModal()}>
          <div className={styles.modalContainer}>
            <div className={styles.modalImage}>
              {modalContent}
            </div>
            <div className={styles.modalLegend}>
              {legendContent}
            </div>
          </div>
        </div>
      )}
      { openModalTravel && (
        <div style={{ zIndex: 20000000 }} id={styles.['modal-root']} onClick={() => handleOpenModalTravel()}>
          {modalContentTravel}
        </div>
      )}
      <section className={styles.homeScreen}>
        <HomeScreen />
      </section>
      <section className={styles.introduction}>
        <Introduction />
      </section>
      <section className={styles.history}>
        <History />
      </section>
      <section className={styles.route}>
        <Route forecast={forecast} onOpenImage={(image) => handleOpenModalTravel(image)} />
      </section>
      <section className={styles.travel}>
        <Travel onOpenImage={(image, content) => handleOpenModal(image, content)} />
      </section>
      <section className={styles.aboutMe}>
        <AboutMe />
      </section>
      <section className={styles.quote}>
        <Quote />
      </section>
      <section className={styles.team}>
        <Team />
      </section>
      <section className={styles.skills}>
        <Skills />
      </section>
      <section className={styles.after}>
        <After />
      </section>
      <section className={styles.afterPhotos}>
        <AfterPhotos onOpenImage={(image) => handleOpenModal(image)} />
      </section>
      <section className={styles.bigquote}>
        <BigQuote />
      </section>
      <section className={styles.partners}>
        <Partners />
      </section>
      <section className={styles.medias}>
        <Medias />
      </section>
      <section className={styles.news}>
        <News />
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
