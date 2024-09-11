import React, { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SellerAnalytics from '../SellerAnalytics/SellerAnalytics';
import InventoryManagement from '../InventoryManagement/InventoryManagement';
import OrderManagement from '../OrderManagement/OrderManagement';
import ProductListingForm from '../ProductListingForm/ProductListingForm';

const SellerDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const [sellerName, setSellerName] = useState('');

  useEffect(() => {
    // Simulating fetching seller's name from an API
    setTimeout(() => {
      setSellerName('Zandi');
    }, 1000);
  }, []);

  const renderTabContent = () => {
    switch(activeTab) {
      case 'analytics': return <SellerAnalytics />;
      case 'add-product': return <ProductListingForm />;
      case 'inventory': return <InventoryManagement />;
      case 'orders': return <OrderManagement />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFEFD5]">
      <Header />
      <main className="flex-grow p-6">
        <div className="max-w-screen-xl mx-auto">
          <nav className="flex justify-between items-center mb-4">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="/products" className="inline-flex items-center text-sm font-medium text-dark_brown hover:text-browner">
                  <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-dark_brown md:ms-2">Seller Dashboard</span>
                </div>
              </li>
            </ol>
            <button
              onClick={() => setActiveTab('add-product')}
              className="bg-[#8B4513] text-white p-2 rounded-full hover:bg-[#A0522D] transition-colors"
              title="Add Product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </nav>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-serif text-[#8B4513] mb-2">
                {sellerName ? `Welcome back, ${sellerName}!` : 'Loading...'}
              </h2>
              <p className="text-gray-600 mb-6">
                Manage your products, track your sales, and grow your business with our seller dashboard.
              </p>
              <div className="flex border-b border-[#8B4513] mb-6">
                {['Analytics','Add Product', 'Inventory', 'Orders'].map((tab) => (
                  <button
                    key={tab}
                    className={`py-2 px-4 font-medium ${
                      activeTab === tab.toLowerCase().replace(' ', '-')
                        ? 'text-[#8B4513] border-b-2 border-[#8B4513]'
                        : 'text-gray-500 hover:text-[#8B4513]'
                    }`}
                    onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="mt-6">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellerDashboardPage;