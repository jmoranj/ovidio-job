import ReactIcon from "./icons/ReactIcon";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-12 p-5 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/10 my-5 rounded-xl">
      <a href="/"><ReactIcon className="animate-pulse" /></a>
      <div className="text-white text-1xl ml-2 flex justify-end gap-4">
        <a href="/register">Register</a>
        <a href="/login">Login</a>
      </div>
    </header>
  )
}
