import React from 'react';
import { Lock, User } from 'lucide-react';

const timeSlots = [
  ['07:00', '10:00'],
  ['10:00', '13:00'],
  ['13:00', '16:00'],
  ['16:00', '19:00'],
  ['19:00', '22:00'],
];

const WeeklySlotGrid = ({ selectedDate, bookingData, onBook }) => {
  const formattedDate = selectedDate?.toLocaleDateString('en-CA');
  const bookingsForDate = bookingData[formattedDate] || {};

  const handleClick = (time) => {
    if (bookingsForDate[time] === 'available') {
      onBook(time);
    }
  };

  return (
    <div className="p-4 w-full max-w-lg bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold text-center mb-4">
        Tidsluckor för {formattedDate || '—'}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {timeSlots.map(([start, end]) => {
          const status = bookingsForDate[start] || 'booked';
          return (
            <div
              key={start}
              onClick={() => handleClick(start)}
              className={`rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 cursor-pointer transition ${
                status === 'available'
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-red-500 text-white cursor-not-allowed'
              }`}
            >
              <div className="text-sm font-semibold">{start} - {end}</div>
              {status === 'available' ? <User size={20} /> : <Lock size={20} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklySlotGrid;
