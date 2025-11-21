"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header>
      <nav
        className={cn(
          "mx-auto mt-2 flex items-center justify-between gap-3",
          "rounded-full border bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md",
          "dark:bg-black/30",
        )}
        aria-label="Primary"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-rose-500 text-white text-xs font-semibold">
            {"✺"}
          </div>
          <span className="font-semibold">GrowPro</span>
        </div>

        <ul className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <li>
            <button
              onClick={() => scrollToSection("what-is-growpro")}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("treatments")}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              Treatments
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("earnings-calculator")}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              Revenue
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services-breakdown")}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              What's Included
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className={cn(
              "rounded-full px-4",
              "bg-neutral-900 hover:bg-neutral-800 text-white",
              "shadow-[inset_0_1px_0_0_rgba(255,255,255,.15)]",
              "min-h-[44px] touch-manipulation",
            )}
          >
            <Link href="https://www.videoask.com/fsiwk0673" target="_blank" aria-label="Speak to an Expert">
              <span className="mr-1">Speak to an Expert</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
