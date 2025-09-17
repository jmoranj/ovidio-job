import ReactIcon from "./icons/ReactIcon";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 300 }}   
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1.0, ease: "easeOut" }} 
      className="fixed top-0 left-0 right-0 mx-6 md:mx-40 mt-5 z-99 flex items-center justify-between h-16 p-5 bg-white/5 backdrop-blur-md border border-white/20 shadow-xl shadow-black/10 rounded-xl">
      <div className="flex items-center justify-start gap-5">
        <a href="/">
          <ReactIcon className="animate-pulse" />
        </a>
        <nav className="flex justify-center">
          <div className="text-white font-bold flex gap-4 hover:text-cyan-500 transition-all duration-300">
            <a href="#colaborative">Portifólios</a>
          </div>
        </nav>
      </div>

      <div className="flex justify-end">
        <div className="text-white font-bold flex gap-4">
          <a className="hover:text-cyan-500 transition-all duration-300" href="/login">Login</a>
          <a className="hover:text-cyan-500 transition-all duration-300" href="/register">Register</a>
        </div>
      </div>
    </motion.header>
  )
}
