import Image from 'next/image';
import Link from 'next/link';
import { FaLeaf, FaRecycle, FaWater, FaMapMarkerAlt, FaPhone, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'About Us | Cloath - Fashion Redefined',
  description: 'Learn about our story, mission, and commitment to sustainable fashion at Cloath.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-pink-600 opacity-90"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover the journey behind Cloath and our commitment to redefining fashion with style, quality, and sustainability.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Cloath, we believe that fashion should be accessible, sustainable, and empowering. 
                Our mission is to create high-quality clothing that allows everyone to express their unique style 
                while minimizing our environmental footprint.
              </p>
              <p className="text-gray-600 mb-4">
                We started in 2018 with a small collection of handcrafted pieces and have since grown into 
                a brand that celebrates individuality, champions ethical practices, and delivers exceptional 
                quality at fair prices.
              </p>
              <p className="text-gray-600 mb-6">
                Every garment we create is designed with purpose, crafted with care, and delivered with pride. 
                We&apos;re not just selling clothes – we&apos;re building a community of conscious fashion enthusiasts 
                who value style, quality, and sustainability.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/fashion-hero.jpg" 
                alt="Cloath Fashion Mission" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaCheckCircle className="text-pink-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Quality First</h3>
              <p className="text-gray-600 text-center">
                We never compromise on quality. Every stitch, fabric, and design element is carefully selected and crafted to ensure our products stand the test of time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaLeaf className="text-pink-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Sustainable Practices</h3>
              <p className="text-gray-600 text-center">
                From sourcing eco-friendly materials to reducing waste in our production process, sustainability is at the heart of everything we do.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaMapMarkerAlt className="text-pink-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Ethical Production</h3>
              <p className="text-gray-600 text-center">
                We ensure fair wages and safe working conditions throughout our supply chain, partnering only with factories that share our commitment to ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
              <p className="text-gray-600 mb-4">
                Behind every beautiful garment is a team of passionate individuals dedicated to bringing our vision to life. 
                Our designers, pattern makers, fabric specialists, and customer service team all work together to create 
                an exceptional experience for our customers.
              </p>
              <p className="text-gray-600 mb-4">
                Led by our founder, Sophia Chen, our team combines decades of experience in the fashion industry with 
                a forward-thinking approach to style and sustainability. We&apos;re proud of the diverse perspectives and 
                talents that make Cloath what it is today.
              </p>
              <p className="text-gray-600 mb-6">
                We&apos;re always looking for passionate individuals to join our growing team. If you share our values 
                and vision, check out our careers page for current opportunities.
              </p>
              <Link href="/contact" className="bg-pink-500 text-white px-6 py-3 rounded-md inline-block hover:bg-pink-600 transition-colors">
                Join Our Team
              </Link>
            </div>
            <div className="lg:w-1/2 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/team.jpg" 
                alt="Cloath Team" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Sustainability Commitment</h2>
          
          <div className="mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-8">
              <Image 
                src="/images/sustainability.jpg" 
                alt="Sustainable Fashion" 
                fill 
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-lg">
                <h3 className="text-2xl font-bold mb-2">Making Fashion Sustainable</h3>
                <p>We&apos;re committed to reducing our environmental footprint and promoting sustainable practices throughout our entire supply chain.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FaLeaf className="text-green-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-3">Sustainable Materials</h3>
              <p className="text-gray-600">
                We prioritize organic cotton, recycled polyester, and other eco-friendly materials that reduce our impact on the environment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaWater className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-3">Water Conservation</h3>
              <p className="text-gray-600">
                Our production processes are designed to minimize water usage and prevent pollution, preserving this precious resource.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FaRecycle className="text-green-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-3">Reducing Waste</h3>
              <p className="text-gray-600">
                From packaging to production, we&apos;re constantly finding ways to reduce waste and implement circular economy principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Stores */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Visit Our Stores</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            <div className="lg:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/store.jpg" 
                alt="Cloath Store Interior" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-600 mb-6">
                Experience the Cloath collection in person at one of our retail locations. Our stores are designed to create a 
                warm, inviting atmosphere where you can explore our latest designs, feel the quality of our fabrics, 
                and receive personalized styling advice from our knowledgeable team.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Vasai East Store</h3>
                  <p className="text-gray-600 mb-1">Waliv Naka, Sopara Road</p>
                  <p className="text-gray-600 mb-1">Vasai East, Maharashtra 401208</p>
                  <p className="text-gray-600 mb-3">Mon-Sat: 10am-9pm, Sun: 11am-7pm</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Vasai West Store</h3>
                  <p className="text-gray-600 mb-1">Ambadi Road, Near Station</p>
                  <p className="text-gray-600 mb-1">Vasai West, Maharashtra 401202</p>
                  <p className="text-gray-600 mb-3">Mon-Sat: 10am-9pm, Sun: 11am-7pm</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Nalasopara Store</h3>
                  <p className="text-gray-600 mb-1">Achole Road, Near Station</p>
                  <p className="text-gray-600 mb-1">Nalasopara East, Maharashtra 401209</p>
                  <p className="text-gray-600 mb-3">Mon-Sat: 10am-9pm, Sun: 11am-7pm</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center">
                  <Link 
                    href="/contact" 
                    className="text-pink-500 font-medium hover:underline flex items-center"
                  >
                    View All Locations
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-pink-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience Cloath For Yourself</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our collection of high-quality, sustainable fashion pieces designed to help you express your unique style.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/shop" 
              className="bg-pink-500 text-white px-8 py-3 rounded-full inline-block hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Shop Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-gray-800 px-8 py-3 rounded-full inline-block hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 