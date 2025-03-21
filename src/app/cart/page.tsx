'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { incrementQuantity, decrementQuantity, removeFromCart } from '@/store/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrash, FaMinus, FaPlus, FaArrowLeft } from 'react-icons/fa';
import CheckoutForm from '@/components/CheckoutForm';

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any items to your cart yet.</p>
        <Link 
          href="/shop" 
          className="bg-pink-500 text-white py-3 px-6 rounded-md inline-flex items-center gap-2 hover:bg-pink-600 transition-colors"
        >
          <FaArrowLeft size={14} />
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="py-3 px-4 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="py-3 px-4 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="relative h-16 w-16 rounded overflow-hidden">
                          <Image
                            src={item.image || 'https://via.placeholder.com/100x100'}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center">
                        <button 
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <FaMinus size={12} className="text-gray-600" />
                        </button>
                        <span className="mx-3 w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <FaPlus size={12} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-sm font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button 
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 hover:text-red-700"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <FaTrash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan={2} className="py-4 px-4 text-right font-medium">Subtotal:</td>
                  <td className="py-4 px-4 text-right font-medium">₹{totalPrice.toFixed(2)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="mt-6 flex justify-between">
            <Link 
              href="/shop" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <FaArrowLeft size={14} />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
} 