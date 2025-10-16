// ** rest of code here **

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Mic } from "lucide-react"

export default function JessicaSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Work with GrowPro and Jessica Lynne White</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            From Physical Therapist to telehealth entrepreneur, Jessica has cracked the code on building successful
            GLP-1 practices
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {/* Media Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {/* The Digital Coach Podcast */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-12%20115438-00XrDRa2AlZWNfOu3zLkvJ1kEi96hU.png"
                    alt="Jessica Lynne White on The Digital Coach Podcast with Dr. Enrico Dolcecore"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-3">
                  <Mic className="w-3 h-3 inline mr-1" />
                  Podcast Feature
                </div>
                <h4 className="text-xl font-bold mb-3">The Digital Coach Podcast (Chiropractics + GLP-1)</h4>
                <p className="text-gray-600 mb-4">
                  If you've wondered whether GLP‑1s belong in a rehab‑centric clinic, this conversation shows how to do
                  it cleanly: branded to your practice, compliant across channels, and largely automated from intake to
                  doorstep. You keep the relationship and the standards; the telehealth layer handles the logistics.
                  Ready to turn trust into outcomes and a resilient revenue line?
                </p>
                <Link href="https://www.youtube.com/watch?v=oy59tHScn18" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent"
                  >
                    Watch Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
