
export const ButtonWhiteOutline = ({ children }, props)  => {

  return (
    <button className="px-2 py-1 rounded-full border-2 border-white hover:bg-white/10 duration-150 ease-in-out">
      {children}
    </button>
  )
}

