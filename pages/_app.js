import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/js/src/dropdown'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
config.autoAddCss = false; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import Router, { useRouter } from "next/router"
import { useEffect } from "react"
export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(()=>{
    var x = localStorage.getItem('loggedIn')
    if(x=='logged'){

    }
    else{
      Router.push('/auth/login')
    }
  })
    return (
      <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
    )

}
