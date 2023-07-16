import Header from '@/components/header/betterHeader'
import '@/styles/globals.css'
import { Inter,Open_Sans } from 'next/font/google'

import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";


const inter = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (<main className={inter.className}>
    <OverlayScrollbarsComponent className='min-h-screen' options={{
      scrollbars:{
        autoHide: 'leave',
        autoHideDelay: 1300,
      }}}>
      <Header/>
      
      <Component {...pageProps} />
    </OverlayScrollbarsComponent>
   </main>)
}
