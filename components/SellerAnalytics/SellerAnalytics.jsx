import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
];

const SellerAnalytics = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
        <h3 className="text-lg font-medium text-[#8B4513] mb-2">Total Revenue</h3>
        <p className="text-2xl font-bold text-[#A0522D]">$28,000</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
        <h3 className="text-lg font-medium text-[#8B4513] mb-2">Total Orders</h3>
        <p className="text-2xl font-bold text-[#A0522D]">156</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
        <h3 className="text-lg font-medium text-[#8B4513] mb-2">Average Order Value</h3>
        <p className="text-2xl font-bold text-[#A0522D]">$179.49</p>
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B4513]">
      <h3 className="text-lg font-medium text-[#8B4513] mb-4">Monthly Sales</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#8B4513" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default SellerAnalytics;