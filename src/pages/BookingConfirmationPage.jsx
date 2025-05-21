import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageDecoration from "../components/PageDecoration";

const timeSlotRanges = {
  "07:00": "07:00 – 10:00",
  "10:00": "10:00 – 13:00",
  "13:00": "13:00 – 16:00",
  "16:00": "16:00 – 19:00",
  "19:00": "19:00 – 22:00",
};

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails =
    location.state || JSON.parse(localStorage.getItem("selectedBooking"));

  const handleConfirm = () => {
    if (!bookingDetails) return;

    const { date, time } = bookingDetails;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // Get existing global booking data and update booking state for the time slot
    const existingData = JSON.parse(localStorage.getItem("bookingData")) || {};
    const updatedData = {
      ...existingData,
      [date]: {
        ...(existingData[date] || {}),
        [time]: "booked",
      },
    };
    localStorage.setItem("bookingData", JSON.stringify(updatedData));

    // Get current user's confirmed bookings, add new one, save back to user-specific key
    const myConfirmed =
      JSON.parse(localStorage.getItem(`confirmedBookings_${currentUser.userid}`)) || [];
    // Check to avoid duplicate booking
    if (!myConfirmed.find((b) => b.date === date && b.time === time)) {
      myConfirmed.push({ date, time });
      localStorage.setItem(
        `confirmedBookings_${currentUser.userid}`,
        JSON.stringify(myConfirmed)
      );
    }

    // Clear selectedBooking after confirmation to prevent stale state
    localStorage.removeItem("selectedBooking");

    navigate("/mybookings");
  };

  const handleCancel = () => {
    const confirmCancel = window.confirm(
      "Är du säker på att du vill avbryta bokningen?"
    );
    if (confirmCancel) {
      navigate("/booking");
    }
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

  const displayTime =
    timeSlotRanges[bookingDetails.time] || bookingDetails.time;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Bekräfta Bokning</h2>
      <div className="text-gray-800 space-y-2 mb-6">
        <p>
          <strong>Datum:</strong> {bookingDetails.date}
        </p>
        <p>
          <strong>Tid:</strong> {displayTime}
        </p>
        <p>
          <strong>Plats:</strong> QuickWash Tvätt
        </p>
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
      <div className="absolute bottom-[-90px] right-0 z-0 size-60">
        <PageDecoration />
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
