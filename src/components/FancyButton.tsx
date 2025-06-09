"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type MotionButtonProps = React.ComponentPropsWithoutRef<typeof motion.button>

type ButtonSize = "default" | "sm" | "lg" | "icon"
type ButtonVariant = "default" | "ghost" | "outline" | "destructive"

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 p-0",
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-white/10 border border-white/20 text-white hover:bg-white/20",
  ghost: "bg-transparent text-white hover:bg-white/10",
  outline: "border border-white/40 text-white hover:bg-white/10",
  destructive: "bg-red-600 text-white hover:bg-red-700",
}

interface FancyButtonProps extends Omit<MotionButtonProps, "children"> {
  icon?: React.ReactNode
  active?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
  children?: React.ReactNode
}

export const FancyButton = React.forwardRef<HTMLButtonElement, FancyButtonProps>(
  ({ className, icon, children, active, size = "default", variant = "default", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium shadow-md transition focus:outline-none focus:ring-2 focus:ring-white/40",
          sizeClasses[size],
          variantClasses[variant],
          active && "bg-white/20",
          className
        )}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </motion.button>
    )
  }
)

FancyButton.displayName = "FancyButton"