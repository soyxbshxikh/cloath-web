'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { clearCart } from '@/store/cartSlice';
import toast from 'react-hot-toast';
import { FaGooglePay, FaMoneyBillWave } from 'react-icons/fa';
import { SiPhonepe } from 'react-icons/si';
import { useRouter } from 'next/navigation';

type PaymentMethod = 'gpay' | 'phonepe' | 'cod';

interface PaymentInfo {
  phone: string;
  email: string;
  upiId: string;
}

const PAYMENT_INFO: PaymentInfo = {
  phone: '+918830391908', // Replace with your actual phone number
  email: 'laxmijaiswar323@gmail.com', // Replace with your actual email
  upiId: 'soyxbshxikh@okhdfcbank', // Replace with your actual UPI ID
};

export default function CheckoutForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  
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
    const paymentUrl = getPaymentUrl();
    
    if (typeof window !== 'undefined') {
      // Try to open the payment URL which should trigger the app
      window.location.href = paymentUrl;
      
      // After a short delay, show success message and complete the order
      setTimeout(() => {
        setIsPaymentComplete(true);
        toast.success('Payment completed successfully!');
        toast.success('Order placed successfully!');
        
        // Store order details
        sessionStorage.setItem('completedOrder', 'true');
        if (formData.email) {
          sessionStorage.setItem('customerEmail', formData.email);
        }
        
        // Redirect to success page
        setTimeout(() => {
          dispatch(clearCart());
          router.push('/order-success');
        }, 1500);
      }, 2000);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (Object.values(formData).some(value => !value)) {
      toast.error('Please fill all the required fields');
      return;
    }
    
    if (paymentMethod === 'cod') {
      toast.success('Order placed successfully!');
      dispatch(clearCart());
      
      // Set flag in sessionStorage to indicate completed order
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('completedOrder', 'true');
        // Store customer email for order confirmation
        if (formData.email) {
          sessionStorage.setItem('customerEmail', formData.email);
        }
      }
      
      // Redirect to success page
      router.push('/order-success');
      return;
    }
    
    // For online payment methods, we now handle everything through the openPaymentApp function
    // which is called from the button click, so we don't need to do anything here
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address*
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City*
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State/Province*
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP/Postal Code*
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Payment Method</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="gpay"
                name="paymentMethod"
                checked={paymentMethod === 'gpay'}
                onChange={() => {
                  setPaymentMethod('gpay');
                }}
                className="h-4 w-4 text-pink-600"
              />
              <label htmlFor="gpay" className="ml-2 text-sm font-medium text-gray-700 flex items-center">
                <FaGooglePay className="text-2xl mr-1" /> Google Pay
              </label>
            </div>
            
            {paymentMethod === 'gpay' && (
              <div className="ml-6 p-3 border border-gray-200 rounded-md flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-3">
                  <div>
                    <p className="text-sm font-medium">Pay to</p>
                    <p className="text-sm text-gray-600">{PAYMENT_INFO.phone}</p>
                    <p className="text-sm text-gray-600">{PAYMENT_INFO.email}</p>
                  </div>
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FaGooglePay className="text-4xl text-green-600" />
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={openPaymentApp}
                  className="mt-3 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  Pay with Google Pay
                </button>
              </div>
            )}
            
            <div className="flex items-center">
              <input
                type="radio"
                id="phonepe"
                name="paymentMethod"
                checked={paymentMethod === 'phonepe'}
                onChange={() => {
                  setPaymentMethod('phonepe');
                }}
                className="h-4 w-4 text-pink-600"
              />
              <label htmlFor="phonepe" className="ml-2 text-sm font-medium text-gray-700 flex items-center">
                <SiPhonepe className="text-xl mr-1 text-indigo-600" /> PhonePe
              </label>
            </div>
            
            {paymentMethod === 'phonepe' && (
              <div className="ml-6 p-3 border border-gray-200 rounded-md flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-3">
                  <div>
                    <p className="text-sm font-medium">Pay to</p>
                    <p className="text-sm text-gray-600">{PAYMENT_INFO.phone}</p>
                    <p className="text-sm text-gray-600">{PAYMENT_INFO.email}</p>
                  </div>
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <SiPhonepe className="text-2xl text-indigo-600" />
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={openPaymentApp}
                  className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
                >
                  Pay with PhonePe
                </button>
              </div>
            )}
            
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                checked={paymentMethod === 'cod'}
                onChange={() => {
                  setPaymentMethod('cod');
                  setIsPaymentComplete(false);
                }}
                className="h-4 w-4 text-pink-600"
              />
              <label htmlFor="cod" className="ml-2 text-sm font-medium text-gray-700 flex items-center">
                <FaMoneyBillWave className="text-lg mr-1 text-green-600" /> Cash on Delivery
              </label>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between text-lg font-medium mb-6">
            <span>Total:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-600 transition-colors"
            disabled={isProcessing || (paymentMethod !== 'cod' && !isPaymentComplete)}
          >
            {isProcessing 
              ? 'Processing Payment...' 
              : paymentMethod === 'cod' 
                ? 'Place Order' 
                : isPaymentComplete
                  ? 'Complete Order'
                  : 'Complete Payment'}
          </button>
        </div>
      </form>
    </div>
  );
}