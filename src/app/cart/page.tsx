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
      <div className="container mx-auto py-8 xs:py-12 sm:py-16 px-4 xs:px-6 text-center">
        <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-4 xs:mb-6 sm:mb-8 text-sm xs:text-base">Looks like you haven&apos;t added any items to your cart yet.</p>
        <Link 
          href="/shop" 
          className="bg-pink-500 text-white py-2 xs:py-3 px-4 xs:px-6 rounded-md inline-flex items-center gap-1 xs:gap-2 hover:bg-pink-600 transition-colors text-xs xs:text-sm sm:text-base"
        >
          <FaArrowLeft size={12} />
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-6 xs:py-8 sm:py-12 px-3 xs:px-4 sm:px-6">
      <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6 sm:mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
        <div className="lg:col-span-2">
          {/* Mobile Card View (visible on small screens) */}
          <div className="lg:hidden space-y-3 xs:space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden p-3 xs:p-4">
                <div className="flex gap-3 xs:gap-4">
                  <div className="relative h-16 w-16 xs:h-20 xs:w-20 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || 'https://via.placeholder.com/100x100'}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm xs:text-base font-medium text-gray-900 mb-0.5 xs:mb-1">{item.name}</h3>
                    <p className="text-xs xs:text-sm text-gray-500 line-clamp-1 mb-1 xs:mb-2">{item.description}</p>
                    <p className="font-medium text-sm xs:text-base text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2 xs:mt-3 pt-2 xs:pt-3 border-t border-gray-100">
                  <div className="flex items-center">
                    <button 
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <FaMinus size={10} className="text-gray-600" />
                    </button>
                    <span className="mx-2 xs:mx-3 w-6 xs:w-8 text-center text-sm xs:text-base">{item.quantity}</span>
                    <button 
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <FaPlus size={10} className="text-gray-600" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 p-1"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="bg-gray-50 rounded-lg p-3 xs:p-4 mt-3 xs:mt-4">
              <div className="flex justify-between items-center font-medium">
                <span className="text-sm xs:text-base">Subtotal:</span>
                <span className="text-sm xs:text-base">₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Table View (visible on large screens) */}
          <div className="hidden lg:block bg-white rounded-lg shadow-md overflow-hidden">
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
                        ₹{(item.price * item.quantity).toFixed(2)}
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
          
          <div className="mt-4 xs:mt-5 sm:mt-6 flex justify-between">
            <Link 
              href="/shop" 
              className="inline-flex items-center gap-1 xs:gap-2 text-gray-600 hover:text-gray-900 text-xs xs:text-sm sm:text-base"
            >
              <FaArrowLeft size={12} />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-1 mt-4 lg:mt-0">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
} 