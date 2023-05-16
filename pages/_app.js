import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
config.autoAddCss = false; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { store } from '@/store/store';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
    return (
      <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
    )

}
