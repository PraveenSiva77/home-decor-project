import React, { useEffect } from 'react';

// Type-based styles
const typeStyles = {
  success: 'border-green-500 text-green-700',
  danger: 'border-red-500 text-red-700',
  warning: 'border-yellow-500 text-yellow-700',
  default: 'border-gray-300 text-gray-700',
};

function AlertModal({ title, message, buttonText, onClose, type = 'default' }) {

    const modalStyle = typeStyles[type] || typeStyles.default;

    useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden'; // Disable scroll
    return () => {
      document.body.style.overflow = 'auto'; // Enable scroll
    };
  }, []);
    



return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className={`bg-white p-6 rounded shadow-lg w-[90%] md:w-1/3 border-t-4 ${modalStyle}`}>
        <h1 className="text-xl text-gray-900 font-bold mb-4">{title}</h1>
        <p className="mb-6 text-gray-700">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-500 hover:text-gray-900"
            onClick={onClose}
          >
            Cancel
          </button>

          {
            buttonText && 
            <button
                className={`px-4 py-2 rounded hover:opacity-90 ${
                type === 'success'
                    ? 'bg-green-900 text-white'
                    : type === 'danger'
                    ? 'bg-red-500 text-white'
                    : type === 'warning'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-blue-500 text-white'
                }`}
                onClick={onClose}
            >
                {buttonText}
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default AlertModal;
