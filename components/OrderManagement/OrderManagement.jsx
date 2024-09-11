import React, { useState } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', total: 9999.99, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', total: 6999.99, status: 'Shipped' },
    { id: 3, customer: 'Bob Johnson', total: 8499.99, status: 'Delivered' },
    { id: 4, customer: 'Alice Brown', total: 5999.99, status: 'Pending' },
    { id: 5, customer: 'Charlie Davis', total: 7499.99, status: 'Shipped' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-[#8B4513]">
        <thead className="bg-[#8B4513] text-white">
          <tr>
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">Customer</th>
            <th className="py-2 px-4 text-left">Total (ZAR)</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-[#FFEFD5]">
              <td className="py-2 px-4 text-gray-800">{order.id}</td>
              <td className="py-2 px-4 text-gray-800">{order.customer}</td>
              <td className="py-2 px-4 text-gray-800">R {order.total.toFixed(2)}</td>
              <td className="py-2 px-4">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border rounded p-1 text-gray-800"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
              <td className="py-2 px-4">
                <button className="bg-[#8B4513] text-white py-1 px-3 rounded hover:bg-[#A0522D]">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;