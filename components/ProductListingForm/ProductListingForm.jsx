import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useCSVReader } from 'react-papaparse';
import { Tooltip } from 'react-tooltip';

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
  const [listingMode, setListingMode] = useState('single');
  const [bulkData, setBulkData] = useState([]);
  const { CSVReader } = useCSVReader();

  const totalSteps = listingMode === 'single' ? 5 : 2; // 2 steps for bulk upload

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
    if (listingMode === 'single') {
      if (!isReviewing) {
        setIsReviewing(true);
      } else {
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        triggerConfetti();
      }
    } else {
      // Bulk upload submission
      console.log('Bulk data submitted:', bulkData);
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

  const handleCSVUpload = (results) => {
    setBulkData(results.data);
    setStep(2); // Move to review step after CSV upload
  };

  const renderBulkUpload = () => {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Bulk Product Upload</h3>
        <div>
          <CSVReader
            onUploadAccepted={handleCSVUpload}
            config={{
              header: true,
              skipEmptyLines: true,
            }}
          >
            {({ getRootProps, acceptedFile }) => (
              <>
                <div {...getRootProps()} className="border-2 border-dashed border-[#8B4513] p-4 text-center cursor-pointer">
                  {acceptedFile ? (
                    <div className="text-[#8B4513]">{acceptedFile.name}</div>
                  ) : (
                    <p className="text-[#8B4513]">Drop CSV file here or click to upload</p>
                  )}
                </div>
                <Tooltip id="csv-format-tooltip" place="bottom" effect="solid">
                  CSV format: id, title, description, link, availability, availability_date, price, brand, condition, image_url
                </Tooltip>
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  data-tooltip-id="csv-format-tooltip"
                  className="mt-2 text-sm text-[#8B4513] underline"
                >
                  View CSV format
                </button>
              </>
            )}
          </CSVReader>
        </div>
        {bulkData.length > 0 && (
          <p className="text-green-600">{bulkData.length} products ready for upload</p>
        )}
      </div>
    );
  };

  const renderForm = () => {
    if (listingMode === 'bulk') {
      if (step === 1) {
        return renderBulkUpload();
      } else {
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Review Bulk Upload</h3>
            <p className="text-[#8B4513]">{bulkData.length} products are ready to be uploaded.</p>
            <p className="text-[#8B4513]">Please review the data before submitting.</p>
            <div className="mt-4 border border-[#8B4513] rounded-md p-4 max-h-60 overflow-y-auto">
              <table className="w-full text-sm text-left text-[#8B4513]">
                <thead>
                  <tr>
                    <th className="px-2 py-1">ID</th>
                    <th className="px-2 py-1">Title</th>
                    <th className="px-2 py-1">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {bulkData.slice(0, 5).map((product, index) => (
                    <tr key={index} className="border-b border-[#8B4513] last:border-b-0">
                      <td className="px-2 py-1">{product.id}</td>
                      <td className="px-2 py-1">{product.title}</td>
                      <td className="px-2 py-1">{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {bulkData.length > 5 && (
                <p className="mt-2 text-center text-[#8B4513]">
                  ... and {bulkData.length - 5} more products
                </p>
              )}
            </div>
          </div>
        );
      }
    }

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
        <h2 className="text-3xl font-bold text-[#8B4513] mb-4 animate-bounce">
          {listingMode === 'single' ? "Product Successfully Listed!" : "Products Successfully Uploaded!"}
        </h2>
        <p className="text-xl text-[#A0522D] mb-8">
          {listingMode === 'single' ? "Your item will be live soon." : "Your items will be live soon."}
        </p>
        <button
          onClick={() => {
            setListingMode('single');
            resetForm();
          }}
          className="px-6 py-3 bg-[#8B4513] text-white rounded-md hover:bg-[#A0522D] transition-colors text-lg font-semibold"
        >
          List Another Product
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-serif text-[#8B4513] mb-6">
        {isReviewing ? "Review Your Product" : "Add New Product"}
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#8B4513] mb-2">Listing Mode</label>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => {
              setListingMode('single');
              setStep(1);
              setBulkData([]);
            }}
            className={`px-4 py-2 rounded-md ${
              listingMode === 'single' ? 'bg-[#8B4513] text-white' : 'bg-gray-200 text-[#8B4513]'
            }`}
            data-tooltip-id="single-mode-tooltip"
          >
            Single Product
          </button>
          <Tooltip id="single-mode-tooltip" place="top" effect="solid">
            List products one at a time with detailed information
          </Tooltip>

          <button
            type="button"
            onClick={() => {
              setListingMode('bulk');
              setStep(1);
              setFormData(initialFormData);
            }}
            className={`px-4 py-2 rounded-md ${
              listingMode === 'bulk' ? 'bg-[#8B4513] text-white' : 'bg-gray-200 text-[#8B4513]'
            }`}
            data-tooltip-id="bulk-mode-tooltip"
          >
            Bulk Upload
          </button>
          <Tooltip id="bulk-mode-tooltip" place="top" effect="solid">
            Upload multiple products at once using a CSV file
          </Tooltip>
        </div>
      </div>

      {renderForm()}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 border border-[#8B4513] text-[#8B4513] rounded-md hover:bg-[#8B4513] hover:text-white transition-colors"
          >
            Previous
          </button>
        )}
        {step < totalSteps ? (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="px-4 py-2 bg-[#8B4513] text-white rounded-md hover:bg-[#A0522D] transition-colors"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-[#8B4513] text-white rounded-md hover:bg-[#A0522D] transition-colors"
          >
            {listingMode === 'single' ? "Submit Listing" : "Upload Products"}
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <p className="text-sm text-gray-500">Step {step} of {totalSteps}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div 
            className="bg-[#8B4513] h-2.5 rounded-full transition-all duration-300 ease-in-out" 
            style={{width: `${(step / totalSteps) * 100}%`}}
          ></div>
        </div>
      </div>

      <Tooltip id="listing-guide-tooltip" place="top" effect="solid">
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Ensure all required fields are filled out accurately.</li>
          <li>Use high-quality images (recommended size: 1000x1000 pixels).</li>
          <li>Write clear and detailed product descriptions.</li>
          <li>Double-check pricing and availability information.</li>
          <li>For bulk uploads, follow the CSV format provided.</li>
        </ul>
      </Tooltip>
      <button
        type="button"
        data-tooltip-id="listing-guide-tooltip"
        className="text-sm text-[#8B4513] underline"
      >
        View Listing Guide
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeDiscardModal}
        onConfirm={discardProduct}
        message="Are you sure you want to discard this product?"
      />
    </form>
  );
};

export default ProductListingForm;