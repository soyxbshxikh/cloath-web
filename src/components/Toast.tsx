'use client';

import { toast, ToastOptions } from 'react-hot-toast';
import { FC } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'loading';
  duration?: number;
  icon?: string;
  id?: string;
}

// Custom toast style configurations
const toastStyles = {
  success: {
    style: {
      background: '#10B981',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '14px',
      padding: '12px 16px',
      borderRadius: '6px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '90%',
      width: 'auto',
    },
    icon: '✅'
  },
  error: {
    style: {
      background: '#EF4444',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '14px',
      padding: '12px 16px',
      borderRadius: '6px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '90%',
      width: 'auto',
    },
    icon: '❌'
  },
  info: {
    style: {
      background: '#3B82F6',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '14px',
      padding: '12px 16px',
      borderRadius: '6px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '90%',
      width: 'auto',
    },
    icon: 'ℹ️'
  },
  loading: {
    style: {
      background: '#6B7280',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '14px',
      padding: '12px 16px',
      borderRadius: '6px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '90%',
      width: 'auto',
    },
  }
};

// Default toast options
const defaultOptions: ToastOptions = {
  duration: 3000,
  position: 'bottom-center',
};

// Function to show toast messages
export const showToast = ({ message, type = 'info', duration = 3000, icon, id }: ToastProps) => {
  const options = {
    ...defaultOptions,
    ...toastStyles[type],
    duration,
    id,
  };

  // Override icon if provided
  if (icon) {
    options.icon = icon;
  }

  switch (type) {
    case 'success':
      return toast.success(message, options);
    case 'error':
      return toast.error(message, options);
    case 'loading':
      return toast.loading(message, options);
    default:
      return toast(message, options);
  }
};

// Export a ready-to-use toast component
const Toast = {
  success: (message: string, duration?: number, icon?: string) => 
    showToast({ message, type: 'success', duration, icon }),
  
  error: (message: string, duration?: number, icon?: string) => 
    showToast({ message, type: 'error', duration, icon }),
  
  info: (message: string, duration?: number, icon?: string) => 
    showToast({ message, type: 'info', duration, icon }),
    
  loading: (message: string, id?: string, duration?: number) => 
    showToast({ message, type: 'loading', duration: duration || 60000, id }),
    
  dismiss: (id?: string) => toast.dismiss(id),
};

// Example Toast Button Component
interface ToastButtonProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  buttonText: string;
  className?: string;
}

export const ToastButton: FC<ToastButtonProps> = ({ 
  message, 
  type = 'info', 
  buttonText, 
  className = 'bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors'
}) => {
  const handleClick = () => {
    showToast({ message, type });
  };

  return (
    <button 
      onClick={handleClick} 
      className={className}
    >
      {buttonText}
    </button>
  );
};

export default Toast; 