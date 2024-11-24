import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClose }) => {
  const [show, setShow] = useState(false);

  // Trigger animation after mount
  useEffect(() => {
    setShow(true);
  }, []);

  // Ensure modal closes with animation
  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 500); // Delay unmount for animation
  };

  // Modal content
  const modalContent = (
    <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`transform transition-transform duration-500 ${
          show ? 'translate-y-0' : '-translate-y-full'
        } bg-white p-8 rounded shadow-lg text-black`}
      >
        <h2 className="text-xl font-bold mb-4">This is the modal</h2>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );

  // Use React portal to render the modal outside the parent DOM hierarchy
  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
