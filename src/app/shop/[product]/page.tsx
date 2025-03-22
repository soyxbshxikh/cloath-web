'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/store/wishlistSlice';
import { RootState } from '@/store/store';
import { FaHeart, FaRegHeart, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import formatPrice from '@/data/formatPrice';
import { products } from '@/data/products';
import Toast from '@/components/Toast';

export default function ProductPage({ params }: { params: { product: string } }) {
  // ... existing state and variables ...

  const handleAddToCart = () => {
    dispatch(addToCart({
      ...product,
      quantity: quantity
    }));
    Toast.success(`${product.name} added to cart!`);
  };
  
  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      Toast.info(`${product.name} removed from wishlist!`);
    } else {
      dispatch(addToWishlist(product));
      Toast.success(`${product.name} added to wishlist!`);
    }
  };

  // ... rest of component code ...
} 