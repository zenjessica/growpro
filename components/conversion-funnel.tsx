"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const funnelData = [
  { stage: "Website Visitors", count: 12450, percentage: 100 },
  { stage: "Leads Generated", count: 1834, percentage: 14.7 },
  { stage: "Qualified Leads", count: 892, percentage: 7.2 },
  { stage: "Demos Scheduled", count: 445, percentage: 3.6 },
  { stage: "Proposals Sent", count: 267, percentage: 2.1 },
  { stage: "Closed Deals", count: 89, percentage: 0.7 },
]

export function ConversionFunnel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Funnel</CardTitle>
        <CardDescription>Lead conversion through sales stages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {funnelData.map((stage, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{stage.stage}</span>
                <div className="text-right">
                  <div className="text-sm font-bold">{stage.count.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">{stage.percentage}%</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    index === 0
                      ? "bg-blue-600"
                      : index === 1
                        ? "bg-green-500"
                        : index === 2
                          ? "bg-yellow-500"
                          : index === 3
                            ? "bg-orange-500"
                            : index === 4
                              ? "bg-red-500"
                              : "bg-purple-600"
                  }`}
                  style={{ width: `${stage.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
