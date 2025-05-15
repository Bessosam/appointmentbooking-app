import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const timeSlotRanges = {
  '07:00': '07:00 – 10:00',
  '10:00': '10:00 – 13:00',
  '13:00': '13:00 – 16:00',
  '16:00': '16:00 – 19:00',
  '19:00': '19:00 – 22:00'
};

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails = location.state || JSON.parse(localStorage.getItem('selectedBooking'));

  const handleConfirm = () => {
    if (!bookingDetails) return;

    const { date, time } = bookingDetails;

    const existingData = JSON.parse(localStorage.getItem("bookingData")) || {};
    const updatedData = {
      ...existingData,
      [date]: {
        ...(existingData[date] || {}),
        [time]: "booked",
      },
    };
    localStorage.setItem("bookingData", JSON.stringify(updatedData));

    const myConfirmed = JSON.parse(localStorage.getItem("confirmedBookings")) || [];
    myConfirmed.push({ date, time });
    localStorage.setItem("confirmedBookings", JSON.stringify(myConfirmed));

    navigate("/mybookings");
  };

  const handleCancel = () => {
    navigate("/booking");
  };

  if (!bookingDetails) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl text-center">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Ingen bokningsinformation hittades
        </h2>
        <button
          onClick={handleCancel}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tillbaka
        </button>
      </div>
    );
  }

  const displayTime = timeSlotRanges[bookingDetails.time] || bookingDetails.time;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Bekräfta Bokning</h2>
      <div className="text-gray-800 space-y-2 mb-6">
        <p><strong>Datum:</strong> {bookingDetails.date}</p>
        <p><strong>Tid:</strong> {displayTime}</p>
        <p><strong>Plats:</strong> QuickWash Tvätt</p>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleCancel}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Avbryt
        </button>
        <button
          onClick={handleConfirm}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Bekräfta
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
