import ReactIcon from "./icons/ReactIcon";

export default function Header() {
  return (
    <header className="flex justify-between h-12 p-5 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/10 my-5 mx-40 rounded-xl">
      <div className="flex items-center justify-center">
        <ReactIcon className="animate-pulse"/>
      </div>
    </header>
  )
}
