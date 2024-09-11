import React, { useState } from 'react';

const ProductListingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    brand: '',
    model: '',
    color: '',
    condition: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-serif text-[#8B4513] mb-6">Add New Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#8B4513]">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513]"
          />
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-[#8B4513]">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513]"
          />
        </div>
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-[#8B4513]">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513]"
          />
        </div>
        <div>
          <label htmlFor="color" className="block text-sm font-medium text-[#8B4513]">Color</label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-[#8B4513]">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513]"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-[#8B4513]">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513]"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-[#8B4513]">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513]"
          >
            <option value="">Select a category</option>
            <option value="electric">Electric Guitar</option>
            <option value="acoustic">Acoustic Guitar</option>
            <option value="bass">Bass Guitar</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-[#8B4513]">Initial Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="condition" className="block text-sm font-medium text-[#8B4513]">Condition</label>
        <select
          id="condition"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513]"
        >
          <option value="">Select condition</option>
          <option value="new">New</option>
          <option value="like-new">Like New</option>
          <option value="used">Used</option>
          <option value="for-parts">For Parts or Not Working</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B4513] hover:bg-[#A0522D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B4513]"
      >
        List Product
      </button>
    </form>
  );
};

export default ProductListingForm;