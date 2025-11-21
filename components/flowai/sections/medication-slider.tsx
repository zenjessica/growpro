"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const medications = [
  {
    id: 1,
    name: "SEMAGLUTIDE",
    displayName: "Personalized GLP-1 (Sema)",
    category: "Weight Loss",
    image: "/glp1-vial.png",
    description: "Advanced weight management solution",
    features: ["FDA Approved", "Clinically Proven", "Weekly Injection"],
  },
  {
    id: 2,
    name: "TIRZEPATIDE",
    displayName: "Personalized GLP-1/GIP (Tirz)",
    category: "Metabolic Health",
    image: "/glp1-gip-vial.png",
    description: "Dual-action metabolic treatment combining GLP-1 and GIP pathways for enhanced weight loss results",
    features: ["Dual Receptor", "Superior Results", "Weekly Dosing"],
  },
  {
    id: 3,
    name: "NAD+",
    displayName: "NAD+",
    category: "Cellular Health",
    image: "/nad-vial.png",
    description:
      "Vital coenzyme that plays a crucial role in energy metabolism, DNA repair, and cellular communication",
    features: ["Cellular Energy", "DNA Repair", "Anti-Aging"],
  },
  {
    id: 4,
    name: "SERMORELIN",
    displayName: "Sermorelin",
    category: "Growth Hormone",
    image: "/sermorelin-vial.png",
    description:
      "Growth hormone releasing hormone (GHRH) analog that stimulates natural growth hormone production for optimal health and vitality",
    features: ["Natural HGH", "Muscle Growth", "Recovery"],
  },
]

export default function MedicationSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % medications.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + medications.length) % medications.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="treatments" className="py-16 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-rose-600">Treatments</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of FDA-approved medications designed to help you achieve your health goals
          </p>
        </div>

        <div className="relative">
          {/* Main slider container */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {medications.map((medication) => (
                <div key={medication.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    {/* Image side */}
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className="w-80 h-80 bg-gradient-to-br from-rose-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-lg">
                          <img
                            src={medication.image || "/placeholder.svg"}
                            alt={medication.name}
                            className="w-64 h-64 object-contain"
                          />
                        </div>
                        <div className="absolute -top-4 -right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {medication.category}
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{medication.displayName}</h3>
                      <p className="text-rose-600 font-medium mb-6">{medication.category}</p>

                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        {medication.description}. Clinically proven to help regulate appetite and support sustainable
                        weight management.
                      </p>

                      <div className="space-y-3 mb-8">
                        {medication.id === 2 ? (
                          <>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Dual-action appetite suppression</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Enhanced insulin sensitivity</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Superior cardiovascular benefits</span>
                            </div>
                          </>
                        ) : medication.id === 3 ? (
                          <>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Powers cellular energy production</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Activates sirtuins for longevity</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Enhances cognitive function</span>
                            </div>
                          </>
                        ) : medication.id === 4 ? (
                          <>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Stimulates natural growth hormone production</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Improves lean muscle mass and strength</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Promotes deeper, restorative sleep</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Reduces appetite and cravings</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Helps regulate blood sugar</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-700">Supports long-term weight management</span>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="flex gap-4">
                        <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full">
                          <a href="https://www.videoask.com/fsiwk0673" target="_blank" rel="noopener noreferrer">
                            Learn More
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-rose-600 text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-full bg-transparent"
                        >
                          <a href="https://www.videoask.com/fsiwk0673" target="_blank" rel="noopener noreferrer">
                            Get Started
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {medications.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-rose-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Benefits bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-rose-600 font-semibold text-sm">✓ No Hidden Fees</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-rose-600 font-semibold text-sm">✓ Fast Shipping</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-rose-600 font-semibold text-sm">✓ Expert Care</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <a
              href="https://www.videoask.com/fsiwk0673"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 font-semibold text-sm hover:text-rose-700 transition-colors cursor-pointer"
            >
              ✓ Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
