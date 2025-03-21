'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromWishlist } from '@/store/wishlistSlice';
import { addToCart, Product } from '@/store/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart, FaTrash, FaArrowLeft } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };
  
  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any items to your wishlist yet.</p>
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
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={item.image || 'https://via.placeholder.com/300x300'}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 truncate">{item.name}</h3>
              <p className="text-pink-600 font-bold mb-2">${item.price.toFixed(2)}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              
              <div className="flex justify-between">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-pink-500 text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-pink-600 transition-colors"
                  aria-label={`Add ${item.name} to cart`}
                >
                  <FaShoppingCart size={16} />
                  Add to Cart
                </button>
                
                <button
                  onClick={() => {
                    dispatch(removeFromWishlist(item.id));
                    toast.success(`${item.name} removed from wishlist!`);
                  }}
                  className="text-red-500 hover:text-red-700 p-2"
                  aria-label={`Remove ${item.name} from wishlist`}
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <FaArrowLeft size={14} />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
} 