"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function ServicesBreakdownSection() {
  return (
    <section id="services-breakdown" className="py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Complete Solution</Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            Full Breakdown Of Our Done-For-You Wellness Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch and scale your telehealth business, completely managed for you
          </p>
        </div>

        <div className="mb-16">
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-white to-rose-50/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Play className="h-5 w-5 text-rose-600" />
                  <Badge className="bg-rose-600 text-white">Watch Now</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">See How GrowPro Transforms Your Business</h3>
                <p className="text-gray-600">Watch Jessica explain exactly how our done-for-you system works</p>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/a6CvA0Q57zw"
                  title="GrowPro VSL - How We Transform Your Telehealth Business"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Total Value & CTA */}
        <div className="text-center bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4 text-white">You don't need to be a medical provider</h3>
          <p className="text-lg md:text-xl mb-8 text-white leading-relaxed max-w-4xl mx-auto">
            It's not too late to get started with the GLP-1 telemedicine game, you just need to get on the playing
            field. We've been launching successful Weight Loss Practices and Telemed brands all over the nation, and
            we're ready to help you compete in crowded online channels where everyone is vying for the same customer's
            attention. This is not a course or a DIY how to, it's a robust turnkey service where I hand you the keys to
            your fully operational and compliant telehealth business.
          </p>
          <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-8 py-6 text-lg">
            <a
              href="https://link.lumifunnels.com/widget/bookings/jessicawhite"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
