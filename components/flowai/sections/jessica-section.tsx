import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function JessicaSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Work with GrowPro and Jessica Lynne White</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            From Physical Therapist to telehealth entrepreneur, Jessica has cracked the code on building successful
            GLP-1 practices
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {/* Main Story Section */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
                Founder & CEO
              </div>
              <h3 className="text-2xl font-bold mb-6">From Healthcare Professional to Telehealth Pioneer</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As a 43-year-old first-time mother and Physical Therapist, Jessica spent her maternity leave
                  discovering how business owners successfully monetize their weight loss businesses. What started as
                  curiosity became a mission to crack the code on booking dream clients online.
                </p>
                <p>
                  It all began with helping a Nurse Practitioner from Georgia with her IV Hydration, Medical Aesthetics,
                  and Body Sculpting spa. The relatable content strategy and funnel Jessica designed generated such
                  impressive results that other health and wellness brands quickly took notice.
                </p>
                <p>
                  Today, Kickstart Social GROW PRO Telemed System has launched successful Weight Loss Practices and
                  Telemed brands nationwide, designing brands, websites, social media ads, and lead generation campaigns
                  that help you stand above the competition.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white">Start Your Journey Today</Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BU0A0048.jpg-qwnxYrbAdCeapD23BR5b5RMKqTINit.jpeg"
                  alt="Jessica Lynne White in medical scrubs"
                  className="rounded-2xl shadow-lg max-w-md mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Media Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Legacy Makers TV */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YLfLT1G0IWTOhFkN3tNtObtp3DHove.png"
                    alt="Jessica Lynne White on Legacy Makers TV"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-3">
                  Television Feature
                </div>
                <h4 className="text-xl font-bold mb-3">Legacy Makers TV Debut</h4>
                <p className="text-gray-600 mb-4">
                  Jessica will be sharing her expertise on Legacy Makers TV, showcasing her story of rising to success
                  and her telehealth launch blueprint alongside industry titans like Carmen Electra, Allen Iverson, and
                  Floyd Mayweather.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                >
                  Watch Now
                </Button>
              </CardContent>
            </Card>

            {/* Dropping Bombs Podcast */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l9EephYI6sf0iXmu3jlINZKZRZAGfF.png"
                    alt="Jessica Lynne White on Dropping Bombs Podcast"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-3">
                  Podcast Feature
                </div>
                <h4 className="text-xl font-bold mb-3">Dropping Bombs Podcast</h4>
                <p className="text-gray-600 mb-4">
                  Featured on Brad Lea's influential Dropping Bombs podcast, Jessica broke down exactly how GrowPro
                  helps entrepreneurs turn telehealth ideas into thriving, scalable brands. Learn the real steps to
                  launch from the ground up.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent"
                >
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Professional Credibility */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-rose-100">
            <div className="flex justify-center mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ST200896.JPG-oQa3rC5sZCaU9uSQhoLj6a5xo0VCJn.jpeg"
                alt="Jessica Lynne White professional headshot"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </div>
            <h4 className="text-xl font-bold mb-4">Jessica Lynne White, BS, MSPT</h4>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              "It's not too late to get started with the GLP-1 telemedicine game, you just need to get on the playing
              field. We've been launching successful Weight Loss Practices and Telemed brands all over the nation, and
              we're ready to help you compete in crowded online channels where everyone is vying for the same customer's
              attention."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>• Physical Therapist</span>
              <span>• Director of Rehabilitation</span>
              <span>• Telehealth Entrepreneur</span>
              <span>• Marketing Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
