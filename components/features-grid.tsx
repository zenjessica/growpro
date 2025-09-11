"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Users, Stethoscope, Pill, Calendar } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Seamless Compliance, Built In",
    description: "Your platform is fully aligned with US legal, HIPAA, and pharmacy regulations—right out of the box.",
    color: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Faster Prescription Processing",
    description:
      "Reduce turnaround times by up to 60%. From prescriptions to order flows, every workflow is securely designed to meet regulatory standards with zero extra setup.",
    color: "text-green-600",
  },
  {
    icon: Users,
    title: "Automated Patient Reminders",
    description:
      "Increase refills with SMS and email alerts. Synchronous patient communication tools that keep patients engaged and compliant.",
    color: "text-purple-600",
  },
]

const benefits = [
  {
    icon: Stethoscope,
    title: "Faster Prescription Processing",
    description: "Reduce turnaround times by up to 60%",
  },
  {
    icon: Clock,
    title: "Fast prescription turnaround",
    description: "Value increased within 4 hours",
  },
  {
    icon: Users,
    title: "Automated Patient Reminders",
    description: "Increases refills with SMS and email alerts",
  },
  {
    icon: Shield,
    title: "Secure Portal & Prescribing & PMI",
    description: "Doctor Portal & Prescribing & PMI",
  },
  {
    icon: Pill,
    title: "Easy Integration & Setup",
    description: "Connect with any system in under 20 days",
  },
  {
    icon: Calendar,
    title: "Advanced sales data insights",
    description: "Conversion Telehealth advice",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wellie MD Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tired of manual tracking, lost prescriptions, and outdated systems?
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Wellie MD helps you eliminate errors, save hours weekly, and focus on delivering better patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 mx-auto`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4">
            Get Started
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
