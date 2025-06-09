"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <div className="top-2 z-50 w-full flex justify-center px-4 pt-1">
      <header className="backdrop-blur-md border border-[#C7C7CC] bg-[#D1D1D6]/80 rounded-xl px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-6xl w-full flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-neutral-700 flex items-center justify-center">
            <Image
              src="/media/covalent.png"
              alt="Covalent Logo"
              width={18}
              height={18}
            />
          </div>
          <span className="text-lg font-semibold tracking-tight text-neutral-800">
            COV [ ai ] LENT
          </span>
        </div>

        {/* CTA Button */}
        <Link
          href="https://calendly.com/covalent-nick/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center rounded-md bg-neutral-700 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          )}
        >
          Book a Call
        </Link>
      </header>
    </div>
  )
}