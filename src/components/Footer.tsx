import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import PaymentIcons from './PaymentIcons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <Link href="/" className="inline-block mb-3 sm:mb-4">
              <Image 
                src="/images/logo_block.png" 
                alt="Cloath" 
                width={120} 
                height={40} 
                className="w-auto h-8 sm:h-10 brightness-200 invert" 
              />
            </Link>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Your destination for stylish clothing. We bring you the latest fashion trends at affordable prices.
            </p>
            <div>
              <h4 className="text-gray-200 font-medium mb-2 text-sm sm:text-base">We Accept</h4>
              <PaymentIcons />
            </div>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-pink-400 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-pink-400 text-sm sm:text-base">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-pink-400 text-sm sm:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-pink-400 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-300 hover:text-pink-400 text-sm sm:text-base">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-gray-300 hover:text-pink-400 text-sm sm:text-base">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/share/18GHwqV7as/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400" aria-label="Facebook">
                <FaFacebook size={20} className="sm:text-2xl" />
              </a>
              <a href="https://www.instagram.com/looksay.in?igsh=MWswZ212OTYwYmhqeQ==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400" aria-label="Instagram">
                <FaInstagram size={20} className="sm:text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/laxmijaiswar30?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400" aria-label="LinkedIn">
                <FaLinkedin size={20} className="sm:text-2xl" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center gap-2 text-sm sm:text-base">
                <FaEnvelope className="text-pink-400 flex-shrink-0" /> 
                <a href="mailto:laxmijaiswar323@gmail.com" className="hover:text-pink-400 break-all">laxmijaiswar323@gmail.com</a>
              </p>
              <p className="text-gray-300 flex items-center gap-2 text-sm sm:text-base">
                <FaPhone className="text-pink-400 flex-shrink-0" /> 
                <a href="tel:+918830391908" className="hover:text-pink-400">+91 8830391908</a>
              </p>
              <p className="text-gray-300 flex items-start gap-2 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-pink-400 flex-shrink-0 mt-1" /> 
                <span>Waliv naka, Vasai east, Mumbai, Maharashtra 401208</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300">
          <p className="text-sm sm:text-base">&copy; 2025 Cloath. All rights reserved.</p>
          <p className="mt-1 text-xs sm:text-sm">Designed by <span className="text-pink-400 font-medium">Soyab Shaikh</span></p>
        </div>
      </div>
    </footer>
  );
} 