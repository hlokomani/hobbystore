import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const ProductListingForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    link: '',
    image_link: '',
    availability: '',
    availability_date: '',
    price: '',
    brand: '',
    condition: '',
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 3;

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
    setIsSubmitted(true);
    triggerConfetti();
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="id" className="block text-sm font-medium text-[#8B4513]">Product ID</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-[#8B4513]">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                />
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                ></textarea>
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
                <label htmlFor="link" className="block text-sm font-medium text-[#8B4513]">Product Link</label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
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
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-[#8B4513]">Condition</label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                >
                  <option value="">Select condition</option>
                  <option value="new">New</option>
                  <option value="refurbished">Refurbished</option>
                  <option value="used">Used</option>
                </select>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Availability and Pricing</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-[#8B4513]">Availability</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                >
                  <option value="">Select availability</option>
                  <option value="in stock">In Stock</option>
                  <option value="out of stock">Out of Stock</option>
                  <option value="preorder">Preorder</option>
                </select>
              </div>
              <div>
                <label htmlFor="availability_date" className="block text-sm font-medium text-[#8B4513]">Availability Date</label>
                <input
                  type="date"
                  id="availability_date"
                  name="availability_date"
                  value={formData.availability_date}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-[#8B4513]">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-[#8B4513] mb-4 animate-bounce">Product Successfully Listed!</h2>
        <p className="text-xl text-[#A0522D] mb-8">Your item will be live soon.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-[#8B4513] text-white rounded-md hover:bg-[#A0522D] transition-colors text-lg font-semibold"
        >
          List Another Product
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-serif text-[#8B4513] mb-6">Add New Product</h2>
      {renderStep()}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 border border-[#8B4513] text-[#8B4513] rounded-md hover:bg-[#8B4513] hover:text-white transition-colors"
          >
            Previous
          </button>
        )}
        {step < totalSteps ? (
          <button
            type="button"
            onClick={nextStep}
            className="px-4 py-2 bg-[#8B4513] text-white rounded-md hover:bg-[#A0522D] transition-colors"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-[#8B4513] text-white rounded-md hover:bg-[#A0522D] transition-colors"
          >
            Submit Listing
          </button>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">Step {step} of {totalSteps}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div 
            className="bg-[#8B4513] h-2.5 rounded-full transition-all duration-300 ease-in-out" 
            style={{width: `${(step / totalSteps) * 100}%`}}
          ></div>
        </div>
      </div>
    </form>
  );
};

export default ProductListingForm;