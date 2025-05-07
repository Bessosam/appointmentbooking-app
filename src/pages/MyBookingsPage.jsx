import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  const cancelBooking = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  const goToCalendar = () => {
    navigate('/booking');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">My Bookings</h2>
        <button
          onClick={goToCalendar}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Kalender
        </button>
      </div>

      {bookings.length ? (
        <ul className="space-y-4">
          {bookings.map((b) => (
            <li key={b.id} className="border p-4 rounded-md flex justify-between items-center">
              <div>
                <p><strong>Datum:</strong> {b.date}</p>
                <p><strong>Tid:</strong> {b.time}</p>
                <p><strong>Plats:</strong> {b.location}</p>
              </div>
              <button
                onClick={() => cancelBooking(b.id)}
                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
              >
                Avboka
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Du har inga bokningar.</p>
      )}
    </div>
  );
};

export default MyBookingsPage;
