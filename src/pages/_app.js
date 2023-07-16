import Header from '@/components/header/betterHeader'
import '@/styles/globals.css'
import { Inter,Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (<main className={inter.className}>
    <Header/>
    <Component {...pageProps} />
   </main>)
}
