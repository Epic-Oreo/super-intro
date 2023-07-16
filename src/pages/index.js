import Image from 'next/image'

import { Inter,Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}

    >
    </main>
  )
}
