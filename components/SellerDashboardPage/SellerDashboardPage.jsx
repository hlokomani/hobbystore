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

  const tabs = [
    { id: 'analytics', name: 'Analytics', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'add-product', name: 'Add Product', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
    { id: 'inventory', name: 'Inventory', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { id: 'orders', name: 'Orders', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
  ];

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
          </nav>
          <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-64 bg-[#8B4513] p-6">
              <h2 className="text-2xl font-serif text-white mb-6">
                {sellerName ? `Welcome, ${sellerName}!` : 'Loading...'}
              </h2>
              <nav>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center p-3 mb-2 rounded-md transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#A0522D] text-white'
                        : 'text-white hover:bg-[#A0522D]'
                    }`}
                  >
                    <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                    </svg>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex-grow p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">
                {tabs.find(tab => tab.id === activeTab)?.name}
              </h3>
              <div className="mt-4">
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