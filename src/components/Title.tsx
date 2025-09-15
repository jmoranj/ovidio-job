import { motion } from "framer-motion";

export default function Title() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}   
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 3.5, ease: "easeOut" }}
    >
      <h1 className="text-white flex justify-center font-bold text-5xl p-10">Hello, Welcome!</h1>
      <p className='text-white flex justify-center text-2xl pb-20'>This project was developed by João and Eduardo,
        both students at UNISO, This is our projects.
      </p>
    </motion.div>
  )
}
