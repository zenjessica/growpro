import { Button } from "@/components/ui/button"

export default function ProductShowcaseSection() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-rose-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-rose-900 mb-4">What is Our Solution?</h2>
            <p className="text-rose-800 leading-relaxed mb-6">
              Our platform is the foundation for modern businesses. It combines powerful analytics with intuitive design
              to help you make data-driven decisions. Whether you're tracking performance, managing workflows, or
              scaling operations, our solution adapts to your needs and grows with your business.
            </p>
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">Learn More</Button>
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
