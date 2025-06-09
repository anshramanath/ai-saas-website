"use client"

import React from "react"
import { TextGifDemo } from "./TextGifDemo"

export function HoverVideoPlayerDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-full px-0 md:px-6 pt-0">
      <div className="w-full text-center">
        <TextGifDemo text="Future of AI Workflows" size="xl" />
      </div>
      <div className="relative w-full max-w-[100%] sm:max-w-xl md:max-w-2xl lg:max-w-xl rounded-xl overflow-hidden">
        <video
          src="/media/vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}