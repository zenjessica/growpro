"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Startup Plan",
    price: "$1500",
    period: "/per month",
    description: "Your platform is fully aligned with US legal, HIPAA, and pharmacy regulations—right out of the box.",
    features: [
      "Nationwide provider coverage across all states",
      "Pharmacy & Compounding Network",
      "Appointment consultations",
      "Support via email and slack",
      "Patient Portal & Specialist Intakes",
      "Standard Telehealth Platform",
      "HIPAA-secure patient records",
    ],
    popular: false,
    gradient: "from-orange-100 to-orange-200",
  },
  {
    name: "Growth Plan",
    price: "$2500",
    period: "/per month",
    description: "Your platform is fully aligned with US legal, HIPAA, and pharmacy regulations—right out of the box.",
    features: [
      "Everything in Startup plan",
      "Lead tracking and results",
      "Enhanced analytics dashboard",
      "Synchronous patient communication tools",
      "Advanced patient communication tools",
      "Complete Telehealth Platform",
      "White-glove setup",
      "Advanced sales data insights",
    ],
    popular: true,
    gradient: "from-blue-100 to-blue-200",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "/per month",
    description: "Your platform is fully aligned with US legal, HIPAA, and pharmacy regulations—right out of the box.",
    features: [
      "Priority Email & Slack support",
      "Custom coded dashboards",
      "Custom coded checkout flows",
      "Doctor Portal & Prescribing & PMI",
      "Advanced sales data insights",
      "Conversion Telehealth advice",
      "Advanced patient assistance",
      "Custom coded checkout flows",
    ],
    popular: false,
    gradient: "from-green-100 to-green-200",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Pricing</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Startups and enterprises.
            <br />
            We've got you covered.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your platform is fully aligned with US legal, HIPAA, and pharmacy regulations—right out of the box.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${plan.popular ? "border-blue-500 border-2" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Popular</Badge>
              )}
              <div className={`h-32 bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full mt-6 ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                >
                  {plan.name === "Enterprise" ? "Get started with Enterprise" : `Get started with ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
