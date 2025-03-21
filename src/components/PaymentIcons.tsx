import { FaGooglePay, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import { SiPhonepe } from 'react-icons/si';

export default function PaymentIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="bg-white p-1 rounded w-10 h-7 flex items-center justify-center">
        <FaCreditCard className="text-gray-800 text-lg" />
      </div>
      
      <div className="bg-white p-1 rounded w-16 h-7 flex items-center justify-center">
        <FaGooglePay className="text-gray-800 text-2xl" />
      </div>
      
      <div className="bg-white p-1 rounded w-10 h-7 flex items-center justify-center">
        <SiPhonepe className="text-indigo-600 text-lg" />
      </div>
      
      <div className="bg-white p-1 rounded w-10 h-7 flex items-center justify-center">
        <FaMoneyBillWave className="text-green-600 text-lg" />
      </div>
    </div>
  );
} 