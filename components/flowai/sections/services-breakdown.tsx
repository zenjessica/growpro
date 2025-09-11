"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Stethoscope,
  Activity,
  Zap,
  FlaskConical,
  Package,
  Megaphone,
  Shield,
  Phone,
  ArrowRight,
  Play,
} from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Turn-Key GLP-1 Weight Loss Program",
    description:
      "Full implementation: provider consultations, prescriptions, patient onboarding, fulfillment & ongoing care. Includes Personalized Semaglutide & Tirzepatide options.",
    features: [
      "Custom integration for med spas, fitness centers, salons, clinics",
      "Existing or new online telehealth models",
    ],
    value: "$50,000+",
  },
  {
    icon: Activity,
    title: "Hormone Optimization (HRT & TRT) Program",
    description:
      "Access to testosterone cypionate and HRT protocols with complete patient management: labs, telehealth, prescribing, medication fulfillment.",
    features: ["Customizable plans for men & women", "Complete lab management"],
    value: "$25,000+",
  },
  {
    icon: Zap,
    title: "NAD+ Therapy Integration",
    description:
      "Ready-to-go NAD+ therapy protocols (injectable and troches). Education, protocols, and fulfillment managed by GrowPro.",
    features: ["Elevates longevity, energy & cognitive services", "Complete protocol management"],
    value: "$15,000+",
  },
  {
    icon: FlaskConical,
    title: "Peptide Therapy Expansion",
    description:
      "Add-on services for Glutathione (anti-oxidant), Sermorelin (growth hormone support), B-12+MIC treatments.",
    features: ["Patient education & dosing schedules", "Complete fulfillment management"],
    value: "$20,000+",
  },
  {
    icon: Package,
    title: "Exclusive Wholesale Medication Access",
    description:
      "Bulk discounts on all medications: GLP-1s, TRT, NAD+, peptides with direct supply chain and pre-negotiated pricing.",
    features: ["Direct supply chain access", "Pre-negotiated bulk pricing"],
    value: "$10,000+/year",
  },
  {
    icon: Megaphone,
    title: "Marketing Toolkit",
    description:
      "101 Ways to get eyes on your telehealth site and how to find influencers and leverage them for your brand.",
    features: ["Comprehensive marketing strategies", "Influencer partnership guidance"],
    value: "$15,000+",
  },
  {
    icon: Shield,
    title: "Ongoing Support & Compliance",
    description:
      "24/7 business support + patient assistance with HIPAA-compliant systems and regulatory guidance and updates.",
    features: ["HIPAA-compliant systems", "Regulatory guidance & updates"],
    value: "$3,000+/year",
  },
]

const bonus = {
  icon: Phone,
  title: "1-on-1 Business Strategy Call",
  description: "Launch call with a seasoned growth strategist to ensure your success from day one.",
  value: "$1,000",
}

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

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-100 to-orange-100 group-hover:from-rose-200 group-hover:to-orange-200 transition-colors">
                      <Icon className="h-6 w-6 text-rose-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg text-gray-900 leading-tight">{service.title}</h3>
                        <Badge
                          variant="outline"
                          className="ml-2 border-rose-200 text-rose-700 bg-rose-50 font-semibold"
                        >
                          {service.value}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bonus Section */}
        <div className="mb-12">
          <Card className="max-w-2xl mx-auto border-2 border-rose-200 bg-gradient-to-r from-rose-50 to-orange-50 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <Badge className="bg-rose-600 text-white mb-2">BONUS</Badge>
                  <h3 className="font-bold text-xl text-gray-900">{bonus.title}</h3>
                </div>
                <Badge variant="outline" className="border-rose-300 text-rose-700 bg-white font-semibold">
                  {bonus.value}
                </Badge>
              </div>
              <p className="text-gray-600 leading-relaxed">{bonus.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Total Value & CTA */}
        <div className="text-center bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4 text-white">Total Value: $139,000+</h3>
          <p className="text-xl mb-8 text-white">Get everything you need to build a successful telehealth business</p>
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
