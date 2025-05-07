import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import availableSlots from '../data.json';
import { FaLock, FaUser } from 'react-icons/fa';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const formatDateKey = (date) => {
    const pad = (num) => String(num).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  };

  const dateKey = formatDateKey(selectedDate);
  const slots = availableSlots[dateKey] || [];

  const handleBook = (time) => {
    navigate('/confirm', { state: { date: dateKey, time } });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Boka en Tidslucka</h2>

      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className="mx-auto"
      />

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Tillgängliga tider för {dateKey}
        </h3>

        {slots.length ? (
          <div className="grid grid-cols-2 gap-4">
            {slots.map((slot, index) => (
              <div
                key={index}
                className={`flex justify-between items-center border p-2 rounded shadow-sm ${slot.available ? 'bg-green-100' : 'bg-red-100'
                  }`}
              >
                <span className="flex items-center gap-1">
                  {slot.available ? (
                    <FaUser className="text-green-600" />
                  ) : (
                    <FaLock className="text-red-600" />
                  )}
                  {slot.label}
                </span>
                <button
                  onClick={() => slot.available && handleBook(slot.label)}
                  disabled={!slot.available}
                  className={`px-3 py-1 rounded ${slot.available
                    ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  {slot.available ? 'Boka' : 'Ej tillgänglig'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Inga tider tillgängliga denna dag.</p>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
