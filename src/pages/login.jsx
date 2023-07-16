import { ButtonWhiteOutline } from "@/components/buttons/whiteOutline";

const Login = () => {
  return (
    <main className="w-full flex flex-col items-center pt-4 ">

      <div className="w-96 border-2 border-white rounded-xl bg-[url('/background_3.jpg')] overflow-clip bg-cover">
        <div className="backdrop-blur-md p-4 rounded-xl">
          <h1 className="text-4xl mt-0 text-center">Login</h1>

          <form className="flex flex-col items-center mt-5 gap-2">
            <input type="text" name="hehe" id="haha" placeholder="Username" className="px-2 py-1 bg-transparent border-2 border-white rounded-xl text-white duration-500 ease-out hover:bg-white/10 focus:bg-white/10" />
            <input type="text" name="hehe" id="haha" placeholder="Password" className="px-2 py-1 bg-transparent border-2 border-white rounded-xl text-white duration-500 ease-out hover:bg-white/10 focus:bg-white/10"/>
            <ButtonWhiteOutline>Login</ButtonWhiteOutline>
          </form>
        </div>


      </div>
    </main>
  )
}


export default Login;