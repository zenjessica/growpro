import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EarningsCalculatorSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Visualize Your Potential Growth</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you are an individual or a brand, our Growth Calculator offers a clear, straightforward way to project
          your business growth.
        </p>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl">Growth Projection Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="text-left">
                <label className="text-sm font-medium text-muted-foreground">Current Revenue</label>
                <div className="mt-1 p-3 border rounded-lg bg-gray-50">
                  <span className="text-lg font-semibold">$50,000</span>
                </div>
              </div>
              <div className="text-left">
                <label className="text-sm font-medium text-muted-foreground">Growth Rate</label>
                <div className="mt-1 p-3 border rounded-lg bg-gray-50">
                  <span className="text-lg font-semibold">25%</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200 rounded-lg">
              <p className="text-sm text-rose-700 mb-2">Projected Annual Growth</p>
              <p className="text-3xl font-bold text-rose-800">$62,500</p>
              <p className="text-sm text-rose-600 mt-1">+$12,500 increase</p>
            </div>

            <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">Speak to an Expert</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
