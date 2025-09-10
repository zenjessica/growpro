export default function FormularyAccessSection() {
  const services = [
    {
      title: "Providers",
      image: "/telehealth-provider-consultation.jpg",
      description: "Utilize a network of Board-certified telehealth providers trained on GLP-1s in all states",
    },
    {
      title: "Pharmacies",
      image: "/glp1-vial-navy.png",
      description: "Save on GLP-1s from credentialed pharmacies in our network to maximize your profits",
    },
    {
      title: "Platform",
      image: "/healthcare-dashboard-analytics.jpg",
      description: "From consumer facing websites and patient portal to payments and marketing GrowPro has you covered",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-gray-600">What is GrowPro</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col">
              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-left leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
