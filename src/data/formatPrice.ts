/**
 * Formats a number as an Indian Rupee currency string
 * @param price The price to format
 * @returns Formatted price string with ₹ symbol
 */
export default function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
} 