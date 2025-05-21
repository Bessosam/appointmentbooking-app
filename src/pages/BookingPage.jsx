import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import WeeklySlotGrid from '../components/WeeklySlotGrid';

const BookingPage = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [selectedDate, setSelectedDate] = useState(tomorrow);
  const [bookingData, setBookingData] = useState({});
  const navigate = useNavigate();

  const formatDate = (date) => date.toLocaleDateString('en-CA');

  useEffect(() => {
    const localData = localStorage.removeItem('bookingData');
    if (localData) {
      setBookingData(JSON.parse(localData));
    } else {
      fetch('/data.json')
        .then((res) => res.json())
        .then((data) => {
          const normalized = {};
          for (const [date, slots] of Object.entries(data)) {
            normalized[date] = {};
            slots.forEach(({ label, available }) => {
              normalized[date][label] = available ? 'available' : 'booked';
            });
          }
          setBookingData(normalized);
          localStorage.setItem('bookingData', JSON.stringify(normalized));
        })
        .catch((err) => console.error('Failed to fetch bookings:', err));
    }
  }, []);

  const handleBook = (slotKey) => {
    const dateKey = formatDate(selectedDate);
    const updatedData = {
      ...bookingData,
      [dateKey]: {
        ...bookingData[dateKey],
        [slotKey]: 'booked',
      },
    };
    setBookingData(updatedData);
  
localStorage.setItem('selectedBooking', JSON.stringify({ date: dateKey, time }));

navigate('/confirm', { state: { date: dateKey, time } });

    localStorage.setItem('selectedBooking', JSON.stringify({ date: dateKey, time: slotKey }));
    navigate('/confirm');
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">Boka en Tidslucka</h1>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div className="bg-white shadow-md rounded p-4 w-[360px]">
          <Calendar onChange={setSelectedDate} value={selectedDate} minDate={new Date()} className="mx-auto"/>
        </div>
        {selectedDate && selectedDate >= new Date().setHours(0,0,0,0)&& (
        <WeeklySlotGrid
          selectedDate={selectedDate}
          bookingData={bookingData}
          onBook={handleBook}
        />
        )}
      </div>
    </div>
  );
};

export default BookingPage;
