import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const Modal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{message}</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              This action cannot be undone.
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Confirm
            </button>
            <button
              onClick={onClose}
              className="mt-3 px-4 py-2 bg-gray-100 text-gray-700 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductListingForm = () => {
  const initialFormData = {
    id: '',
    title: '',
    description: '',
    link: '',
    availability: '',
    availability_date: '',
    price: '',
    brand: '',
    condition: '',
    image: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const totalSteps = 5; // Added a review step

  useEffect(() => {
    const isDirty = Object.values(formData).some(value => value !== '' && value !== null);
    setIsFormDirty(isDirty);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0]
      }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isReviewing) {
      setIsReviewing(true);
    } else {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      triggerConfetti();
    }
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
  const resetForm = () => {
    setFormData(initialFormData);
    setStep(1);
    setIsSubmitted(false);
    setImagePreview(null);
  };

  const openDiscardModal = () => setIsModalOpen(true);
  const closeDiscardModal = () => setIsModalOpen(false);

  const discardProduct = () => {
    resetForm();
    closeDiscardModal();
  };

  const goBackToEdit = () => {
    setIsReviewing(false);
    setStep(totalSteps - 1);
  };

  const renderStep = () => {
    if (isReviewing) {
      return (
        <>
          <div className="space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              key !== 'image' && (
                <div key={key} className="flex justify-between items-center">
                  <span className="font-medium text-[#8B4513] capitalize">{key.replace('_', ' ')}: </span>
                  <span className="text-gray-700">{value}</span>
                </div>
              )
            ))}
            {imagePreview && (
              <div className="mt-4">
                <p className="font-medium text-[#8B4513] mb-2">Product Image:</p>
                <img src={imagePreview} alt="Product preview" className="w-full h-64 object-cover rounded-lg" />
              </div>
            )}
          </div>
        </>
      );
    }

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
                  className="mt-1 block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
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
                  className="mt-1 block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
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
                  className="mt-1 block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
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
                  className="mt-1 block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
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
                  className="mt-1 block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
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
                  className="mt-1 block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
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
                  className="mt-1 block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
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
                  className="mt-1 block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-[#8B4513]">Price (R)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-[#8B4513] focus:border-[#8B4513] text-gray-900"
                />
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Product Image</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-[#8B4513]">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#8B4513] file:text-white
                    hover:file:bg-[#A0522D]"
                />
              </div>
              {imagePreview && (
                <div className="mt-4">
                  <img src={imagePreview} alt="Product preview" className="w-full h-64 object-cover rounded-lg" />
                </div>
              )}
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
          onClick={resetForm}
          className="px-6 py-3 bg-[#8B4513] text-white rounded-md hover:bg-[#A0522D] transition-colors text-lg font-semibold"
        >
          List Another Product
        </button>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-serif text-[#8B4513] mb-6">
          {isReviewing ? "Review Your Product" : "Add New Product"}
        </h2>
        {renderStep()}
        <div className="flex justify-between mt-6">
          {(step > 1 || isReviewing) && (
            <button
              type="button"
              onClick={isReviewing ? goBackToEdit : prevStep}
              className="px-4 py-2 border border-[#8B4513] text-[#8B4513] rounded-md hover:bg-[#8B4513] hover:text-white transition-colors"
            >
              {isReviewing ? "Edit" : "Previous"}
            </button>
          )}
          {step < totalSteps && !isReviewing ? (
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
              {isReviewing ? "Submit Listing" : "Review"}
            </button>
          )}
        </div>
        {!isReviewing && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">Step {step} of {totalSteps}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-[#8B4513] h-2.5 rounded-full transition-all duration-300 ease-in-out" 
                style={{width: `${(step / totalSteps) * 100}%`}}
              ></div>
            </div>
          </div>
        )}
        {!isReviewing && (
          <button
            type="button"
            onClick={openDiscardModal}
            disabled={!isFormDirty}
            className={`mt-4 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-colors ${!isFormDirty ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Discard Product
          </button>
        )}
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={closeDiscardModal}
        onConfirm={discardProduct}
        message="Are you sure you want to discard this product?"
      />
    </>
  );
};

export default ProductListingForm;