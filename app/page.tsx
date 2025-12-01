import { Navbar } from "@/components/flowai/navbar"
import { Hero } from "@/components/flowai/hero"
import { DashboardPreview } from "@/components/flowai/dashboard-preview"
import ProductShowcaseSection from "@/components/flowai/sections/product-showcase"
import ProductCategoriesSection from "@/components/flowai/sections/product-categories"
import FormularyAccessSection from "@/components/flowai/sections/formulary-access"
import ServicesBreakdownSection from "@/components/flowai/sections/services-breakdown"
import WhyChooseUsSection from "@/components/flowai/sections/why-choose-us"
import MedicationSliderSection from "@/components/flowai/sections/medication-slider"
import EarningsCalculatorSection from "@/components/flowai/sections/earnings-calculator"
import PricingSection from "@/components/flowai/sections/pricing"
import JessicaSection from "@/components/flowai/sections/jessica-section"
import FAQSection from "@/components/flowai/sections/faq-section"
import Footer from "@/components/flowai/footer"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-rose-50/60 to-orange-50" />
        <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
          <Navbar />
          <Hero />
          <DashboardPreview />
        </div>
      </div>

      <ServicesBreakdownSection />
      <ProductShowcaseSection />
      <ProductCategoriesSection />
      <FormularyAccessSection />
      <WhyChooseUsSection />
      <MedicationSliderSection />
      <EarningsCalculatorSection />
      <PricingSection />
      <JessicaSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
