"use client"

import React from "react"
import { Calendar } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import {
  FloatingPanelBody,
  FloatingPanelButton,
  FloatingPanelCloseButton,
  FloatingPanelContent,
  FloatingPanelFooter,
  FloatingPanelRoot,
  FloatingPanelTrigger,
} from "@/components/FloatingPanel"

export function FloatingPanelDemo() {
  const actions = [
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Book a call",
      action: () =>
        window.open("https://calendly.com/YOUR-CALENDLY-USERNAME", "_blank"),
    },
  ]

  return (
    <>  
      <FloatingPanelRoot>
        <FloatingPanelTrigger
          title="Want to talk?"
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-white text-black rounded-md hover:bg-neutral-100 transition-colors shadow-md w-full max-w-xs"
        >
          <span>Want to talk?</span>
        </FloatingPanelTrigger>

        <FloatingPanelContent className="w-56">
          <FloatingPanelBody>
            <AnimatePresence>
              {actions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FloatingPanelButton
                    onClick={action.action}
                    className="w-full flex items-center space-x-2 px-2 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    {action.icon}
                    <span>{action.label}</span>
                  </FloatingPanelButton>
                </motion.div>
              ))}
            </AnimatePresence>
          </FloatingPanelBody>

          <FloatingPanelFooter>
            <FloatingPanelCloseButton />
          </FloatingPanelFooter>
        </FloatingPanelContent>
      </FloatingPanelRoot>
    </>

  )
}