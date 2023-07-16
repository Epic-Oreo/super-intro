import { IconCash, IconClipboard, IconHome, IconMessageChatbot, IconMoneybag } from "@tabler/icons-react"
import Link from "next/link"

const Header = () => {
  // home, features, pricing FAQ, login, signup

  return (
    <div className="w-full h-12 flex flex-row justify-center items-center gap-2 relative mt-2 mb-2 ">
      <Link href="/" className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"><IconHome width={20} height={20}/> Home</Link>
      <div className="w-[2px] h-3/4 bg-white"></div>
      <Link href="/features" className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"><IconClipboard width={20} height={20}/> Features</Link>
      <div className="w-[2px] h-3/4 bg-white"></div>
      <Link href="/pricing" className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"><IconCash width={20} height={20}/> Pricing</Link>
      <div className="w-[2px] h-3/4 bg-white"></div>
      <Link href="/faq" className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"><IconMessageChatbot width={20} height={20}/> FAQ</Link>
    
      <div className="absolute right-2 flex gap-2 flex-row items-center h-8 overflow-hidden">
        <Link href="/login" className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative">Login</Link>
        <div className="w-[2px] h-full bg-white"></div>
        <div className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"> Signup</div>
      </div>

      <div className="w-11/12 bg-white h-[3px] absolute -bottom-2 rounded-full"></div>

    </div>
  )
}


export default Header