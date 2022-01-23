/* eslint-disable */
import 'modern-css-reset/dist/reset.min.css';
import '../styles/typography.scss';
import '../components/medias/Carousel.scss';
import { Provider } from "reakit";

function MyApp({ Component, pageProps }) {
  return <Provider><Component {...pageProps} /></Provider>;
}

export default MyApp;
