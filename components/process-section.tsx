"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: "1",
    title: "Secure, HIPAA-Compliant Data",
    description: "Keep patient information fully protected",
  },
  {
    step: "2",
    title: "Easy Integration & Setup",
    description: "Connect with any system in under 20 days",
  },
  {
    step: "3",
    title: "Faster Prescription Processing",
    description: "Reduce turnaround times by up to 60%",
  },
  {
    step: "4",
    title: "Automated Patient Reminders",
    description: "Increase refills with SMS and email alerts",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">For Everyone</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What sets Wellie MD apart</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your platform is fully aligned with US legal, HIPAA, and pharmacy regulations—right out of the box.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="relative text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Ready to get started? Join thousands of satisfied customers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
