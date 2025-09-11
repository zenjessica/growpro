import { Badge } from "@/components/ui/badge"

export default function ProductCategoriesSection() {
  const categories = [
    "Medical Spas",
    "Clinical Practices",
    "Wellness Companies",
    "Digital Health Companies",
    "Gyms Fitness Studios",
    "Salon Owners",
    "Entrepreneurs",
  ]

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="px-6 py-2 text-sm bg-gradient-to-r from-rose-100 to-orange-100 text-rose-800 hover:from-rose-200 hover:to-orange-200 rounded-full border border-rose-200"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
