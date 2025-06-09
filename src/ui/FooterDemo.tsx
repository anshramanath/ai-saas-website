"use client"

import React from "react"

export function FooterDemo() {
  return (
    <footer className="w-full border-t bg-white dark:bg-neutral-950 text-center py-6 text-sm text-neutral-500 dark:text-neutral-400">
      © {new Date().getFullYear()} Covalent. All rights reserved.
    </footer>
  )
}
