"use client"

import { TextAnimationDemo } from "./TextAnimationDemo"

export function FillerComponent() {
  return (
    <div className="space-y-12 pb-10 bg-white text-neutral-800 w-full">
      <div className="w-full px-4 md:px-6 flex flex-col items-center space-y-10 text-center">
        <TextAnimationDemo text="Smart Tools for Modern Marketers" />
        <p className="text-neutral-500 text-base md:text-lg max-w-prose">
          From brainstorming hooks to scheduling posts, our tools adapt to your workflow so you can focus on what you do best — creating.
        </p>
      </div>
    </div>
  )
}