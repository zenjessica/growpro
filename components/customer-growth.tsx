"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const growthData = [
  { month: "Jan", new: 45, churned: 12, net: 33 },
  { month: "Feb", new: 52, churned: 8, net: 44 },
  { month: "Mar", new: 61, churned: 15, net: 46 },
  { month: "Apr", new: 58, churned: 11, net: 47 },
  { month: "May", new: 67, churned: 9, net: 58 },
  { month: "Jun", new: 73, churned: 13, net: 60 },
]

export function CustomerGrowth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Growth</CardTitle>
        <CardDescription>New customers vs churn over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {growthData.map((data, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 items-center">
              <div className="text-sm font-medium">{data.month}</div>
              <div className="text-center">
                <div className="text-sm font-bold text-green-600">+{data.new}</div>
                <div className="text-xs text-muted-foreground">New</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-red-600">-{data.churned}</div>
                <div className="text-xs text-muted-foreground">Churned</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-blue-600">+{data.net}</div>
                <div className="text-xs text-muted-foreground">Net</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-sm font-medium text-blue-900">Growth Summary</div>
          <div className="text-xs text-blue-700 mt-1">Average monthly net growth: +48 customers</div>
        </div>
      </CardContent>
    </Card>
  )
}
