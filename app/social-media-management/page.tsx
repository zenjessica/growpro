import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Instagram, Facebook, Linkedin, TrendingUp, Users, Camera, Video, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function SocialMediaManagementPage() {
  const services = [
    {
      icon: Camera,
      title: "Content Creation",
      description: "Professional photo and video content that captures your brand's essence and engages your audience.",
      image: "/professional-content-creation-photography.jpg",
    },
    {
      icon: TrendingUp,
      title: "Strategy & Planning",
      description: "Data-driven social media strategies tailored to your business goals and target audience.",
      image: "/social-media-strategy-planning.jpg",
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Engage with your audience, respond to comments, and build a loyal community around your brand.",
      image: "/community-engagement-social-media.jpg",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive insights and monthly reports to track growth and optimize performance.",
      image: "/social-media-analytics-dashboard.png",
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$997",
      period: "/month",
      description: "Perfect for businesses just getting started with social media",
      features: [
        "3 platforms managed",
        "12 posts per month",
        "Basic content creation",
        "Monthly analytics report",
        "Email support",
      ],
      paymentLink: "", // User will add this
    },
    {
      name: "Professional",
      price: "$1,997",
      period: "/month",
      description: "Ideal for growing brands ready to scale their presence",
      features: [
        "5 platforms managed",
        "20 posts per month",
        "Premium content creation",
        "Weekly analytics reports",
        "Community management",
        "Priority support",
        "Monthly strategy calls",
      ],
      popular: true,
      paymentLink: "", // User will add this
    },
    {
      name: "Enterprise",
      price: "$3,997",
      period: "/month",
      description: "Comprehensive solution for established brands",
      features: [
        "Unlimited platforms",
        "40+ posts per month",
        "Premium photo & video",
        "Real-time analytics",
        "Full community management",
        "24/7 priority support",
        "Bi-weekly strategy calls",
        "Influencer partnerships",
      ],
      paymentLink: "", // User will add this
    },
  ]

  const alaCarte = [
    {
      name: "Content Creation Package",
      price: "$497",
      description: "Professional photo and video shoot with 20 edited pieces of content",
      features: [
        "2-hour photo/video session",
        "20 edited photos",
        "5 edited videos",
        "Social media optimized",
        "Commercial usage rights",
      ],
      paymentLink: "", // User will add this
    },
    {
      name: "Strategy Session",
      price: "$297",
      description: "90-minute deep-dive strategy session to optimize your social media presence",
      features: [
        "90-minute consultation",
        "Competitor analysis",
        "Content calendar template",
        "Platform recommendations",
        "Growth action plan",
      ],
      paymentLink: "", // User will add this
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Social Media Management</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Elevate Your Brand's Social Media Presence
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              From content creation to community management, we handle everything so you can focus on running your
              business. Let us transform your social media into a powerful growth engine.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Instagram className="w-8 h-8 text-rose-600" />
              <Facebook className="w-8 h-8 text-rose-600" />
              <Linkedin className="w-8 h-8 text-rose-600" />
              <TrendingUp className="w-8 h-8 text-rose-600" />
            </div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700"
            >
              <Link href="https://link.lumifunnels.com/widget/bookings/jessicawhite" target="_blank">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid with Photos */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive social media management tailored to your brand's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-rose-100 hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-rose-100 to-orange-100">
                      <service.icon className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section - 9:16 Ratio */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">
              <Video className="w-3 h-3 inline mr-1" />
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">See Our Work in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out some of our recent content creation projects
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="relative aspect-[9/16] bg-gradient-to-br from-rose-100 to-orange-100 rounded-2xl overflow-hidden shadow-lg group"
              >
                {/* Placeholder for video upload */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <Video className="w-12 h-12 text-rose-600 mb-3" />
                  <p className="text-sm font-medium text-gray-700">Video {num}</p>
                  <p className="text-xs text-gray-500 mt-1">9:16 Format</p>
                </div>
                {/* You can replace the above div with actual video element:
                <video 
                  src="/path-to-video.mp4" 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
                */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to fit your business needs and budget
            </p>
          </div>

          {/* Main Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${
                  tier.popular ? "border-2 border-rose-500 shadow-2xl scale-105" : "border-rose-100"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-rose-600 to-orange-600 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-rose-600">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      tier.popular
                        ? "bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700"
                        : "bg-rose-600 hover:bg-rose-700"
                    }`}
                  >
                    <Link
                      href={tier.paymentLink || "https://link.lumifunnels.com/widget/bookings/jessicawhite"}
                      target="_blank"
                    >
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* A La Carte Options */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">À La Carte Services</Badge>
              <h3 className="text-3xl font-bold mb-2">One-Time Services</h3>
              <p className="text-gray-600">Need something specific? Choose from our individual services</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {alaCarte.map((service, index) => (
                <Card key={index} className="border-orange-100 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-orange-600">{service.price}</span>
                      <span className="text-gray-600">one-time</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{service.name}</h4>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                    >
                      <Link
                        href={service.paymentLink || "https://link.lumifunnels.com/widget/bookings/jessicawhite"}
                        target="_blank"
                      >
                        Purchase Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help you build a powerful social media presence that drives real results
          </p>
          <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-semibold">
            <Link href="https://link.lumifunnels.com/widget/bookings/jessicawhite" target="_blank">
              Book Your Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
