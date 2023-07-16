import Image from 'next/image'
import { airstikeOutlineRegular, airstikePlatinumRegular, airstikeRegular } from '@/utils/fonts'
import { ButtonWhiteOutline } from '@/components/buttons/whiteOutline'
import Link from 'next/link'



export default function Home() {
  return (
    <main>

      <Image src="/background_2.jpg" width={560} height={470} className='w-full h-auto blur-md absolute -z-10 brightness-50' priority={true} />
      <h1 className={`pt-28 text-9xl bg-clip-text text-transparent bg-gradient-to-t from-orange-500 via-red-500 bg-pink-500 w-full text-center animate-shadow-pulse ${airstikeOutlineRegular .className}`}>COMP HAX</h1>

      <h3 className='text-center text-xl text-white/70 mt-28'>A modern redesign of the GTAV mod menu</h3>

      <div className='flex flex-row justify-center gap-2 mt-2'>
        <Link href={"/pricing"}><ButtonWhiteOutline >Get Started</ButtonWhiteOutline></Link>
        <Link href={"/features"}><ButtonWhiteOutline>Features</ButtonWhiteOutline></Link>
      </div>



    </main>
  )
}
