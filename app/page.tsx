"use client"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { DashboardPreview } from "@/components/dashboard-preview"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <img src="/wellie-md-logo.png" alt="Wellie MD" className="h-8 w-auto" />
              </div>
              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("pharmacy")}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Pharmacy
                </button>
                <button
                  onClick={() => scrollToSection("provider-network")}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Provider Network
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
      <div id="pharmacy">
        <DashboardPreview />
      </div>
      <div id="features">
        <FeaturesGrid />
      </div>
      <div id="provider-network">
        <ProcessSection />
      </div>
      <PricingSection />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/wellie-pill-icon.png" alt="Wellie MD" className="h-8 w-auto" />
              </div>
              <p className="text-gray-400">
                A visual platform for merchants, clinics, and providers to launch fully integrated telehealth services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Wellie MD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
