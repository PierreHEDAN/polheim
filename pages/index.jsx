import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import HomeScreen from '../components/HomeScreen';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Antartica</title>
        <meta name="description" content="Atartica by Pierre Hedan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.homeScreen}>
        <HomeScreen />
      </section>
      <section className={styles.introduction}>
        Introduction
      </section>
      <section className={styles.aboutMe}>
        About Me
      </section>
      <section className={styles.route}>
        Route
      </section>
      <section className={styles.news}>
        News
      </section>
      <section className={styles.sponsors}>
        Sponsors
      </section>
      <section className={styles.partners}>
        Partners
      </section>
      <section className={styles.photos}>
        Photos
      </section>
      <section className={styles.newsletter}>
        Newsletter
      </section>
      <footer>Footer</footer>
    </div>
  );
};
