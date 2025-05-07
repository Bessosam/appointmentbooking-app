import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingDetails = location.state
    ? {
      id: Date.now(),
      date: location.state.date,
      time: location.state.time,
      location: 'QuickWash Tvätt',
    }
    : null;

  const handleConfirm = () => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, bookingDetails]));
    navigate('/mybookings');
  };

  const handleCancel = () => {
    navigate('/booking');
  };

  if (!bookingDetails) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Ingen bokningsinformation hittades</h2>
        <p className="text-gray-600">Gå tillbaka och välj en tid.</p>
        <button
          onClick={() => navigate('/booking')}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tillbaka
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Bekräfta din bokning</h2>

      <div className="text-gray-700 space-y-2 border p-4 rounded-lg shadow-sm bg-gray-50">
        <p><strong>Datum:</strong> {bookingDetails.date}</p>
        <p><strong>Tid:</strong> {bookingDetails.time}</p>
        <p><strong>Plats:</strong> {bookingDetails.location}</p>
      </div>

      <div className="flex justify-between mt-6 gap-2">
        <button
          onClick={handleCancel}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
        >
          Avbryt
        </button>

        <button
          onClick={handleConfirm}
          className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
        >
          Bekräfta
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
