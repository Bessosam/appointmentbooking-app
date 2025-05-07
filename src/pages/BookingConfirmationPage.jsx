import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Try to get booking details from route state or fallback from localStorage
  const bookingDetails = location.state || JSON.parse(localStorage.getItem('selectedBooking'));

  const handleConfirm = () => {
    if (!bookingDetails) return;

    const { date, time } = bookingDetails;

    // Update the main booking data (set slot to 'booked')
    const existingData = JSON.parse(localStorage.getItem("bookingData")) || {};
    const updatedData = {
      ...existingData,
      [date]: {
        ...(existingData[date] || {}),
        [time]: "booked",
      },
    };
    localStorage.setItem("bookingData", JSON.stringify(updatedData));

    // Save separately in confirmedBookings
    const myConfirmed = JSON.parse(localStorage.getItem("confirmedBookings")) || [];
    myConfirmed.push({ date, time });
    localStorage.setItem("confirmedBookings", JSON.stringify(myConfirmed));

    alert("Bokningen har bekräftats!");
    navigate("/mybookings");
  };

  const handleCancel = () => {
    navigate("/booking");
  };

  // If there's no booking info, show a fallback message
  if (!bookingDetails) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Ingen bokningsinformation hittades
        </h2>
        <p className="text-gray-600">Gå tillbaka och välj en tid.</p>
        <button
          onClick={handleCancel}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tillbaka
        </button>
      </div>
    );
  }

  // Main confirmation content
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold text-center mb-4">Bekräfta Bokning</h2>
      <div className="text-gray-800 space-y-2 mb-6">
        <p><strong>Datum:</strong> {bookingDetails.date}</p>
        <p><strong>Tid:</strong> {bookingDetails.time}</p>
        <p><strong>Plats:</strong> QuickWash Tvätt</p>
      </div>
      <div className="flex justify-between">
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
