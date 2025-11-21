import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Network, Smartphone, Award } from "lucide-react"

export function Hero() {
  return (
    <section
      className={cn("relative mt-6 overflow-hidden rounded-3xl border shadow-sm", "px-6 py-14 sm:py-16 md:py-20")}
    >
      {/* Background gradient and subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1200px 500px at 50% -10%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%),
            linear-gradient(180deg, #ffe3ea 0%, #ffd9c8 45%, #fed4d6 100%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          maskImage: "radial-gradient(100% 70% at 50% 30%, rgba(0,0,0,1), rgba(0,0,0,0.05))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 rounded-full border bg-white/70 px-3 py-1.5 text-xs font-medium shadow-sm">
            <Network className="h-3 w-3 text-rose-600" />
            <span>LegitScript Certified Pharmacy Network</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border bg-white/70 px-3 py-1.5 text-xs font-medium shadow-sm">
            <Smartphone className="h-3 w-3 text-rose-600" />
            <span>SOC2 Certified Telehealth Platform</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border bg-white/70 px-3 py-1.5 text-xs font-medium shadow-sm">
            <Award className="h-3 w-3 text-rose-600" />
            <span>LegitScript Certified Physician Corporation</span>
          </div>
        </div>

        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Everything you need to launch, run & scale your GLP-1 business
        </h1>

        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Learn why GrowPro is the #1 choice for brands offering GLP-1s
        </p>

        <div className="mt-7 flex items-center justify-center">
          <Button
            asChild
            className={cn(
              "rounded-full px-6 py-5 sm:py-6 text-sm sm:text-base",
              "bg-rose-600 hover:bg-rose-700 text-white shadow-lg",
              "shadow-[inset_0_1px_0_rgba(255,255,255,.15)]",
              "min-h-[48px] touch-manipulation",
            )}
          >
            <Link href="https://www.videoask.com/fsiwk0673" target="_blank" rel="noopener noreferrer">
              See How It Works
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
