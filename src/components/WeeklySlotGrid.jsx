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

  const handleClick = (slotKey) => {
    if (bookingsForDate[slotKey] === 'available') {
      onBook(slotKey);
    }
  };

  return (
    <div className="p-4 w-full max-w-lg bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold text-center mb-4">
        Tidsluckor för {formattedDate || '---'}
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
      {timeSlots.map(([start, end]) => {
  const slotKey = `${start}-${end}`;
  const status = bookingsForDate[slotKey] || 'booked';
  const slotClass = `w-28 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1 transition ${
    status === 'available'
      ? 'bg-green-500 text-white hover:bg-green-600 cursor-pointer'
      : 'bg-red-500 text-white cursor-not-allowed'
  }`;

  return (
    <div
      key={slotKey}
      onClick={() => handleClick(slotKey)}
      className={slotClass}
    >
      <div className="text-xs font-semibold">
        {start} - {end}
      </div>
      {status === 'available' ? <User size={18} /> : <Lock size={18} />}
    </div>
  );
})}

      </div>
    </div>
  );
};

export default WeeklySlotGrid;