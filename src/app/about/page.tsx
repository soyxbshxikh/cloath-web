import Image from 'next/image';
import Link from 'next/link';
import { FaLeaf, FaRecycle, FaWater, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'About Us | Looksay - Fashion Redefined',
  description: 'Learn about our story, mission, and commitment to sustainable fashion at looksay.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-10 xs:py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-pink-600 opacity-90"></div>
        <div className="relative container mx-auto px-3 xs:px-4 sm:px-6 text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 xs:mb-4">Our Story</h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto">
            Discover the journey behind Cloth and our commitment to redefining fashion with style, quality, and sustainability.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-4 xs:gap-6 sm:gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-3 xs:mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-sm xs:text-base text-gray-600 mb-2 xs:mb-3">
                At Looksay, we believe that fashion should be accessible, sustainable, and empowering. 
                Our mission is to create high-quality clothing that allows everyone to express their unique style 
                while minimizing our environmental footprint.
              </p>
              <p className="text-sm xs:text-base text-gray-600 mb-2 xs:mb-3">
                We started in 2018 with a small collection of handcrafted pieces and have since grown into 
                a brand that celebrates individuality, champions ethical practices, and delivers exceptional 
                quality at fair prices.
              </p>
              <p className="text-sm xs:text-base text-gray-600 mb-3 xs:mb-4 sm:mb-6">
                Every garment we create is designed with purpose, crafted with care, and delivered with pride. 
                We&apos;re not just selling clothes – we&apos;re building a community of conscious fashion enthusiasts 
                who value style, quality, and sustainability.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative h-56 xs:h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/home/aboutStylish.jpg" 
                alt="Cloth Fashion Mission" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4 xs:mb-6 sm:mb-8 md:mb-10 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-lg p-3 xs:p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 mx-auto">
                <FaCheckCircle className="text-pink-600 text-lg xs:text-xl sm:text-2xl md:text-3xl" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-center mb-2 xs:mb-3">Quality First</h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 text-center">
                We never compromise on quality. Every stitch, fabric, and design element is carefully selected and crafted to ensure our products stand the test of time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-3 xs:p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 mx-auto">
                <FaLeaf className="text-pink-600 text-lg xs:text-xl sm:text-2xl md:text-3xl" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-center mb-2 xs:mb-3">Sustainable Practices</h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 text-center">
                From sourcing eco-friendly materials to reducing waste in our production process, sustainability is at the heart of everything we do.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-3 xs:p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto sm:w-full">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 mx-auto">
                <FaMapMarkerAlt className="text-pink-600 text-lg xs:text-xl sm:text-2xl md:text-3xl" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-center mb-2 xs:mb-3">Ethical Production</h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 text-center">
                We ensure fair wages and safe working conditions throughout our supply chain, partnering only with factories that share our commitment to ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-4 xs:gap-6 sm:gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-3 xs:mb-4 sm:mb-6">Meet Our Team</h2>
              <p className="text-sm xs:text-base text-gray-600 mb-2 xs:mb-3">
                Behind every beautiful garment is a team of passionate individuals dedicated to bringing our vision to life. 
                Our designers, pattern makers, fabric specialists, and customer service team all work together to create 
                an exceptional experience for our customers.
              </p>
              <p className="text-sm xs:text-base text-gray-600 mb-2 xs:mb-3">
                Led by our founder, Laxmi Jaiswar, our team combines decades of experience in the fashion industry with 
                a forward-thinking approach to style and sustainability. We&apos;re proud of the diverse perspectives and 
                talents that make Cloth what it is today.
              </p>
              <p className="text-sm xs:text-base text-gray-600 mb-3 xs:mb-4 sm:mb-6">
                We&apos;re always looking for passionate individuals to join our growing team. If you share our values 
                and vision, check out our careers page for current opportunities.
              </p>
              <Link href="/contact" className="bg-pink-500 text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 rounded-md inline-block hover:bg-pink-600 transition-colors text-xs xs:text-sm sm:text-base">
                Join Our Team
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative h-56 xs:h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/team.jpg" 
                alt="Cloth Team" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4 xs:mb-6 sm:mb-8 md:mb-10 text-center">Our Sustainability Commitment</h2>
          
          <div className="mb-4 xs:mb-6 sm:mb-8 md:mb-12">
            <div className="relative h-40 xs:h-56 sm:h-64 md:h-[320px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl mb-3 xs:mb-4 sm:mb-6 md:mb-8">
              <Image 
                src="/images/sustainability.jpg" 
                alt="Sustainable Fashion" 
                fill 
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3 xs:p-4 sm:p-6 md:p-8 text-white max-w-lg">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-1 xs:mb-2">Making Fashion Sustainable</h3>
                <p className="text-xs xs:text-sm sm:text-base">We&apos;re committed to reducing our environmental footprint and promoting sustainable practices throughout our entire supply chain.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-lg p-3 xs:p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                <FaLeaf className="text-green-600 text-sm xs:text-base sm:text-lg md:text-xl" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold mb-1.5 xs:mb-2 sm:mb-3">Sustainable Materials</h3>
              <p className="text-xs xs:text-sm text-gray-600">
                We prioritize organic cotton, recycled polyester, and other eco-friendly materials that reduce our impact on the environment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-3 xs:p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                <FaWater className="text-blue-600 text-sm xs:text-base sm:text-lg md:text-xl" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold mb-1.5 xs:mb-2 sm:mb-3">Water Conservation</h3>
              <p className="text-xs xs:text-sm text-gray-600">
                Our production processes are designed to minimize water usage and prevent pollution, preserving this precious resource.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-3 xs:p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto sm:w-full">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                <FaRecycle className="text-green-600 text-sm xs:text-base sm:text-lg md:text-xl" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold mb-1.5 xs:mb-2 sm:mb-3">Reducing Waste</h3>
              <p className="text-xs xs:text-sm text-gray-600">
                From packaging to production, we&apos;re constantly finding ways to reduce waste and implement circular economy principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Stores */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4 xs:mb-6 sm:mb-8 md:mb-10 text-center">Visit Our Stores</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-4 xs:gap-6 sm:gap-8 md:gap-12 mb-4 xs:mb-6 sm:mb-8 md:mb-12">
            <div className="w-full lg:w-1/2 relative h-40 xs:h-56 sm:h-64 md:h-[320px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/store.jpg" 
                alt="Cloth Store Interior" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-sm xs:text-base text-gray-600 mb-3 xs:mb-4 sm:mb-6">
                Experience the Cloth collection in person at one of our retail locations. Our stores are designed to create a 
                warm, inviting atmosphere where you can explore our latest designs, feel the quality of our fabrics, 
                and receive personalized styling advice from our knowledgeable team.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                <div className="border border-gray-200 rounded-lg p-2.5 xs:p-3 sm:p-4">
                  <h3 className="font-bold text-sm xs:text-base sm:text-lg mb-1 xs:mb-2">Vasai East Store</h3>
                  <p className="text-xs xs:text-sm text-gray-600 mb-0.5 xs:mb-1">Waliv Naka, Sopara Road</p>
                  <p className="text-xs xs:text-sm text-gray-600 mb-0.5 xs:mb-1">Vasai East, Maharashtra 401208</p>
                  <p className="text-xs xs:text-sm text-gray-600 mb-1.5 xs:mb-2 sm:mb-3">Mon-Sat: 10am-9pm, Sun: 11am-7pm</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-2.5 xs:p-3 sm:p-4">
                  <h3 className="font-bold text-sm xs:text-base sm:text-lg mb-1 xs:mb-2">Vasai West Store</h3>
                  <p className="text-xs xs:text-sm text-gray-600 mb-0.5 xs:mb-1">Ambadi Road, Near Station</p>
                  <p className="text-xs xs:text-sm text-gray-600 mb-0.5 xs:mb-1">Vasai West, Maharashtra 401202</p>
                  <p className="text-xs xs:text-sm text-gray-600 mb-1.5 xs:mb-2 sm:mb-3">Mon-Sat: 10am-9pm, Sun: 11am-7pm</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-2.5 xs:p-3 sm:p-4">
                  <h3 className="font-bold text-sm xs:text-base sm:text-lg mb-1 xs:mb-2">Nalasopara Store</h3>
                  <p className="text-xs xs:text-sm text-gray-600 mb-0.5 xs:mb-1">Achole Road, Near Station</p>
                  <p className="text-xs xs:text-sm text-gray-600 mb-0.5 xs:mb-1">Nalasopara East, Maharashtra 401209</p>
                  <p className="text-xs xs:text-sm text-gray-600 mb-1.5 xs:mb-2 sm:mb-3">Mon-Sat: 10am-9pm, Sun: 11am-7pm</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-2.5 xs:p-3 sm:p-4 flex items-center justify-center">
                  <Link 
                    href="/contact" 
                    className="text-pink-500 font-medium hover:underline flex items-center text-xs xs:text-sm"
                  >
                    View All Locations
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 