"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Is starting a GLP-1 telehealth business legal and compliant?",
    answer:
      "Absolutely. GrowPro provides fully compliant, LegitScript certified solutions that meet all federal and state regulations. Our platform includes SOC2 certified telehealth infrastructure, licensed physician networks, and comprehensive compliance templates to ensure your business operates within all legal requirements.",
  },
  {
    question: "How much can I realistically earn with a GLP-1 telehealth business?",
    answer:
      "Revenue potential varies based on patient volume and business model. Our calculator shows potential monthly profits of $110+ per patient. Many of our clients see significant returns within 3-6 months, with some generating six-figure annual revenues. Your success depends on marketing execution and patient retention.",
  },
  {
    question: "What makes Jessica Lynne White qualified to help me build this business?",
    answer:
      "Jessica is a licensed Physical Therapist (BS, MSPT) who successfully transitioned from healthcare provider to telehealth entrepreneur. She's featured on Legacy Makers TV and Dropping Bombs Podcast, has built multiple successful telehealth brands, and specializes in social media marketing for healthcare businesses.",
  },
  {
    question: "How long does it take to launch my GLP-1 telehealth business?",
    answer:
      "With our done-for-you services, most clients launch within 30-60 days. This includes website development, compliance setup, provider network integration, and marketing campaign creation. The timeline depends on your specific requirements and how quickly you complete the onboarding process.",
  },
  {
    question: "Do I need medical experience to start a GLP-1 telehealth business?",
    answer:
      "No medical background is required. Our platform connects you with licensed, credentialed physicians who handle all medical consultations and prescriptions. You focus on business operations and marketing while our medical network ensures proper patient care and compliance.",
  },
  {
    question: "How do I access the compounded medications and pharmacy network?",
    answer:
      "GrowPro provides instant access to our vetted formulary featuring hundreds of Rx products from 50+ licensed pharmacies. This includes GLP-1, GLP-1/GIP, NAD+, and Sermorelin compounds. All pharmacies are credentialed and offer preferred pricing to maximize your profit margins.",
  },
  {
    question: "What ongoing support do I receive after launch?",
    answer:
      "You receive comprehensive ongoing support including marketing optimization, compliance updates, new treatment protocols, business scaling strategies, and access to our private community of successful telehealth entrepreneurs. We're committed to your long-term success.",
  },
  {
    question: "Can I customize the treatments and branding for my business?",
    answer:
      "Yes, everything is fully customizable. Your website, marketing materials, and patient communications are branded specifically for your business. You can also choose which treatments to offer from our comprehensive formulary based on your target market and business goals.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "We're confident in our system because we've helped numerous entrepreneurs build successful GLP-1 businesses. During your consultation call, we'll discuss your specific goals and ensure our program is the right fit for your situation before moving forward.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">
            <MessageCircle className="w-3 h-3 mr-1" />
            Common Questions
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about starting your GLP-1 telehealth business with GrowPro
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-rose-500 transition-transform duration-200 flex-shrink-0",
                        openIndex === index ? "rotate-180" : "",
                      )}
                    />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-rose-100">
                      <p className="text-gray-600 leading-relaxed mt-4">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation with Jessica to discuss your specific situation and get personalized answers
              about building your GLP-1 telehealth business.
            </p>
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-8 py-3">
              <a href="https://www.videoask.com/fsiwk0673" target="_blank" rel="noopener noreferrer">
                Schedule Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
