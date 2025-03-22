'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/store/wishlistSlice';
import { RootState } from '@/store/store';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { products } from '@/data/products';
import Toast from '@/components/Toast';
import formatPrice from '@/data/formatPrice';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    product: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
  // Find the product from our data
  const [product, setProduct] = useState<typeof products[0] | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  useEffect(() => {
    // Find product by ID from URL parameter
    const foundProduct = products.find(p => p.id === params.product);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    
    // Check if in wishlist
    const inWishlist = wishlistItems.some(item => item.id === params.product);
    setIsInWishlist(inWishlist);
  }, [params.product, wishlistItems]);
  
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        ...product,
        quantity
      }));
      Toast.success(`${product.name} added to cart!`);
    }
  };
  
  const toggleWishlist = () => {
    if (!product) return;
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      Toast.info(`${product.name} removed from wishlist!`);
    } else {
      dispatch(addToWishlist(product));
      Toast.success(`${product.name} added to wishlist!`);
    }
  };
  
  if (!product) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">Sorry, the product you are looking for does not exist.</p>
          <Link 
            href="/shop" 
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        
        {/* Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-pink-600 font-bold mb-4">{formatPrice(product.price)}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-3 py-1 border border-gray-300 rounded-l-md"
              >
                -
              </button>
              <input 
                type="number" 
                id="quantity" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 px-3 py-1 border-t border-b border-gray-300 text-center"
                min="1"
              />
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-1 border border-gray-300 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handleAddToCart}
              className="bg-pink-500 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-pink-600 transition-colors"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            
            <button 
              onClick={toggleWishlist}
              className="border border-gray-300 px-6 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              {isInWishlist ? (
                <FaHeart className="text-pink-500" />
              ) : (
                <FaRegHeart />
              )}
              {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 