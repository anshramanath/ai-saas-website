"use client"

import { FC } from "react"
import { motion } from "framer-motion"

interface Props {
  text: string
}

const TextAnimationDemo: FC<Props> = ({ text }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto text-center mt-10 text-4xl font-medium text-black dark:text-neutral-100 py-5 pb-8 px-4 md:text-5xl"
    >
      {text}
    </motion.h2>
  )
}

export { TextAnimationDemo }