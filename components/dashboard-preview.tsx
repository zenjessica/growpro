"use client"
import { Button } from "@/components/ui/button"

export function DashboardPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Compliance</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless Compliance, Built In</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your platform is fully aligned with US legal, HIPAA, and pharmacy regulations—right out of the box.
            </p>
            <p className="text-gray-600 mb-8">
              From prescriptions to order flows, every workflow is securely designed to meet regulatory standards with
              zero extra setup.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Get Started</Button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Products</div>
                </div>
              </div>
              <div className="p-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_b17fbc46-8ae5-4832-a069-aa52b27282ee-GB9d4iIfC9b2gcAdg2SvQ5jHGwH4Vn.png"
                  alt="Wellie MD Compliance Dashboard"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
