"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const productData = [
  {
    name: "MELANO BOT HUB",
    users: 1247,
    revenue: 28400,
    growth: 23.5,
    status: "Growing",
  },
  {
    name: "LUXIA Premium",
    users: 892,
    revenue: 12200,
    growth: 15.2,
    status: "Stable",
  },
  {
    name: "ALEXIA Services",
    users: 445,
    revenue: 5000,
    growth: 8.7,
    status: "Stable",
  },
  {
    name: "Custom Automation",
    users: 156,
    revenue: 3200,
    growth: 45.8,
    status: "Expanding",
  },
]

export function ProductMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {productData.map((product, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.users} active users</CardDescription>
              </div>
              <Badge
                variant={
                  product.status === "Growing" ? "default" : product.status === "Expanding" ? "secondary" : "outline"
                }
              >
                {product.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Monthly Revenue</span>
                <span className="font-medium">${product.revenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Growth Rate</span>
                <span
                  className={`font-medium ${
                    product.growth > 20 ? "text-green-600" : product.growth > 10 ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  +{product.growth}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  style={{ width: `${Math.min(product.growth * 2, 100)}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
