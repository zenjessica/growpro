"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function WhyChooseUsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const benefits = [
    {
      title: "Access to Experts",
      subtitle: "Expert Network",
      description:
        "Our platform connects you with a network of leading doctors and healthcare experts for top-tier medical guidance.",
      image: "/medical-experts-consultation.jpg",
    },
    {
      title: "Patient Satisfaction",
      subtitle: "Proven Results",
      description: "With high success rates and excellent patient testimonials, we are trusted by patients nationwide.",
      image: "/patient-satisfaction-healthcare.jpg",
    },
    {
      title: "Revenue Growth",
      subtitle: "Business Growth",
      description:
        "Unlock substantial revenue opportunities by integrating GLP-1 treatments into your existing services.",
      image: "/business-revenue-growth.jpg",
    },
    {
      title: "Ongoing Support",
      subtitle: "Continuous Care",
      description:
        "Enjoy comprehensive, continuous support for smooth operations and scalable growth for your business.",
      image: "/customer-support-team.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Founders Choose GrowPro</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of healthcare entrepreneurs who trust GrowPro to scale their GLP-1 business
          </p>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mx-4">
                    <CardContent className="p-8">
                      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1">
                          <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
                            {benefit.subtitle}
                          </div>
                          <h3 className="text-3xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                          <p className="text-gray-600 text-lg leading-relaxed mb-6">{benefit.description}</p>
                          <Button className="bg-rose-600 hover:bg-rose-700 text-white">Learn More</Button>
                        </div>
                        <div className="order-1 lg:order-2 flex items-center justify-center">
                          <div className="w-80 h-80 bg-gradient-to-br from-rose-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-lg">
                            <img
                              src={benefit.image || "/placeholder.svg"}
                              alt={benefit.title}
                              className="w-64 h-64 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-rose-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
