import { IconCash, IconClipboard, IconHome, IconMessageChatbot, IconMoneybag } from "@tabler/icons-react"

const Header = () => {
  // home, features, pricing FAQ, login, signup

  return (
    <div className="w-full h-12 flex flex-row justify-center items-center gap-2 relative mt-2">
      <div className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"><IconHome width={20} height={20}/> Home</div>
      <div className="w-[2px] h-3/4 bg-white"></div>
      <div className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"><IconClipboard width={20} height={20}/> Features</div>
      <div className="w-[2px] h-3/4 bg-white"></div>
      <div className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"><IconCash width={20} height={20}/> Pricing</div>
      <div className="w-[2px] h-3/4 bg-white"></div>
      <div className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"><IconMessageChatbot width={20} height={20}/> FAQ</div>
    
      <div className="absolute right-2 flex gap-2 flex-row items-center h-8 overflow-hidden">
        <div className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative">Login</div>
        <div className="w-[2px] h-full bg-white"></div>
        <div className="flex flex-row items-center cursor-pointer after:w-10/12 after:h-[2px] after:absolute after:bg-transparent hover:after:bg-white after:duration-150 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative"> Signup</div>
      </div>

      <div className="w-11/12 bg-white h-[3px] absolute -bottom-2 rounded-full"></div>

    </div>
  )
}


export default Header