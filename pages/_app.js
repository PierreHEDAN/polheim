/* eslint-disable */
import 'modern-css-reset/dist/reset.min.css';
import '../styles/typography.scss';
import '../components/medias/Carousel.scss';
import { Provider } from "reakit";
import ReactGA from 'react-ga;
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize({ gtmId: 'G-R3SM517DC5' });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return <Provider><Component {...pageProps} /></Provider>;
}

export default MyApp;
