import React, { useState } from 'react';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Electric Guitar', price: 9999.99, stock: 10 },
    { id: 2, name: 'Acoustic Guitar', price: 6999.99, stock: 15 },
    { id: 3, name: 'Bass Guitar', price: 8499.99, stock: 8 },
    { id: 4, name: 'Classical Guitar', price: 5999.99, stock: 12 },
    { id: 5, name: 'Guitar Amplifier', price: 3999.99, stock: 20 },
  ]);

  const handleStockChange = (id, newStock) => {
    setInventory(inventory.map(item => 
      item.id === id ? { ...item, stock: parseInt(newStock) } : item
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-[#8B4513]">
        <thead className="bg-[#8B4513] text-white">
          <tr>
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-left">Price (ZAR)</th>
            <th className="py-2 px-4 text-left">Stock</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className="border-b border-[#FFEFD5]">
              <td className="py-2 px-4 text-gray-800">{item.name}</td>
              <td className="py-2 px-4 text-gray-800">R {item.price.toFixed(2)}</td>
              <td className="py-2 px-4">
                <input 
                  type="number" 
                  className="border rounded p-1 w-20 text-gray-800" 
                  value={item.stock}
                  onChange={(e) => handleStockChange(item.id, e.target.value)}
                />
              </td>
              <td className="py-2 px-4">
                <button className="bg-[#8B4513] text-white py-1 px-3 rounded hover:bg-[#A0522D]">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;