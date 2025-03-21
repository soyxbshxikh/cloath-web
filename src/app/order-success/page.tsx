'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaShoppingBag, FaHome } from 'react-icons/fa';

export default function OrderSuccessPage() {
  const router = useRouter();
  
  // Order state
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
    date: new Date().toLocaleDateString(),
    email: '',
  });
  
  // If no order is being processed, redirect to home
  useEffect(() => {
    // This could check a global state or URL parameter to verify 
    // that the user came from a legitimate checkout
    const hasValidOrder = sessionStorage.getItem('completedOrder');
    
    if (!hasValidOrder) {
      // Set a small timeout to allow the component to render first
      const timer = setTimeout(() => {
        router.push('/');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
    
    // Get customer email if available
    const customerEmail = sessionStorage.getItem('customerEmail');
    if (customerEmail) {
      setOrderDetails(prev => ({
        ...prev,
        email: customerEmail
      }));
    }
    
    // Clear the order flag
    sessionStorage.removeItem('completedOrder');
    sessionStorage.removeItem('customerEmail');
  }, [router]);

  return (
    <div className="container mx-auto py-16 px-6 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-green-500 mb-4">
          <FaCheckCircle className="inline-block text-6xl" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
        <p className="text-xl text-gray-600 mb-6">
          Your order has been successfully placed.
        </p>
        
        <div className="mb-8 border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Order Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div>
              <p className="text-sm text-gray-600">Order Number:</p>
              <p className="font-medium">{orderDetails.orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date:</p>
              <p className="font-medium">{orderDetails.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email:</p>
              <p className="font-medium">{orderDetails.email}</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">
          We&apos;ve sent a confirmation email with your order details and tracking information.
          If you have any questions, please contact our customer support.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors"
          >
            <FaHome /> Return to Home
          </Link>
          <Link 
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors"
          >
            <FaShoppingBag /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
} 