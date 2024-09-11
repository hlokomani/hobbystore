import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', sales: 70000 },
  { month: 'Feb', sales: 55000 },
  { month: 'Mar', sales: 85000 },
  { month: 'Apr', sales: 75000 },
  { month: 'May', sales: 100000 },
  { month: 'Jun', sales: 90000 },
];

const categoryData = [
  { name: 'Electric Guitars', value: 40 },
  { name: 'Acoustic Guitars', value: 30 },
  { name: 'Bass Guitars', value: 20 },
  { name: 'Accessories', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const topProducts = [
  { id: 1, name: 'Fender Stratocaster', sales: 50, revenue: 499999.50 },
  { id: 2, name: 'Gibson Les Paul', sales: 40, revenue: 479999.60 },
  { id: 3, name: 'Taylor Acoustic', sales: 35, revenue: 244999.65 },
  { id: 4, name: 'Ibanez RG', sales: 30, revenue: 209999.70 },
  { id: 5, name: 'Boss Katana Amp', sales: 25, revenue: 99999.75 },
];

const SellerAnalytics = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
        <h3 className="text-lg font-medium text-[#8B4513] mb-2">Total Revenue</h3>
        <p className="text-2xl font-bold text-[#A0522D]">R 475,000.00</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
        <h3 className="text-lg font-medium text-[#8B4513] mb-2">Total Orders</h3>
        <p className="text-2xl font-bold text-[#A0522D]">256</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
        <h3 className="text-lg font-medium text-[#8B4513] mb-2">Average Order Value</h3>
        <p className="text-2xl font-bold text-[#A0522D]">R 1,855.47</p>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
      <h3 className="text-lg font-medium text-[#8B4513] mb-4">Monthly Sales Trend</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8B4513" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
        <h3 className="text-lg font-medium text-[#8B4513] mb-4">Product Category Breakdown</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
        <h3 className="text-lg font-medium text-[#8B4513] mb-4">Top Selling Products</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Sales</th>
                <th className="py-2 px-4 text-left">Revenue (ZAR)</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4">{product.name}</td>
                  <td className="py-2 px-4">{product.sales}</td>
                  <td className="py-2 px-4">R {product.revenue.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default SellerAnalytics;