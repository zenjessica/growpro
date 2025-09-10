"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function EarningsCalculatorSection() {
  const [patientCount, setPatientCount] = useState([1088])

  // Calculate profits based on patient count (assuming ~$110 monthly profit per patient)
  const monthlyProfitPerPatient = 110
  const monthlyProfit = patientCount[0] * monthlyProfitPerPatient
  const yearlyProfit = monthlyProfit * 12

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="earnings-calculator" className="py-16 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Visualize Your Potential Earnings</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
          Whether you are an individual or a brand, our GLP-1 Revenue Calculator offers a clear, straightforward way to
          project your financial growth.
        </p>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Left side - Calculator */}
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-xl">Revenue Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-4 block">Number of Patients:</label>
                <div className="space-y-4">
                  <Slider
                    value={patientCount}
                    onValueChange={setPatientCount}
                    max={10000}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0</span>
                    <span>10000</span>
                  </div>
                </div>
              </div>

              <div>
                <input
                  type="number"
                  value={patientCount[0]}
                  onChange={(e) => setPatientCount([Number.parseInt(e.target.value) || 0])}
                  className="w-full p-3 border rounded-lg text-lg font-semibold text-center"
                  min="0"
                  max="10000"
                />
              </div>
            </CardContent>
          </Card>

          {/* Right side - Results */}
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-xl">Estimated Revenue:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold">Monthly Profit: {formatCurrency(monthlyProfit)}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Yearly Profit: {formatCurrency(yearlyProfit)}</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Actual revenue can vary and is dependent on items such as medication costs,
                  dosages, telehealth visit and others
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3">Speak to an Expert</Button>
        </div>
      </div>
    </section>
  )
}
