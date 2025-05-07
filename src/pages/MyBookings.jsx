import React, { useState, useEffect } from 'react';

// Define your booking slot periods
const timeSlotRanges = {
  '07:00': '07:00 – 09:00',
  '09:00': '09:00 – 11:00',
  '11:00': '11:00 – 13:00',
  '13:00': '13:00 – 15:00',
  '15:00': '15:00 – 17:00',
  '17:00': '17:00 – 19:00',
  '19:00': '19:00 – 21:00',
  '21:00': '21:00 – 23:00',
};

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('confirmedBookings')) || [];
    setBookings(saved);
  }, []);

  const handleCancel = (date, time) => {
    const updated = bookings.filter(b => !(b.date === date && b.time === time));
    setBookings(updated);
    localStorage.setItem('confirmedBookings', JSON.stringify(updated));

    const data = JSON.parse(localStorage.getItem('bookingData')) || {};
    if (data[date]) {
      data[date][time] = 'available';
      localStorage.setItem('bookingData', JSON.stringify(data));
    }

    alert(`Bokningen för ${date} kl. ${time} har avbokats.`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Mina Bokningar</h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">Inga bokningar hittades.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((b, i) => (
            <li
              key={i}
              className="bg-white shadow p-5 rounded-xl"
            >
              <div className="mb-3 space-y-1">
                <p><strong>📅 Datum:</strong> {b.date}</p>
                <p><strong>⏰ Tid:</strong> {timeSlotRanges[b.time] || b.time}</p>
                <p><strong>🧺 Plats:</strong> QuickWash Tvätt</p>
                <p><strong>✅ Status:</strong> Bekräftad</p>
              </div>
              <div className="text-right">
                <button
                  onClick={() => handleCancel(b.date, b.time)}
                  className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600"
                >
                  Avboka
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
