"use client"

import React from "react"
import { LogoCarousel } from "@/components/LogoCarousel"
import { TextAnimationDemo } from "./TextAnimationDemo"

export function LogoCarouselDemo() {
  return (
    <div className="space-y-12 pb-10 bg-white text-neutral-800 w-full">
      <div className="w-full px-4 md:px-6 flex flex-col items-center space-y-10 text-center">
        <TextAnimationDemo text="Trusted by Creators & Brands" />
        <p className="text-neutral-500 text-base md:text-lg max-w-prose">
          AI workflows powering content at scale — from solo marketers to global brands.
        </p>
        <LogoCarousel columnCount={3} />
      </div>
    </div>
  )
}