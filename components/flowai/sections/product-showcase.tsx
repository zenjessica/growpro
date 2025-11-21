import { Button } from "@/components/ui/button"

export default function ProductShowcaseSection() {
  return (
    <section id="what-is-growpro" className="bg-gradient-to-b from-orange-50 to-rose-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-rose-900 mb-4">What is Our Solution?</h2>
            <p className="text-rose-800 leading-relaxed mb-6">
              Unlock instant access to our comprehensive compounded and branded formulary, featuring hundreds of
              prescription products from over 50 trusted pharmacies. Expand your healthcare offerings with these
              carefully vetted options and accelerate your business growth through improved patient outcomes and
              increased revenue potential.
            </p>
            <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white">
              <a href="https://www.videoask.com/fsiwk0673" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
          </div>
          <div className="relative">
            <img
              src="/branded-vials-showcase.jpeg"
              alt="Professional Healthcare Solutions"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
