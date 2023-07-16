import Header from '@/components/header/betterHeader'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<div className='test'>
    <Header/>
    <Component {...pageProps} />
   </div>)
}
