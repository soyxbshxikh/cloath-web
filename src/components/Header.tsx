'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { FaShoppingCart, FaHeart, FaPhoneAlt, FaEnvelope, FaHome, FaShoppingBag, FaInfoCircle, FaAddressBook, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      {/* Top Bar */}
      <div className="bg-pink-500 text-white py-2 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm flex flex-col sm:flex-row items-center sm:space-x-4 space-y-1 sm:space-y-0 mb-2 sm:mb-0">
            <a href="tel:+918830391908" className="flex items-center hover:text-pink-100">
              <FaPhoneAlt className="mr-2" size={14} />
              <span>+91 8830391908</span>
            </a>
            <a href="mailto:laxmijaiswar323@gmail.com" className="hidden sm:flex items-center hover:text-pink-100">
              <FaEnvelope className="mr-2" size={14} />
              <span>laxmijaiswar323@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="bg-white shadow-md py-3 px-4 sm:py-4 sm:px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo_block.png" 
              alt="Cloath" 
              width={140} 
              height={50} 
              priority
              className="w-auto h-10 sm:h-12"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-500 font-medium flex items-center">
              <FaHome className="mr-2" size={16} />
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-pink-500 font-medium flex items-center">
              <FaShoppingBag className="mr-2" size={16} />
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-500 font-medium flex items-center">
              <FaInfoCircle className="mr-2" size={16} />
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-500 font-medium flex items-center">
              <FaAddressBook className="mr-2" size={16} />
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link href="/wishlist" className="text-gray-700 hover:text-pink-500 relative">
              <FaHeart size={20} className="sm:text-2xl" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            <Link href="/cart" className="text-gray-700 hover:text-pink-500 relative">
              <FaShoppingCart size={20} className="sm:text-2xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-700 hover:text-pink-500 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md z-50 border-t border-gray-100">
            <nav className="flex flex-col py-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-pink-500 hover:bg-gray-50 py-3 px-6 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaHome className="mr-3" size={18} />
                Home
              </Link>
              <Link 
                href="/shop" 
                className="text-gray-700 hover:text-pink-500 hover:bg-gray-50 py-3 px-6 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaShoppingBag className="mr-3" size={18} />
                Shop
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-pink-500 hover:bg-gray-50 py-3 px-6 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaInfoCircle className="mr-3" size={18} />
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-pink-500 hover:bg-gray-50 py-3 px-6 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaAddressBook className="mr-3" size={18} />
                Contact
              </Link>
              <a 
                href="mailto:laxmijaiswar323@gmail.com" 
                className="sm:hidden text-gray-700 hover:text-pink-500 hover:bg-gray-50 py-3 px-6 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaEnvelope className="mr-3" size={18} />
                Email Us
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
} 