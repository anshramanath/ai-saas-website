"use client"

import { LogoCarouselDemo } from "@/ui/LogoCarouselDemo"
import { FeatureCarouselDemo } from "@/ui/FeatureCarouselDemo"
import { HoverVideoPlayerDemo } from "@/ui/HoverVideoPlayerDemo"
import { FloatingPanelDemo } from "@/ui/FloatingPanelDemo"
import { TextAnimationDemo } from "@/ui/TextAnimationDemo"
import { LoadingCarouselDemo } from "@/ui/LoadingCarouselDemo"
import { FillerComponent } from "@/ui/FillerComponent"
import { FooterDemo } from "@/ui/FooterDemo"

export default function Home() {
  return (
    <>
    <main className="w-full flex flex-col items-center justify-center bg-white text-neutral-900 pt-19 px-4 md:px-6 pb-32 space-y-28 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <HoverVideoPlayerDemo />

      {/* Logo Section */}
      <LogoCarouselDemo />

      {/* Feature Carousel — DO NOT wrap this in any section or div */}
      <FeatureCarouselDemo />

      {/* Filler Section */}
      <FillerComponent />

      {/* Loading Carousel Section */}
      <LoadingCarouselDemo />

      {/* Call to Action */}
      <section>
        <TextAnimationDemo text="Interested?" />
        <div className="flex justify-center">
          <FloatingPanelDemo />
        </div>
      </section>
    </main>

    <FooterDemo />
    </>
  )
}