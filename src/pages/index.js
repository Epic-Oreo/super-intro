import Image from 'next/image'
import { airstikeOutlineRegular, airstikePlatinumRegular, airstikeRegular } from '@/utils/fonts'
import { ButtonWhiteOutline } from '@/components/buttons/whiteOutline'
import Link from 'next/link'
import { IconBolt } from '@tabler/icons-react'


export default function Home() {
  return (
    <main>

      <Image src="/background_2.jpg" width={560} height={470} className='w-full h-auto blur-md absolute -z-10 brightness-50' priority={true} />
      <h1 className={`pt-28 text-9xl bg-clip-text text-transparent bg-gradient-to-t from-orange-500 via-red-500 bg-pink-500 w-full text-center animate-shadow-pulse  ${airstikeOutlineRegular .className}`}>COMP HAX</h1>

      <h3 className='text-center text-xl text-white/70 mt-28'>A modern redesign of the GTAV mod menu</h3>

      <div className='flex flex-row justify-center gap-2 mt-2'>
        <Link href={"/pricing"}><ButtonWhiteOutline >Get Started</ButtonWhiteOutline></Link>
        <Link href={"/features"}><ButtonWhiteOutline>Features</ButtonWhiteOutline></Link>
      </div>

      <div className='w-full flex flex-row justify-center mt-20'>
        <div className='w-[65rem] bg-black/30 rounded-xl p-4'>
          <h1 className='text-4xl text-center font-bold'>Why choose us?</h1>
          <div className='grid grid-cols-2 mt-5 gap-2'>
            <div className='w-full h-32 hover:bg-black/30 duration-200 outline-2 outline-black/30 outline rounded-xl'>
              <h3 className='text-3xl ml-2 mt-2 font-semibold flex items-center'><IconBolt width={30} height={30}/>Fast</h3>
              <p className='m-4'>Injecting the menu takes just a few seconds and dose not even set off most antivriuses!</p>
            </div>
            <div className='w-full h-32 hover:bg-black/30 duration-200 outline-2 outline-black/30 outline rounded-xl'>
              <h3 className='text-3xl ml-2 mt-2 font-semibold flex items-center'><IconBolt width={30} height={30}/>Cheap</h3>
              <p className='m-4'>It only costs 3$ to try! if you dont like it (not likely) you have not lost that much money.</p>
            </div>
            <div className='w-full h-32 hover:bg-black/30 duration-200 outline-2 outline-black/30 outline rounded-xl'>
              <h3 className='text-3xl ml-2 mt-2 font-semibold flex items-center'><IconBolt width={30} height={30}/>Easy</h3>
              <p className='m-4'>Our simple and easy to use menu can be used by anyone!</p>
            </div>
            <div className='w-full h-32 hover:bg-black/30 duration-200 outline-2 outline-black/30 outline rounded-xl'>
              <h3 className='text-3xl ml-2 mt-2 font-semibold flex items-center'><IconBolt width={30} height={30}/>Powerful</h3>
              <p className='m-4'>This cheap and easy menu can do so much. it has amazing recoverys and can block all attacks from other menus!</p>
            </div>
          </div>
        </div>
      </div>
      

    </main>
  )
}
