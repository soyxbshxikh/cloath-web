'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { Product } from '@/store/cartSlice';
import { addToCart } from '@/store/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/store/wishlistSlice';
import { RootState } from '@/store/store';
import toast from 'react-hot-toast';
import formatPrice from '@/data/formatPrice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  const [imgError, setImgError] = useState(false);
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };
  
  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.success(`${product.name} removed from wishlist!`);
    } else {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} added to wishlist!`);
    }
  };
  
  const handleImageError = () => {
    console.error(`Error loading image: ${product.image}`);
    setImgError(true);
  };

  // Ensure we have a valid image URL
  const getImageSrc = () => {
    if (imgError) {
      return '/images/home/homeproduct1.jpg'; // Local fallback image
    }
    
    if (!product.image || product.image.trim() === '') {
      return '/images/home/homeproduct1.jpg'; // Local fallback for empty image URLs
    }
    
    return product.image;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg hover:scale-[1.01] h-full flex flex-col">
      <div className="relative h-48 xs:h-56 sm:h-64 w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-100 animate-pulse" />
        <Image
          src={getImageSrc()}
          alt={product.name}
          fill
          className="object-cover"
          onError={handleImageError}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={product.id === '1'} // Prioritize loading the first product
          unoptimized={imgError} // Skip image optimization for fallback images
        />
        <button 
          className="absolute top-2 right-2 p-1.5 sm:p-2 bg-white rounded-full shadow-md z-10"
          onClick={toggleWishlist}
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isInWishlist ? (
            <FaHeart className="text-pink-500" size={16} />
          ) : (
            <FaRegHeart className="text-gray-500 hover:text-pink-500" size={16} />
          )}
        </button>
      </div>
      
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-semibold mb-1 truncate">{product.name}</h3>
        <p className="text-pink-600 font-bold mb-1 sm:mb-2 text-sm sm:text-base">{formatPrice(product.price)}</p>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <button
            onClick={handleAddToCart}
            className="bg-pink-500 text-white py-1.5 sm:py-2 px-2 sm:px-4 rounded-md flex items-center gap-1 sm:gap-2 hover:bg-pink-600 transition-colors text-xs sm:text-sm"
            aria-label={`Add ${product.name} to cart`}
          >
            <FaShoppingCart size={12} className="sm:text-base" />
            <span className="whitespace-nowrap">Add to Cart</span>
          </button>
          
          <Link 
            href="/shop"
            className="text-pink-500 font-medium hover:underline text-xs sm:text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
} 