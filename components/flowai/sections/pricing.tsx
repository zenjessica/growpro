import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, Users, DollarSign, Database, CreditCard, FileText, Megaphone } from "lucide-react"

export default function PricingSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Compliant Telehealth Operations",
      description: "Launch a fully compliant GLP-1 practice with confidence",
    },
    {
      icon: Globe,
      title: "Digital Intake & Consent",
      description: "Streamlined client onboarding and regulatory compliance",
    },
    {
      icon: Users,
      title: "Expert Provider Network",
      description: "Connect patients with certified telehealth specialists",
    },
    {
      icon: DollarSign,
      title: "Wholesale Medication Pricing",
      description: "Access discounted rates up to 55% on pharmaceutical products",
    },
    {
      icon: Database,
      title: "Integrated EMR & CRM",
      description: "Secure patient data management and communication platform",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Solutions",
      description: "HSA compatibility and financing options for your clients",
    },
    {
      icon: FileText,
      title: "Regulatory Guidance & Templates",
      description: "Navigate telehealth and pharmacy compliance with ease",
    },
    {
      icon: Megaphone,
      title: "Marketing & Patient Acquisition",
      description: "Professional websites and targeted GLP-1 advertising campaigns",
    },
  ]

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">
          Leverage Our Complete Toolkit and Expertise
        </h2>
        <p className="text-lg text-gray-600">
          Everything you need to build, launch, and scale your GLP-1 telehealth business
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {benefits.map((benefit, index) => (
          <Card
            key={benefit.title}
            className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                  <benefit.icon className="w-5 h-5 text-rose-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <p className="text-gray-600 mb-8 leading-relaxed">
          From strategic business guidance and financial planning to advanced patient management systems and regulatory
          expertise, we empower you to participate in the GLP-1 healthcare revolution. Discover why GrowPro is the
          preferred choice for healthcare entrepreneurs and established practices expanding their telehealth offerings.
        </p>
        <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full">
          <a href="https://link.lumifunnels.com/widget/bookings/jessicawhite" target="_blank" rel="noopener noreferrer">
            Speak to an Expert
          </a>
        </Button>
      </div>
    </section>
  )
}
