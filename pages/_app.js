/* eslint-disable */
import 'modern-css-reset/dist/reset.min.css';
import '../styles/typography.scss';
import '../components/medias/Carousel.scss';
import { Provider } from "reakit";
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TJ742C2' });
  }, []);
  return <Provider><Component {...pageProps} /></Provider>;
}

export default MyApp;
