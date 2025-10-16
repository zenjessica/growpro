import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Mic, Tv, Newspaper, Award, Users, TrendingUp } from "lucide-react"

export default function JessicaSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Calendar Booking Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Book Your Free Consultation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Schedule a call with Jessica to discuss how GrowPro can help you launch your GLP-1 telehealth business
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-8">
            <iframe
              src="https://link.lumifunnels.com/widget/bookings/jessicawhite"
              style={{ width: "100%", height: "800px", border: "none" }}
              title="Book a consultation with Jessica Lynne White"
            />
          </div>
        </div>

        {/* Header */}
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
              <h3 className="text-2xl font-bold mb-4">Meet Jessica Lynne White, BS, MSPT</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Jessica Lynne White is a licensed Physical Therapist turned digital marketing strategist and
                  telehealth entrepreneur. With over a decade of experience in healthcare and business development, she
                  founded Kickstart Social, a digital marketing agency specializing in health and wellness brands.
                </p>
                <p>
                  Recognizing the explosive demand for GLP-1 medications and the barriers entrepreneurs face in entering
                  the telehealth space, Jessica created GrowPro—a done-for-you solution that provides everything needed
                  to launch a compliant, profitable GLP-1 telehealth business.
                </p>
                <p>
                  Her unique background in both healthcare and digital marketing allows her to bridge the gap between
                  clinical excellence and business success, helping entrepreneurs build sustainable telehealth practices
                  without needing medical credentials themselves.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BU0A0048-GbhdMnQqpOth4TlTdNSyVqXrrxGuwB.jpg"
                  alt="Jessica Lynne White"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="my-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-100 to-orange-100 p-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="inline-block px-3 py-1 bg-rose-600 text-white rounded-full text-sm font-medium shadow-lg">
                      Featured Video
                    </div>
                  </div>
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed/mgqnZDA1D3o"
                      title="Jessica Lynne White Featured Video"
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aFrXrohHp24zM2VdBlvvH8nRvieqSs.png"
                    alt="Jessica Lynne White on Legacy Makers TV"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-3">
                  <Tv className="w-3 h-3 inline mr-1" />
                  TV Feature
                </div>
                <h4 className="text-xl font-bold mb-3">Legacy Makers TV</h4>
                <p className="text-gray-600 mb-4">
                  Jessica shares her journey from physical therapist to successful telehealth entrepreneur, revealing
                  the strategies that helped her build multiple seven-figure businesses.
                </p>
                <Link
                  href="https://www.legacymakerstv.com/jessica-lynne-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent"
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qk8TurTAmM0dGM4ciVhjtw91CqC2Br.png"
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
                  In this powerful episode, Jessica breaks down the exact framework she uses to launch profitable
                  telehealth businesses and helps entrepreneurs turn telehealth ideas into thriving, scalable brands.
                  Learn the real steps to launch from the ground up.
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
                    alt="Jessica Lynne White on The Medspa Club Podcast"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-3">
                  <Mic className="w-3 h-3 inline mr-1" />
                  Podcast Feature
                </div>
                <h4 className="text-xl font-bold mb-3">The Medspa Club Podcast</h4>
                <p className="text-gray-600 mb-4">
                  Jessica discusses innovative strategies for integrating GLP-1 services into existing medspa practices,
                  creating new revenue streams while maintaining clinical excellence.
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

            {/* The Digital Coach Podcast */}
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
                <Link href="https://www.youtube.com/watch?v=oy59tHScn18" target="_blank" rel="noopener noreferrer">
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
                As Featured In
              </div>
              <h3 className="text-2xl font-bold mb-2">Press Coverage</h3>
              <p className="text-muted-foreground">
                Jessica's expertise has been featured in leading business and healthcare publications
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <Link
                href="https://ktla.com/business/press-releases/ein-presswire/811942259/jessica-lynne-white-joins-legacy-makers-tv-to-share-insights-on-healthcare-innovation-and-building-a-lasting-business/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">KTLA</h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Healthcare Innovation & Building a Lasting Business</p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://voyagela.com/interview/daily-inspiration-meet-jessica-lynne-white-pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">Voyage LA</h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Daily Inspiration: Meet Jessica Lynne White, PT</p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://finance.yahoo.com/news/kickstartsocial-co-digital-marketing-agency-041100626.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">Yahoo Finance</h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      KickstartSocial.co: Digital Marketing Agency Success
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://www.femalefirst.co.uk/features/jessica-lynne-white-successful-balancing-motherhood-scaling-digital-marketing-agency-1324648.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">Female First</h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Balancing Motherhood & Scaling a Digital Marketing Agency
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://thefrisky.com/jessica-lynne-physical-therapist-fueled-career-in-digital-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">The Frisky</h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">From Physical Therapist to Digital Marketing Leader</p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://londondailypost.com/build-a-personal-brand-youll-love-and-get-paid-to-post-with-kickstart-my-influence-a-four-week-online-mastermind-workshop-by-jessica-lynne-white/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">
                        London Daily Post
                      </h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Build a Personal Brand with Kickstart My Influence</p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://apnews.com/press-release/ein-presswire-newsmatics/medical-technology-florida-ce14ec4b28737268d33068a0b61d984e"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">AP News</h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Medical Technology Innovation in Florida</p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://www.benzinga.com/content/45363261/jessica-lynne-white-joins-legacy-makers-tv-to-share-insights-on-healthcare-innovation-and-building-a"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">Benzinga</h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Healthcare Innovation & Business Building</p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://fox5sandiego.com/business/press-releases/ein-presswire/811942259/jessica-lynne-white-joins-legacy-makers-tv-to-share-insights-on-healthcare-innovation-and-building-a-lasting-business/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">Fox 5 San Diego</h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Healthcare Innovation Story</p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="https://www.americanbusinesstimes.com/article/811942259-jessica-lynne-white-joins-legacy-makers-tv-to-share-insights-on-healthcare-innovation-and-building-a-lasting-business"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg group-hover:text-rose-600 transition-colors">
                        American Business Times
                      </h4>
                      <Newspaper className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Building a Lasting Healthcare Business</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Professional Credibility Section */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Licensed Healthcare Professional</h4>
                <p className="text-sm text-muted-foreground">
                  BS, MSPT with deep understanding of clinical operations and compliance
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Digital Marketing Expert</h4>
                <p className="text-sm text-muted-foreground">
                  Founder of Kickstart Social, specializing in health & wellness brands
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Proven Track Record</h4>
                <p className="text-sm text-muted-foreground">
                  Successfully launched multiple seven-figure telehealth businesses nationwide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
