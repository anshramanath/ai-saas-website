"use client"

import { cn } from "@/lib/utils"
import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "glow"
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition",
          variant === "default" && "bg-white/10 text-white",
          variant === "outline" && "border border-white/20 text-white",
          variant === "glow" &&
            "bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 shadow-md shadow-cyan-400/20",
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"