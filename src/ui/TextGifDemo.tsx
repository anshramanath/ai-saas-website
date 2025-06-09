"use client"

import { TextGif } from "@/components/TextGif"

type Size = "default" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xll" | "xxxl" | null | undefined

export function TextGifDemo({ text, size }: { text: string, size: Size }) {

  return (
    <div className="flex items-center justify-center pb-15 bg-white dark:bg-black rounded-xl">
    <TextGif
        gifUrl={"https://media.giphy.com/media/3zvbrvbRe7wxBofOBI/giphy.gif"}
        text={text}
        size={size}
        weight={"bold"}
    />
    </div>
  )
}