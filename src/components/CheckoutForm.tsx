'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { clearCart } from '@/store/cartSlice';
import { FaGooglePay, FaMoneyBillWave } from 'react-icons/fa';
import { SiPhonepe } from 'react-icons/si';
import { useRouter } from 'next/navigation';
import Toast from './Toast';
import formatPrice from '@/data/formatPrice';

type PaymentMethod = 'gpay' | 'phonepe' | 'cod';
type PaymentStatus = 'idle' | 'pending' | 'success' | 'failed';

interface PaymentInfo {
  phone: string;
  email: string;
  upiId: string;
}

const PAYMENT_INFO: PaymentInfo = {
  phone: '+918830391908', // Replace with your actual phone number
  email: 'laxmijaiswar323@gmail.com', // Replace with your actual email
  upiId: 'laxmijaiswar323@okaxis', // Replace with your actual UPI ID
};

export default function CheckoutForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  // Generate payment URL for mobile app
  const getPaymentUrl = () => {
    const amount = totalPrice.toFixed(2);
    // This is a simplified example, in production you'd want to follow specific provider specs
    if (paymentMethod === 'gpay') {
      return `upi://pay?pa=${PAYMENT_INFO.upiId}&pn=CloathStore&am=${amount}&cu=INR&tn=Payment for order`;
    } else if (paymentMethod === 'phonepe') {
      return `upi://pay?pa=${PAYMENT_INFO.upiId}&pn=CloathStore&am=${amount}&cu=INR&tn=Payment for order`;
    } else {
      return '';
    }
  };
  
  // Open app directly for payment
  const openPaymentApp = () => {
    if (!validateForm()) {
      return;
    }
    
    const paymentUrl = getPaymentUrl();
    setPaymentStatus('pending');
    setIsProcessing(true);
    
    if (typeof window !== 'undefined') {
      // Store the payment timestamp to track when payment was initiated
      sessionStorage.setItem('paymentStartTime', Date.now().toString());
      sessionStorage.setItem('paymentMethod', paymentMethod);
      sessionStorage.setItem('paymentAmount', totalPrice.toFixed(2));
      
      // Show processing message
      Toast.loading('Opening payment app...', 'payment-process');
      
      // Try to open the payment URL which should trigger the app
      window.location.href = paymentUrl;
      
      // Handle payment status when user returns to the app
      window.addEventListener('focus', handlePaymentReturn);
    }
  };
  
  // Handle when user returns from payment app
  const handlePaymentReturn = () => {
    // Only run once
    window.removeEventListener('focus', handlePaymentReturn);
    
    // Check if we're returning from a payment
    const startTimeStr = sessionStorage.getItem('paymentStartTime');
    if (!startTimeStr) return;
    
    const paymentStartTime = parseInt(startTimeStr);
    const elapsedTime = Date.now() - paymentStartTime;
    
    // If user returns too quickly (less than 5 seconds), they probably didn't complete payment
    if (elapsedTime < 5000) {
      setPaymentStatus('failed');
      setIsProcessing(false);
      Toast.dismiss('payment-process');
      Toast.error('Payment was not completed. Please try again.', 5000);
      return;
    }
    
    // If user returns after a reasonable time, show confirmation dialog
    Toast.dismiss('payment-process');
    
    // Create a custom modal for confirmation
    const confirmed = window.confirm("Did your payment complete successfully?\n\nPress 'OK' if payment was successful or 'Cancel' if it failed.");
    
    if (confirmed) {
      // Success path
      handlePaymentSuccess();
    } else {
      // Failure path
      handlePaymentFailure();
    }
    
    // Clear the payment tracking data
    sessionStorage.removeItem('paymentStartTime');
  };
  
  const handlePaymentSuccess = () => {
    setPaymentStatus('success');
    setIsProcessing(false);
    
    // Show prominent success message
    Toast.success('Payment completed successfully!', 5000);
    
    // Store order details
    sessionStorage.setItem('completedOrder', 'true');
    if (formData.email) {
      sessionStorage.setItem('customerEmail', formData.email);
    }
    
    // Send order details to WhatsApp
    sendOrderDetailsToWhatsApp();
    
    // Clear cart and redirect to success page after a brief delay
    setTimeout(() => {
      dispatch(clearCart());
      router.push('/order-success');
    }, 1500);
  };
  
  // Function to handle COD order success
  const handleCodOrderSuccess = () => {
    // Show success message
    Toast.success('Order placed successfully!');
    
    // Store order details
    sessionStorage.setItem('completedOrder', 'true');
    if (formData.email) {
      sessionStorage.setItem('customerEmail', formData.email);
    }
    
    // Send details via WhatsApp
    sendOrderDetailsToWhatsApp();
    
    // Clear cart and redirect
    dispatch(clearCart());
    router.push('/order-success');
  };
  
  // Remove the email function and update the WhatsApp function
  const sendOrderDetailsToWhatsApp = () => {
    const orderItems = cartItems.map(item => 
      `${item.name} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const orderSummary = `
*NEW ORDER DETAILS*
------------------
Order Date: ${new Date().toLocaleString()}
Payment Method: ${paymentMethod.toUpperCase()}
Payment Status: ${paymentStatus === 'success' ? 'Paid' : 'Pending (COD)'}

*CUSTOMER INFORMATION*
------------------
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
State: ${formData.state}
Pincode: ${formData.pincode}

*PRODUCTS*
------------------
${orderItems}

*TOTAL: ${formatPrice(totalPrice)}*
`;

    // Format the phone number (remove any + symbol as WhatsApp API doesn't need it)
    const phoneNumber = "918830391908"; // WhatsApp number without + symbol
    
    // Create WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderSummary)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Notify user
    Toast.success("Please send the WhatsApp message to complete your order.", 6000);
  };
  
  const handlePaymentFailure = () => {
    setPaymentStatus('failed');
    setIsProcessing(false);
    
    // Show prominent failure message
    Toast.error('Payment failed!', 5000);
    Toast.error('Please try again or choose a different payment method.');
  };
  
  const validateForm = () => {
    if (Object.values(formData).some(value => !value)) {
      Toast.error('Please fill all the required fields');
      return false;
    }
    return true;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    if (paymentMethod === 'cod') {
      setIsProcessing(true);
      
      // Simulate processing for COD
      setTimeout(() => {
        setIsProcessing(false);
        handleCodOrderSuccess();
      }, 1000);
    } else {
      // Handle digital payment methods
      openPaymentApp();
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-3 xs:p-4 sm:p-6">
      <h2 className="text-lg xs:text-xl font-semibold mb-3 xs:mb-4 pb-2 border-b">Checkout</h2>
      
      {/* Shipping Details Form */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-2 xs:space-y-3 sm:space-y-4 mb-3 xs:mb-4 sm:mb-6">
          <h3 className="text-sm xs:text-base font-medium">Shipping Details</h3>
          
          <div className="grid grid-cols-1 gap-2 xs:gap-3 sm:gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs xs:text-sm text-gray-700 mb-1">Full Name *</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                required 
                className="w-full px-2 xs:px-3 py-1.5 xs:py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-xs xs:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs xs:text-sm text-gray-700 mb-1">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full px-2 xs:px-3 py-1.5 xs:py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-xs xs:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-xs xs:text-sm text-gray-700 mb-1">Phone *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                pattern="[0-9]{10}" 
                title="Please enter a valid 10-digit phone number" 
                className="w-full px-2 xs:px-3 py-1.5 xs:py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-xs xs:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-xs xs:text-sm text-gray-700 mb-1">Address *</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
                className="w-full px-2 xs:px-3 py-1.5 xs:py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-xs xs:text-sm"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2 xs:gap-3">
              <div>
                <label htmlFor="city" className="block text-xs xs:text-sm text-gray-700 mb-1">City *</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-2 xs:px-3 py-1.5 xs:py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-xs xs:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-xs xs:text-sm text-gray-700 mb-1">State *</label>
                <input 
                  type="text" 
                  id="state" 
                  name="state" 
                  value={formData.state} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-2 xs:px-3 py-1.5 xs:py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-xs xs:text-sm"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="pincode" className="block text-xs xs:text-sm text-gray-700 mb-1">Pincode *</label>
              <input 
                type="text" 
                id="pincode" 
                name="pincode" 
                value={formData.pincode} 
                onChange={handleChange} 
                required 
                pattern="[0-9]{6}" 
                title="Please enter a valid 6-digit pincode" 
                className="w-full px-2 xs:px-3 py-1.5 xs:py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-xs xs:text-sm"
              />
            </div>
          </div>
        </div>
        
        {/* Payment Method Selection */}
        <div className="space-y-2 xs:space-y-3 sm:space-y-4 mb-3 xs:mb-4 sm:mb-6">
          <h3 className="text-sm xs:text-base font-medium">Payment Method</h3>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 xs:gap-3">
            <div className="flex items-center">
              <input 
                type="radio" 
                id="gpay" 
                name="paymentMethod" 
                value="gpay" 
                checked={paymentMethod === 'gpay'} 
                onChange={() => setPaymentMethod('gpay')} 
                className="w-4 h-4 text-pink-600"
              />
              <label htmlFor="gpay" className="ml-2 flex items-center text-xs xs:text-sm">
                <FaGooglePay className="text-gray-800 text-lg xs:text-xl" />
                <span className="ml-1">GPay</span>
              </label>
            </div>
            
            <div className="flex items-center">
              <input 
                type="radio" 
                id="phonepe" 
                name="paymentMethod" 
                value="phonepe" 
                checked={paymentMethod === 'phonepe'} 
                onChange={() => setPaymentMethod('phonepe')} 
                className="w-4 h-4 text-pink-600"
              />
              <label htmlFor="phonepe" className="ml-2 flex items-center text-xs xs:text-sm">
                <SiPhonepe className="text-indigo-600 text-lg xs:text-xl" />
                <span className="ml-1">PhonePe</span>
              </label>
            </div>
            
            <div className="flex items-center">
              <input 
                type="radio" 
                id="cod" 
                name="paymentMethod" 
                value="cod" 
                checked={paymentMethod === 'cod'} 
                onChange={() => setPaymentMethod('cod')} 
                className="w-4 h-4 text-pink-600"
              />
              <label htmlFor="cod" className="ml-2 flex items-center text-xs xs:text-sm">
                <FaMoneyBillWave className="text-green-600 text-base xs:text-lg" />
                <span className="ml-1">Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="space-y-2 xs:space-y-3 sm:space-y-4 mb-4 xs:mb-5 sm:mb-6">
          <h3 className="text-sm xs:text-base font-medium">Order Summary</h3>
          
          <div className="bg-gray-50 p-2 xs:p-3 rounded-md">
            <div className="flex justify-between text-xs xs:text-sm">
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs xs:text-sm mt-1">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-sm xs:text-base mt-2 pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-pink-500 text-white py-2 xs:py-3 px-4 rounded-md font-medium hover:bg-pink-600 transition-colors text-xs xs:text-sm sm:text-base flex justify-center items-center"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            paymentMethod === 'cod' ? 'Place Order' : 'Pay Now'
          )}
        </button>
      </form>
    </div>
  );
}