import React from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ date, time, onConfirm, onCancel }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirm Your Booking</h2>

      <div className="text-gray-700 space-y-2">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Location:</strong> QuickWash Laundry</p>
      </div>

      <div className="flex justify-between mt-6 gap-2">
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
        >
          Cancel
        </button>
       
        <button
          onClick={onConfirm}
          className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
        >
          Confirm
        </button>
        
      </div>
    </div>
  );
};

export default BookingForm;
