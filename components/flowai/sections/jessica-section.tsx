import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink, Newspaper, Tv, Mic, Play } from "lucide-react"

export default function JessicaSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Calendar Booking Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Book Your Consultation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Schedule a call with Jessica to discuss how GrowPro can help launch your GLP-1 telehealth business
            </p>
          </div>
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-2 sm:p-4 md:p-6">
            <iframe
              src="https://link.lumifunnels.com/widget/booking/N4Ur2Qli6NkaOI69quvk"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "900px" }}
              scrolling="no"
              id="TvtEp4B8wwmeTy21SQwx_1757545036927"
            />
            <script src="https://link.lumifunnels.com/js/form_embed.js" type="text/javascript"></script>
          </div>
        </div>

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
                <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white">
                  <a
                    href="https://link.lumifunnels.com/widget/bookings/jessicawhite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Your Journey Today
                  </a>
                </Button>
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

          {/* Featured Video Section */}
          <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-3xl p-8 md:p-12 border border-rose-100 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full text-sm font-medium mb-4">
                <Play className="w-4 h-4" />
                Featured Video
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Watch Jessica's Story</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how Jessica is revolutionizing the telehealth industry and helping entrepreneurs build
                successful GLP-1 practices
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/mgqnZDA1D3o"
                  title="Jessica Lynne White Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>

          {/* Media Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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
                  <Tv className="w-3 h-3 inline mr-1" />
                  Television Feature
                </div>
                <h4 className="text-xl font-bold mb-3">Legacy Makers TV Debut</h4>
                <p className="text-gray-600 mb-4">
                  Jessica will be sharing her expertise on Legacy Makers TV, showcasing her story of rising to success
                  and her telehealth launch blueprint alongside industry titans like Carmen Electra, Allen Iverson, and
                  Floyd Mayweather.
                </p>
                <Link
                  href="https://www.legacymakerstv.com/jessica-lynne-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                  >
                    Watch Now
                  </Button>
                </Link>
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
                  <Mic className="w-3 h-3 inline mr-1" />
                  Podcast Feature
                </div>
                <h4 className="text-xl font-bold mb-3">Dropping Bombs Podcast</h4>
                <p className="text-gray-600 mb-4">
                  Featured on Brad Lea's influential Dropping Bombs podcast, Jessica broke down exactly how GrowPro
                  helps entrepreneurs turn telehealth ideas into thriving, scalable brands.
                </p>
                <Link
                  href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODYwMzEzNTY4NDUxODE3?story_media_id=3680905877427839756&igsh=aXRpajliNmtzZXhm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent"
                  >
                    Listen Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* The Medspa Club Podcast */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FDITJm9UqGevFUmZC1XIcz2O6EjREH.png"
                    alt="Jessica Lynne White on The Medspa Club Podcast with Monica Swint"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-3">
                  <Mic className="w-3 h-3 inline mr-1" />
                  Podcast Feature
                </div>
                <h4 className="text-xl font-bold mb-3">The Medspa Club Podcast</h4>
                <p className="text-gray-600 mb-4">
                  Jessica shares insights on scaling telehealth businesses and building successful GLP-1 practices with
                  The Medspa Club audience, discussing proven strategies for healthcare entrepreneurs.
                </p>
                <Link href="https://www.youtube.com/watch?v=ihab2uxrdOY" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent"
                  >
                    Watch Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Business Innovators Podcast */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-12%20115438-00XrDRa2AlZWNfOu3zLkvJ1kEi96hU.png"
                    alt="Jessica Lynne White on The Digital Coach Podcast with Dr. Enrico Dolcecore"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-3">
                  <Mic className="w-3 h-3 inline mr-1" />
                  Podcast Feature
                </div>
                <h4 className="text-xl font-bold mb-3">The Digital Coach Podcast (Chiropractics + GLP-1)</h4>
                <p className="text-gray-600 mb-4">
                  If you've wondered whether GLP‑1s belong in a rehab‑centric clinic, this conversation shows how to do
                  it cleanly: branded to your practice, compliant across channels, and largely automated from intake to
                  doorstep. You keep the relationship and the standards; the telehealth layer handles the logistics.
                  Ready to turn trust into outcomes and a resilient revenue line?
                </p>
                <Link href="https://www.youtube.com/watch?v=vm250GQQMiA" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent"
                  >
                    Watch Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Comprehensive Press Coverage Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-rose-100">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
                <Newspaper className="w-3 h-3 inline mr-1" />
                Press Coverage
              </div>
              <h3 className="text-2xl font-bold mb-4">Featured In Major Publications</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Jessica's expertise and success story have been recognized by leading media outlets and publications
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link
                href="https://ktla.com/business/press-releases/ein-presswire/811942259/jessica-lynne-white-joins-legacy-makers-tv-to-share-insights-on-healthcare-innovation-and-building-a-lasting-business/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          KTLA
                        </h5>
                        <p className="text-sm text-gray-600">Healthcare Innovation Feature</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://voyagela.com/interview/daily-inspiration-meet-jessica-lynne-white-pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          Voyage LA
                        </h5>
                        <p className="text-sm text-gray-600">Entrepreneur Interview</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://finance.yahoo.com/news/kickstartsocial-co-digital-marketing-agency-041100626.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          Yahoo Finance
                        </h5>
                        <p className="text-sm text-gray-600">Agency Success Story</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://www.femalefirst.co.uk/features/jessica-lynne-white-successful-balancing-motherhood-scaling-digital-marketing-agency-1324648.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          Female First
                        </h5>
                        <p className="text-sm text-gray-600">Motherhood & Business</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://thefrisky.com/jessica-lynne-physical-therapist-fueled-career-in-digital-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          The Frisky
                        </h5>
                        <p className="text-sm text-gray-600">Career Transition Story</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://londondailypost.com/build-a-personal-brand-youll-love-and-get-paid-to-post-with-kickstart-my-influence-a-four-week-online-mastermind-workshop-by-jessica-lynne-white/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          London Daily Post
                        </h5>
                        <p className="text-sm text-gray-600">Kickstart My Influence Workshop</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://apnews.com/press-release/ein-presswire-newsmatics/medical-technology-florida-ce14ec4b28737268d33068a0b61d984e"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          AP News
                        </h5>
                        <p className="text-sm text-gray-600">Medical Technology Feature</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://www.benzinga.com/content/45363261/jessica-lynne-white-joins-legacy-makers-tv-to-share-insights-on-healthcare-innovation-and-building-a"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          Benzinga
                        </h5>
                        <p className="text-sm text-gray-600">Healthcare Innovation Story</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://fox5sandiego.com/business/press-releases/ein-presswire/811942259/jessica-lynne-white-joins-legacy-makers-tv-to-share-insights-on-healthcare-innovation-and-building-a-lasting-business/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          Fox 5 San Diego
                        </h5>
                        <p className="text-sm text-gray-600">Business Innovation Feature</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://www.americanbusinesstimes.com/article/811942259-jessica-lynne-white-joins-legacy-makers-tv-to-share-insights-on-healthcare-innovation-and-building-a-lasting-business"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                          American Business Times
                        </h5>
                        <p className="text-sm text-gray-600">Legacy Makers TV Feature</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Professional Credibility */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-rose-100">
            <div className="flex justify-center mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ST200896.JPG-oQa3rC5sZCaU9uSQhoLj6a5xo0VCJn.jpeg"
                alt="Jessica Lynne White professional headshot"
                className="w-32 h-32 rounded-full object-cover object-top shadow-lg"
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
