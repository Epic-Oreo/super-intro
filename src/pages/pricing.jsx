import Header from "@/components/header/betterHeader"
import Image from "next/image"
import Link from "next/link"

const Pricing = () => {
    return(
        <div className="">
            <Image src={"/gtaback.jpg"} width={400} height={400} alt="blind lol" className="blur-md h-full w-full"/>
            <h1 className="w-full text-center text-7xl font-semibold absolute mt-0 top-36 underline">Pricing</h1>
            {/* payment plans */}
            <div className="flex w-full h-full gap-8 mt-12 justify-center absolute top-60 left-0">
                
                <div className="rounded-md relative w-64 h-[27rem] border-2 bg-black opacity-80 duration-200 hover:scale-[101%]">
                    <div className="h-1/2 w-full absolute top-[14rem] left-[10rem] -translate-x-1/2 -translate-y-1/2 -z-10">
                        <Image src={"/pistol.webp"} width={200} height={200} alt="Still blind" className="w-[12.8rem] h-36 -rotate-[60deg] blur-sm"/>
                    </div>
                    <div className="h-full w-full">
                        <h1 className="text-center text-3xl mt-3 font-semibold">Light</h1>
                        <hr className="mt-1 border-2 w-4/5 relative left-1/2 -translate-x-1/2"></hr>
                    
                        <ul className="mt-2 text-center font-semibold">
                            <li className="mb-3">Access to our community</li>
                            <li className="mb-3">24/7 Live Support</li>
                            <li className="mb-3">Grief features</li>
                            <li className="mb-3">Trolling features</li>
                            <li >Security & Protections</li>
                        </ul>
                        <hr className="mt-1 border-2 w-4/5 relative left-1/2 -translate-x-1/2"></hr>
                        <h1 className="text-center mt-4 font-bold text-red-300 text-xl ">$3 monthly</h1>
                        <hr className="mt-6 border-1 w-1/4 absolute left-[2.7rem]"></hr>
                        <hr className="mt-6 border-1 w-1/4 absolute left-[9.1rem]"></hr>
                        <h1 className="font-bold text-2xl absolute mt-8 left-1/2 top-[16.2rem] -translate-x-1/2">OR</h1>
                        <h1 className="text-center mt-12 font-bold text-xl text-red-300">$25 One Time</h1>
                        <button className="absolute left-1/2 -translate-x-1/2 border-2 mt-2 p-1 px-6 rounded-lg hover:bg-white hover:text-black cursor-pointer duration-200">Purchase</button>
                    </div>
                    
                </div>
                <div className="rounded-md relative w-64 h-[27rem] border-2 bg-black opacity-80 duration-200 hover:scale-[101%]">
                    <div className="h-1/2 w-full absolute top-[13rem] left-[10rem] -translate-x-1/2 -translate-y-1/2 -z-10">
                        <Image src={"/biggergun.webp"} width={200} height={200} alt="Still blind" className="blur-sm w-64 h-48 transform -scale-x-100 -rotate-[60deg]"/>
                    </div>
                    <div className="h-full w-full">
                        <h1 className="text-center text-3xl mt-3 font-semibold">Medium</h1>
                        <hr className="mt-1 border-2 w-4/5 relative left-1/2 -translate-x-1/2"></hr>
                    
                        <ul className="mt-2 text-center font-semibold">
                            <li className="mb-3">All perks from light rank</li>
                            <li className="mb-3">Level Setting</li>
                            <li className="mb-3">Recoveries</li>
                            <li className="mb-3">Custom Outfits</li>
                            <li >Vehicle Customization</li>
                        </ul>
                        <hr className="mt-1 border-2 w-4/5 relative left-1/2 -translate-x-1/2"></hr>
                        <h1 className="text-center mt-4 font-bold text-red-300 text-xl ">$6 monthly</h1>
                        <hr className="mt-6 border-1 w-1/4 absolute left-[2.7rem]"></hr>
                        <hr className="mt-6 border-1 w-1/4 absolute left-[9.1rem]"></hr>
                        <h1 className="font-bold text-2xl absolute mt-8 left-1/2 top-[16.2rem] -translate-x-1/2">OR</h1>
                        <h1 className="text-center mt-12 font-bold text-xl text-red-300">$40 One Time</h1>
                        <button className="absolute left-1/2 -translate-x-1/2 border-2 mt-2 p-1 px-6 rounded-lg hover:bg-white hover:text-black cursor-pointer duration-200">Purchase</button>
                    </div>
                    
                </div>
                <div className="rounded-md relative w-64 h-[27rem] border-2 bg-black opacity-80 duration-200 hover:scale-[101%]">
                    <div className="absolute top-36 -z-10">
                            <Image src={"/gtarpg.webp"} width={384} height={187} alt="Still blind" className="blur-sm w-full h-full -rotate-[60deg]"/>
                    </div>
                    <div className="h-full w-full">
                        <h1 className="text-center text-3xl mt-3 font-semibold">Heavy</h1>
                        <hr className="mt-1 border-2 w-4/5 relative left-1/2 -translate-x-1/2"></hr>
                    
                        <ul className="mt-2 text-center font-semibold">
                            <li className="mb-3">All perks of Medium</li>
                            <li className="mb-3">Money Setting</li>
                            <li className="mb-3">Scripts</li>
                            <li className="mb-3">Discord rank</li>
                            <li >Vehicle Customization</li>
                        </ul>
                        <hr className="mt-1 border-2 w-4/5 relative left-1/2 -translate-x-1/2"></hr>
                        <h1 className="text-center mt-4 font-bold text-red-300 text-xl ">$20 monthly</h1>
                        <hr className="mt-6 border-1 w-1/4 absolute left-[2.7rem]"></hr>
                        <hr className="mt-6 border-1 w-1/4 absolute left-[9.1rem]"></hr>
                        <h1 className="font-bold text-2xl absolute mt-8 left-1/2 top-[16.2rem] -translate-x-1/2">OR</h1>
                        <h1 className="text-center mt-12 font-bold text-xl text-red-300">$100 One Time</h1>
                        <button className="absolute left-1/2 -translate-x-1/2 border-2 mt-2 p-1 px-6 rounded-lg hover:bg-white hover:text-black cursor-pointer duration-200">Purchase</button>
                    </div>
                    
                </div>
                <div className="absolute top-[60%]">
                    <Link href={"/features"}><button className="py-4 px-8 border-2 rounded-lg bg-black hover:bg-white hover:text-black duration-200 font-semibold">Features</button></Link>
                </div>
            </div>
            


        </div>
    )

}
export default Pricing