"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const revenueData = [
  { month: "Jan", revenue: 32000, target: 35000 },
  { month: "Feb", revenue: 35500, target: 37000 },
  { month: "Mar", revenue: 38200, target: 40000 },
  { month: "Apr", revenue: 42100, target: 42000 },
  { month: "May", revenue: 45600, target: 45000 },
  { month: "Jun", revenue: 48900, target: 48000 },
]

export function RevenueChart() {
  const maxValue = Math.max(...revenueData.map((d) => Math.max(d.revenue, d.target)))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Trend</CardTitle>
        <CardDescription>Monthly revenue vs targets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {revenueData.map((data, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{data.month}</span>
                <span className="font-medium">${data.revenue.toLocaleString()}</span>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full relative"
                    style={{ width: `${(data.revenue / maxValue) * 100}%` }}
                  >
                    <div
                      className="absolute top-0 right-0 w-1 h-3 bg-red-400 rounded-r-full"
                      style={{
                        transform: `translateX(${((data.target - data.revenue) / maxValue) * 100 * 4}px)`,
                        opacity: data.target > data.revenue ? 1 : 0,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span>Actual Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded"></div>
            <span>Target</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
