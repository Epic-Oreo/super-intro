import Header from "@/components/header/betterHeader"
import Image from "next/image"

const Pricing = () => {
    return(
        <div className="">
            <Image src={"/gtaback.jpg"} width={400} height={400} alt="blind lol" className="blur-md h-full w-full"/>
            <h1 className="w-full text-center text-4xl font-semibold absolute mt-0 top-36">Pricing</h1>
            {/* payment plans */}
            <div className="flex w-full h-full gap-8 mt-12 justify-center absolute top-60 left-0">
                
                <div className="rounded-md relative w-64 h-96 border-2">
                    <div className="h-full w-full absolute top-[18rem] left-[10rem] -translate-x-1/2 -translate-y-1/2">
                        <Image src={"/pistol.webp"} width={100} height={500} alt="Still blind" className="w-full h-1/2 -rotate-[60deg] blur-sm"/>
                    </div>
                </div>
                <div className="rounded-md w-64 h-96 border-2"></div>
                <div className="rounded-md relative w-64 h-96 border-2">
                    <div className="h-full w-full absolute top-[18rem] left-[10rem] -translate-x-1/2 -translate-y-1/2">
                        <Image src={"/biggergun.webp"} width={100} height={500} alt="Still blind" className="w-full h-1/2 blur-sm"/>
                    </div>
                </div>
                <div className="rounded-md w-64 h-96 border-2"></div>
            </div>


        </div>
    )

}
export default Pricing