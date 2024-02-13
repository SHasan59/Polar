import React, { MouseEventHandler, ReactNode } from 'react';

interface Props {
  onClose: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode; //children which adds components
}

const Modal: React.FC<Props> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-4 flex flex-col justify-between rounded-md bg-blue-500 p-10 md:h-1/2 md:w-1/3">
        <button
          className="text-bold absolute right-2 top-2 text-white"
          onClick={onClose}
        >
          X
        </button>
        <div className="text-center text-white">
          {/* Shows children here */}
          {children}
        </div>

        <div className="absolute bottom-2 right-2 text-xs text-white">
          &copy; Copyright Polar 2024
        </div>
      </div>
    </div>
  );
};

export default Modal;
