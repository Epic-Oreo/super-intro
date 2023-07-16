import Image from 'next/image'
import { airstikeOutlineRegular, airstikePlatinumRegular, airstikeRegular } from '@/utils/fonts'




export default function Home() {
  return (
    <main>

      <Image src="/background_2.jpg" width={560} height={470} className='w-full h-auto blur-md absolute -z-10 brightness-50' priority={true} clas />
      <h1 className={`text-9xl bg-clip-text text-transparent bg-gradient-to-t from-orange-500 via-red-500 bg-pink-500 w-full text-center drop-shadow-[0_0px_5px_rgba(255,255,255,0.3)] ${airstikeOutlineRegular .className}`}>COMP HAX</h1>

      <h3 className='text-center text-xl text-white/70'>A modern redesign of the GTAV mod menu</h3>

    </main>
  )
}
