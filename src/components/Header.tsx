import ReactIcon from "./icons/ReactIcon";

export default function Header() {
  return (
    <header className="flex items-center h-12 p-5 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/10 my-5 rounded-xl">
      <div className="flex items-center justify-start w-1/3">
        <a href="/">
          <ReactIcon className="animate-pulse" />
        </a>
      </div>

      <nav className="flex justify-center w-1/3">
        <div className="text-white font-bold flex gap-4 hover:text-cyan-500 transition-all duration-300">
          <a href="#colaborativeto">Portifólios</a>
        </div>
      </nav>

      <div className="flex justify-end w-1/3">
        <div className="text-white flex gap-4">
          <a href="/register">Register</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </header>
  )
}
