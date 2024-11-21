import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold text-gray-800">Confirm Deletion</h2>
        <p className="mt-2 text-gray-700">Are you sure you want to delete this blog?</p>
        <div className="mt-6 flex justify-end">
          <button 
            onClick={onConfirm} 
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 mr-2"
          >
            Delete
          </button>
          <button 
            onClick={onClose} 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
