import { IconCar, IconCode, IconLock, IconMoneybag, IconShirt } from "@tabler/icons-react"

const Features = () => {
  //  Recoverys, Protection, Greifing, Custom Outfits, Run Lua


  const list1 = [
    {
      "name": "Recoverys",
      "description":"Get up to $8,500,000/sec with our exclusive recovery method",
      "icon":<IconMoneybag className="w-8 h-8"/>
    },
    {
      "name": "Protection",
      "description":"Some of the best protection any menu can offer. Can block 98% of tested menu attacks and can block 100% of the top 10 menus attacks",
      "icon":<IconLock className="w-8 h-8"/>
    },
  ]
  const list2 = [
    {
      "name": "Vehicle Customization",
      "description":"Customize virtualy every part of your vehicle. from the color to the way it drives you can make it do whatever you want.",
      "icon":<IconCar className="w-8 h-8"/>
    },
    {
      "name": "Custom Scripts",
      "description":"Load any custom scripts from our and other menus. It is made to work with most scripts and is even compatible with 2take1 only scripts.",
      "icon":<IconCode className="w-8 h-8"/>
    },

  ]
  const list3 = [
    {
      "name": "Custom Outfits",
      "description":"Save and manage your own custom outfits, they can be whatever you want. Get as crazy or silly as you feel. If you are not feeling creative you can just download some from our or many other discords for free!",
      "icon":<IconShirt className="w-8 h-8"/>
    },
  ]



  return (
    <div>
      <div className="absolute h-screen w-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl brightness-50 -z-10"></div>
      <h1 className="text-7xl font-semibold text-center mt-5">Features</h1>
      <div className="flex flex-row justify-center mt-10 gap-4">
        <div className="flex flex-col w-96 gap-4">
          {
            list1.map((item, index)=>{
              return (
                <div key={index} className="w-full border-2 border-white  rounded-lg hover:scale-[101%] duration-100 ease-in">
                  <span className="text-lg flex flex-row items-center p-2 border-b-2 border-white bg-white text-black font-bold">{item.icon} <h1 className="text-2xl">{item.name}</h1></span>
                  <p className="p-2">{item.description}</p>
                
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col w-96 gap-4">
          {
            list2.map((item, index)=>{
              return (
                <div key={index} className="w-full border-2 border-white rounded-lg hover:scale-[101%] duration-100 ease-in">
                  <span className="text-lg flex flex-row items-center p-2 border-b-2 border-white bg-white text-black font-bold">{item.icon} <h1 className="text-2xl">{item.name}</h1></span>
                  <p className="p-2">{item.description}</p>
                
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col w-96 gap-4">
          {
            list3.map((item, index)=>{
              return (
                <div key={index} className="w-full border-2 border-white rounded-lg hover:scale-[101%] duration-100 ease-in">
                  <span className="text-lg flex flex-row items-center p-2 border-b-2 border-white bg-white text-black font-bold">{item.icon} <h1 className="text-2xl">{item.name}</h1></span>
                  <p className="p-2">{item.description}</p>
                
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    
  )
}

export default Features;