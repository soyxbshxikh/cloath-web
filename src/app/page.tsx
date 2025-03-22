import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaStore, FaTruck, FaLock, FaHeadset, FaStar, FaQuoteLeft, FaShoppingBag } from 'react-icons/fa';
import { ToastButton } from '@/components/Toast';

export default function Home() {
  // Display 8 featured products on the homepage instead of 4
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative">
        {/* Hero Background */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] w-full">
          <Image 
            src="/images/home/homebanner.jpg" 
            alt="Stylish Fashion Collection" 
            fill 
            className="object-cover" 
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-xs sm:max-w-sm md:max-w-lg">
              <span className="inline-block px-3 py-1 bg-pink-500 text-white text-xs sm:text-sm rounded-full mb-2 sm:mb-4 animate-pulse">New Season Arrivals</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">Elegant Dresses For Every Occasion</h1>
              <p className="text-gray-200 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">Discover our stunning collection of dresses and elevate your wardrobe with our exclusive designs.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link 
                  href="/shop" 
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 xs:px-6 py-2 xs:py-3 rounded-md text-xs xs:text-sm sm:text-base transition-colors"
                >
                  Shop Now
                </Link>
                <ToastButton 
                  message="Thanks for visiting Cloath! Check out our latest arrivals." 
                  buttonText="Show Notification" 
                  type="info"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="bg-gray-50 py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-pink-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <FaStore className="text-pink-500 text-base sm:text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Wide Selection</h3>
                <p className="text-xs sm:text-sm text-gray-500">Thousands of items to choose from</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-pink-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <FaTruck className="text-pink-500 text-base sm:text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Free Shipping</h3>
                <p className="text-xs sm:text-sm text-gray-500">On orders over ₹999</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-pink-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <FaLock className="text-pink-500 text-base sm:text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Secure Payments</h3>
                <p className="text-xs sm:text-sm text-gray-500">100% secure payment</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-pink-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <FaHeadset className="text-pink-500 text-base sm:text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-sm sm:text-base">24/7 Support</h3>
                <p className="text-xs sm:text-sm text-gray-500">Dedicated support team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 px-2 xs:px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-3 xs:mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Featured Products</h2>
            <Link 
              href="/shop" 
              className="flex items-center gap-1 sm:gap-2 text-pink-500 hover:text-pink-600 transition-colors text-xs xs:text-sm sm:text-base"
            >
              View All
              <FaArrowRight size={10} className="xs:text-xs sm:text-sm" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">About Cloath</h2>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Welcome to Cloath, your premier destination for fashion. 
                We are dedicated to bringing you the latest trends and timeless classics at affordable prices.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Our mission is to empower people through fashion, helping them express their unique style 
                with high-quality clothing that makes them feel confident and beautiful.
              </p>
              <Link 
                href="/about" 
                className="bg-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md inline-block hover:bg-pink-600 transition-colors text-xs sm:text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
            <div className="lg:w-1/2 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full rounded-lg overflow-hidden shadow-xl mt-6 lg:mt-0">
              <Image 
                src="/images/home/aboutStylish.jpg" 
                alt="About Cloath" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Highlights */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Trending Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-[1.02]">
              <div className="h-60 relative">
                <Image 
                  src="/images/home/trending1.jpg" 
                  alt="Dresses" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <h3 className="text-2xl font-bold text-white absolute bottom-4 left-4">Dresses</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">Elevate your style with our stunning collection of dresses for every occasion.</p>
                <Link 
                  href="/shop?category=dresses" 
                  className="text-pink-500 font-medium hover:underline inline-flex items-center"
                >
                  Explore Collection
                  <FaArrowRight size={12} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-[1.02]">
              <div className="h-60 relative">
                <Image 
                  src="/images/home/trending2.jpg" 
                  alt="Formal Wear" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <h3 className="text-2xl font-bold text-white absolute bottom-4 left-4">Formal Wear</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">Professional attire for the modern woman. Look stylish and confident at work.</p>
                <Link 
                  href="/shop?category=formal" 
                  className="text-pink-500 font-medium hover:underline inline-flex items-center"
                >
                  Explore Collection
                  <FaArrowRight size={12} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-[1.02]">
              <div className="h-60 relative">
                <Image 
                  src="/images/home/trending3.jpg" 
                  alt="Casual Wear" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <h3 className="text-2xl font-bold text-white absolute bottom-4 left-4">Casual Wear</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">Comfortable everyday outfits for a relaxed, chic look that never goes out of style.</p>
                <Link 
                  href="/shop?category=casual" 
                  className="text-pink-500 font-medium hover:underline inline-flex items-center"
                >
                  Explore Collection
                  <FaArrowRight size={12} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <FaQuoteLeft className="text-pink-200 text-4xl absolute -top-4 -left-4" />
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-gray-600 mb-4 italic">
                    &quot;I absolutely love the quality of clothes from Stylish. The fabric is soft, durable, and fits perfectly. Will definitely be ordering more!&quot;
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold">RP</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Riya Patel</p>
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <FaQuoteLeft className="text-pink-200 text-4xl absolute -top-4 -left-4" />
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-gray-600 mb-4 italic">
                    &quot;Fast shipping and excellent customer service. The dress I ordered exceeded my expectations and was perfect for my event!&quot;
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold">SM</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Shreya Mehta</p>
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <FaQuoteLeft className="text-pink-200 text-4xl absolute -top-4 -left-4" />
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-gray-600 mb-4 italic">
                    &quot;The variety of styles available is amazing. I&apos;ve found unique pieces that I couldn&apos;t find anywhere else. The quality is top-notch too!&quot;
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold">AK</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Ananya Kumar</p>
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-pink-50 rounded-xl p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-8">Stay updated with our latest collections, exclusive offers, and fashion tips.</p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4">By subscribing, you agree to receive marketing emails from Stylish.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
