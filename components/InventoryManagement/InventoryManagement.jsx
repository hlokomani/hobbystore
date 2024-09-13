import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Electric Guitar', price: 9999.99, stock: 10, description: 'Powerful electric guitar', link: 'https://example.com/electric', availability: 'in stock', availability_date: '2023-06-01', brand: 'GuitarCo', condition: 'new', image_url: 'https://example.com/electric.jpg' },
    { id: 2, name: 'Acoustic Guitar', price: 6999.99, stock: 15, description: 'Beautiful acoustic guitar', link: 'https://example.com/acoustic', availability: 'in stock', availability_date: '2023-06-01', brand: 'GuitarCo', condition: 'new', image_url: 'https://example.com/acoustic.jpg' },
    { id: 3, name: 'Bass Guitar', price: 8499.99, stock: 8, description: 'Powerful bass guitar', link: 'https://example.com/bass', availability: 'in stock', availability_date: '2023-06-01', brand: 'GuitarCo', condition: 'new', image_url: 'https://example.com/bass.jpg' },
    { id: 4, name: 'Classical Guitar', price: 5999.99, stock: 12, description: 'Elegant classical guitar', link: 'https://example.com/classical', availability: 'in stock', availability_date: '2023-06-01', brand: 'GuitarCo', condition: 'new', image_url: 'https://example.com/classical.jpg' },
    { id: 5, name: 'Guitar Amplifier', price: 3999.99, stock: 20, description: 'High-quality guitar amplifier', link: 'https://example.com/amplifier', availability: 'in stock', availability_date: '2023-06-01', brand: 'GuitarCo', condition: 'new', image_url: 'https://example.com/amplifier.jpg' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editStep, setEditStep] = useState(1);

  const handleStockChange = (id, newStock) => {
    setInventory(inventory.map(item => 
      item.id === id ? { ...item, stock: parseInt(newStock) } : item
    ));
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setEditStep(1);
    setIsModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingItem(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value
    }));
  };

  const handleSaveEdit = () => {
    setInventory(inventory.map(item => 
      item.id === editingItem.id ? editingItem : item
    ));
    setIsModalOpen(false);
    setEditingItem(null);
    setEditStep(1);
  };

  const sections = [
    { title: "Basic Information", step: 1 },
    { title: "Product Details", step: 2 },
    { title: "Additional Information", step: 3 },
    { title: "Review Changes", step: 4 }
  ];

  const renderEditForm = () => {
    switch(editStep) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={editingItem.name}
                  onChange={handleEditChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={editingItem.price}
                  onChange={handleEditChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={editingItem.stock}
                  onChange={handleEditChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Product Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={editingItem.description}
                  onChange={handleEditChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Link</label>
                <input
                  type="text"
                  name="link"
                  value={editingItem.link}
                  onChange={handleEditChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Additional Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Availability</label>
                <input
                  type="text"
                  name="availability"
                  value={editingItem.availability}
                  onChange={handleEditChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Availability Date</label>
                <input
                  type="text"
                  name="availability_date"
                  value={editingItem.availability_date}
                  onChange={handleEditChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={editingItem.brand}
                  onChange={handleEditChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Condition</label>
                <input
                  type="text"
                  name="condition"
                  value={editingItem.condition}
                  onChange={handleEditChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"
                />
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Review Changes</h3>
            <div className="space-y-4">
              {Object.entries(editingItem).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="font-medium text-[#8B4513] capitalize">{key.replace('_', ' ')}: </span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </>
        );
    }
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
                <button 
                  onClick={() => handleEdit(item)}
                  className="bg-[#8B4513] text-white py-1 px-3 rounded hover:bg-[#A0522D]"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {editingItem && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            
            {/* Navigation menu */}
            <div className="flex mb-4 border-b">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setEditStep(section.step)}
                  className={`mr-4 py-2 ${
                    editStep === section.step
                      ? 'text-[#8B4513] border-b-2 border-[#8B4513] font-medium'
                      : 'text-gray-500 hover:text-[#8B4513]'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {renderEditForm()}

            <div className="flex justify-between mt-6">
              {editStep > 1 && (
                <button
                  onClick={() => setEditStep(editStep - 1)}
                  className="px-4 py-2 border border-[#8B4513] text-[#8B4513] rounded-md hover:bg-[#8B4513] hover:text-white transition-colors"
                >
                  Previous
                </button>
              )}
              {editStep < 4 ? (
                <button
                  onClick={() => setEditStep(editStep + 1)}
                  className="px-4 py-2 bg-[#8B4513] text-white rounded-md hover:bg-[#A0522D] transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-[#8B4513] text-white rounded-md hover:bg-[#A0522D] transition-colors"
                >
                  Save Changes
                </button>
              )}
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">Step {editStep} of 4</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-[#8B4513] h-2.5 rounded-full transition-all duration-300 ease-in-out" 
                  style={{width: `${(editStep / 4) * 100}%`}}
                ></div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default InventoryManagement;