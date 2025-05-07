import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import WeeklySlotGrid from '../components/WeeklySlotGrid';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookingData, setBookingData] = useState({});
  const navigate = useNavigate();

  const formatDate = (date) => date.toLocaleDateString('en-CA');

  // Load from localStorage or JSON
  useEffect(() => {
    const localData = localStorage.getItem('bookingData');
    if (localData) {
      setBookingData(JSON.parse(localData));
    } else {
      fetch('/bookings.json')
        .then((res) => res.json())
        .then((data) => {
          setBookingData(data);
          localStorage.setItem('bookingData', JSON.stringify(data));
        });
    }
  }, []);

  // Handle booking and persist
  const handleBook = (time) => {
    const dateKey = formatDate(selectedDate);
    const updatedData = {
      ...bookingData,
      [dateKey]: {
        ...bookingData[dateKey],
        [time]: 'booked'
      }
    };

    setBookingData(updatedData);
    localStorage.setItem('bookingData', JSON.stringify(updatedData));
    localStorage.setItem('selectedBooking', JSON.stringify({ date: dateKey, time }));

    navigate('/confirm');
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">Boka en Tidslucka</h1>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div className="bg-white shadow-md rounded p-4 w-[360px]">
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>
        <WeeklySlotGrid
          selectedDate={selectedDate}
          bookingData={bookingData}
          onBook={handleBook}
        />
      </div>
    </div>
  );
};

export default BookingPage;
