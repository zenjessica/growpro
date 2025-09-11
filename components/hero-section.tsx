"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            🏆 Trusted by 100+ healthcare brands
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Power Your Digital Clinic with Wellie MD
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
            A visual platform for merchants, clinics, and providers to launch fully integrated telehealth services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-4">
              Explore Features
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-gray-300 bg-transparent">
              Book Demo
            </Button>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-600 font-medium">Wellie MD Dashboard</div>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2818%29-8fKRREesFwctyP6FB89EFRN02oFRjt.png"
                    alt="Wellie MD Telehealth Dashboard"
                    className="w-full rounded-lg"
                  />
                  {/* Bottom fade overlay like Uniloop reference */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
