"use client"

import { Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  return (
    <div className="flex flex-wrap justify-center items-center gap-x-32 gap-y-20 min-h-96 p-20 bg-neutral-100 dark:bg-neutral-950">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col w-fit mx-auto">
          <motion.p animate={{ opacity: 1, x: 0, rotateZ: 0 }} initial={{ opacity: 0, x: -100, rotateZ: "10deg" }} transition={{ duration: 0.25 }} className="text-xl font-bold">Li Jing Hao</motion.p>
          <div className="flex">
            <motion.div animate={{ opacity: 1, y: 0, rotateZ: 0 }} initial={{ opacity:0, y: 100, rotateZ: "25deg" }} transition={{ duration: 0.25 }} className="text-xl font-bold self-center mr-2">
              <p>景</p>
              <p>豪</p>
            </motion.div>
            <h1 className="self-center text-5xl font-black text-neutral-600 
            py-1 text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-600 dark:from-emerald-500 dark:to-emerald-700">Charley</h1>
            <motion.p animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ delay: 2, duration: 0.25 }} className="self-end font-bold pb-1">.nl</motion.p>
          </div>
        </div>
        <div>
          <motion.p animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ delay: 0.75, duration: 0.25 }} className="text-center text-xl text-neutral-500 dark:text-neutral-300 font-bold">Front-end web developer</motion.p>
          <motion.p animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ delay: 1, duration: 0.25 }} className="text-center text-xl text-neutral-500 dark:text-neutral-300 font-bold">with a <span className="italic text-neutral-800 dark:text-neutral-500">sharp</span> skill set.</motion.p>
        </div>
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ delay: 1.25, duration: 0.25 }}>
          <Button onPress={() => {router.push("/contact")}} className="bg-green-500 dark:bg-green-700 font-semibold text-white">Get in touch<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Button>
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="w-48 h-48 relative rounded-full overflow-clip z-50">
          <img src="/assets/charley.jpg" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="italic text-center max-w-64">"Hello, I am Charley!"</p>
          <p className="text-right">- Charley, 2016</p>
        </div>
      </div>
    </div>
  )
}
