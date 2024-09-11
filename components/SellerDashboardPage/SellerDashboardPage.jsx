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
      setSellerName('Sarah');
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
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-serif text-[#8B4513] mb-6">
              {sellerName ? `Welcome back, ${sellerName}!` : 'Loading...'}
            </h2>
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
      </main>
      <Footer />
    </div>
  );
};

export default SellerDashboardPage;