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
      <div className="container mx-auto py-8 xs:py-12 sm:py-16 px-4 xs:px-6 text-center">
        <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-4">Your Wishlist is Empty</h1>
        <p className="text-gray-600 mb-4 xs:mb-6 sm:mb-8 text-sm xs:text-base">Looks like you haven&apos;t added any items to your wishlist yet.</p>
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
      <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6 sm:mb-8">Your Wishlist</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 xs:h-56 sm:h-64 w-full">
              <Image
                src={item.image || 'https://via.placeholder.com/300x300'}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
              />
            </div>
            
            <div className="p-3 xs:p-4">
              <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 truncate">{item.name}</h3>
              <p className="text-pink-600 font-bold mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">${item.price.toFixed(2)}</p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 xs:mb-3 sm:mb-4 line-clamp-2">{item.description}</p>
              
              <div className="flex justify-between">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-pink-500 text-white py-1 xs:py-1.5 sm:py-2 px-2 xs:px-3 sm:px-4 rounded-md flex items-center gap-1 xs:gap-2 hover:bg-pink-600 transition-colors text-xs sm:text-sm"
                  aria-label={`Add ${item.name} to cart`}
                >
                  <FaShoppingCart size={12} className="xs:text-sm sm:text-base" />
                  Add to Cart
                </button>
                
                <button
                  onClick={() => {
                    dispatch(removeFromWishlist(item.id));
                    toast.success(`${item.name} removed from wishlist!`);
                  }}
                  className="text-red-500 hover:text-red-700 p-1 xs:p-1.5 sm:p-2"
                  aria-label={`Remove ${item.name} from wishlist`}
                >
                  <FaTrash size={14} className="xs:text-sm sm:text-base" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 xs:mt-8 sm:mt-10">
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-1 xs:gap-2 text-gray-600 hover:text-gray-900 text-xs xs:text-sm sm:text-base"
        >
          <FaArrowLeft size={12} />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
} 