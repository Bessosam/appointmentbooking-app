import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageDecoration from '../components/PageDecoration';

const timeSlotRanges = {
  '07:00': '07:00 – 10:00',
  
  '10:00': '10:00 – 13:00',
  '13:00': '13:00 – 16:00',
  '16:00': '16:00 – 19:00',
  
  '19:00': '19:00 – 22:00'
};

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6"> Mina Bokningar</h1>
      <button onClick={() => navigate('/booking')} className="mb-6 text-blue-600 hover:underline">
        ← Tillbaka till bokning
      </button>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">Inga bokningar hittades.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((b, i) => (
            <li key={i} className="bg-white shadow p-5 rounded-xl space-y-2 border border-gray-200">
              <p><strong> Datum:</strong> {b.date}</p>
              <p><strong> Tid:</strong> {timeSlotRanges[b.time] || b.time}</p>
              <p><strong> Plats:</strong> QuickWash Tvätt</p>
              <p><strong> Status:</strong> Bekräftad</p>
              <div className="text-right">
                <button
                  onClick={() => handleCancel(b.date, b.time)}
                  className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600"
                >
                  Avboka
                </button>
              </div>
                    <div className="fixed bottom-[-90px] right-0 z-0 size-60">
        <PageDecoration />
      </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
