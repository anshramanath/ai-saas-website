"use client"

import React from "react"

export function FooterDemo() {
  return (
    <div className="w-full flex justify-center px-4 pb-1 pt-2">
      <footer className="backdrop-blur-md border border-[#C7C7CC] bg-[#D1D1D6]/80 rounded-xl px-6 py-3 shadow-md max-w-6xl w-full flex items-center justify-center">
        <span className="text-sm font-semibold tracking-tight text-neutral-800">
          © {new Date().getFullYear()} COVALENT. All rights reserved.
        </span>
      </footer>
    </div>
  )
}