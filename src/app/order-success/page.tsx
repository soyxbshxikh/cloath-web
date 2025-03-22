'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaShoppingBag, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast';

export default function OrderSuccessPage() {
  const router = useRouter();
  const [customerEmail, setCustomerEmail] = useState<string>('');
  
  useEffect(() => {
    // Check if this was a real order completion or direct navigation
    const completedOrder = sessionStorage.getItem('completedOrder');
    
    if (!completedOrder) {
      // If user directly navigated to this page without completing an order
      router.replace('/shop');
      return;
    }
    
    // Get customer email if available
    const email = sessionStorage.getItem('customerEmail');
    if (email) {
      setCustomerEmail(email);
    }
    
    // Clear the order tracking data
    return () => {
      sessionStorage.removeItem('completedOrder');
      sessionStorage.removeItem('customerEmail');
    };
  }, [router]);

  const handleWhatsAppContact = () => {
    // WhatsApp number (remove any + symbol)
    const phoneNumber = "918830391908";
    
    // Create message
    const message = "Hello, I would like to inquire about my recent order from Cloth.";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Notify user
    Toast.success("Opening WhatsApp to contact our team.");
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 xs:py-16 sm:py-20">
      <div className="bg-white rounded-lg shadow-lg p-6 xs:p-8 sm:p-10 text-center max-w-md w-full">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 xs:mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-2 xs:mb-3">Order Placed Successfully!</h1>
        
        <p className="text-gray-600 mb-3 xs:mb-4 text-sm xs:text-base">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        
        {customerEmail && (
          <p className="text-gray-600 mb-6 xs:mb-8 text-sm xs:text-base">
            A confirmation email will be sent to <span className="font-medium">{customerEmail}</span>
          </p>
        )}
        
        <div className="flex flex-col gap-3 mb-6">
          <button 
            onClick={handleWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white py-2 xs:py-3 px-4 rounded-md inline-flex items-center justify-center gap-2 xs:gap-3 text-xs xs:text-sm sm:text-base transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            Contact via WhatsApp
          </button>
        </div>
        
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 justify-center">
          <Link 
            href="/shop" 
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 xs:py-3 px-4 rounded-md inline-flex items-center justify-center gap-2 text-xs xs:text-sm sm:text-base transition-colors"
          >
            <FaShoppingBag className="text-sm xs:text-base" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
} 