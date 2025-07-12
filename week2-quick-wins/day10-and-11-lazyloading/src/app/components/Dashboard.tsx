// src/app/components/Dashboard.tsx
"use client";

import { useEffect, useState } from "react";

interface SalesData {
  id: number;
  date: string;
  product: string;
  amount: number;
  customer: string;
  region: string;
  status: "completed" | "pending" | "failed";
}

interface MetricCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export default function Dashboard() {
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [metrics, setMetrics] = useState<MetricCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate heavy data processing
  useEffect(() => {
    const generateSalesData = (): SalesData[] => {
      const products = ["MacBook Pro", "iPhone 15", "iPad Air", "Apple Watch", "AirPods"];
      const customers = [
        "Acme Corp",
        "TechStart Inc",
        "Global Solutions",
        "Digital Dynamics",
        "Future Systems",
      ];
      const regions = ["North", "South", "East", "West", "Central"];
      const statuses: SalesData["status"][] = ["completed", "pending", "failed"];

      return Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
        product: products[Math.floor(Math.random() * products.length)],
        amount: Math.floor(Math.random() * 5000) + 100,
        customer: customers[Math.floor(Math.random() * customers.length)],
        region: regions[Math.floor(Math.random() * regions.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
      }));
    };

    const generateMetrics = (data: SalesData[]): MetricCard[] => {
      const totalRevenue = data
        .filter((d) => d.status === "completed")
        .reduce((sum, d) => sum + d.amount, 0);
      const totalOrders = data.length;
      const completedOrders = data.filter((d) => d.status === "completed").length;
      const avgOrderValue = totalRevenue / completedOrders;

      return [
        {
          title: "Total Revenue",
          value: `$${totalRevenue.toLocaleString()}`,
          change: "+12.5%",
          trend: "up",
        },
        {
          title: "Total Orders",
          value: totalOrders.toLocaleString(),
          change: "+8.2%",
          trend: "up",
        },
        {
          title: "Conversion Rate",
          value: `${((completedOrders / totalOrders) * 100).toFixed(1)}%`,
          change: "-2.1%",
          trend: "down",
        },
        {
          title: "Avg Order Value",
          value: `$${avgOrderValue.toFixed(2)}`,
          change: "+5.7%",
          trend: "up",
        },
      ];
    };

    // Simulate heavy processing delay
    setTimeout(() => {
      const data = generateSalesData();
      setSalesData(data);
      setMetrics(generateMetrics(data));
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="mb-8 grid grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-32 rounded-lg bg-gray-200"></div>
            ))}
          </div>
          <div className="h-96 rounded-lg bg-gray-200"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Sales Dashboard</h1>

      {/* Metrics Cards */}
      <div className="mb-8 grid grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
            <p className="mt-2 text-2xl font-bold">{metric.value}</p>
            <div className="mt-2 flex items-center">
              <span
                className={`text-sm ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}
              >
                {metric.trend === "up" ? "↗" : "↘"} {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Table */}
      <div className="rounded-lg border bg-white shadow-sm">
        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">Recent Sales</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {salesData.slice(0, 50).map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                    #{sale.id}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{sale.date}</td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                    {sale.product}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                    {sale.customer}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                    {sale.region}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                    ${sale.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        sale.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : sale.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {sale.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
