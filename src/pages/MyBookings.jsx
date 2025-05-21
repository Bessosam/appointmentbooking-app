import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageDecoration from "../components/PageDecoration";

const timeSlotRanges = {
  "07:00": "07:00 – 10:00",
  "10:00": "10:00 – 13:00",
  "13:00": "13:00 – 16:00",
  "16:00": "16:00 – 19:00",
  "19:00": "19:00 – 22:00",
};

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedCancel, setSelectedCancel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser?.userid) {
      const userBookings =
        JSON.parse(localStorage.getItem(`confirmedBookings_${currentUser.userid}`)) || [];
      setBookings(userBookings);
    }
  }, []);

  const confirmCancel = () => {
    const { date, time } = selectedCancel;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return;

    const updatedBookings = bookings.filter(
      (b) => !(b.date === date && b.time === time)
    );
    setBookings(updatedBookings);
    localStorage.setItem(
      `confirmedBookings_${currentUser.userid}`,
      JSON.stringify(updatedBookings)
    );

    const data = JSON.parse(localStorage.getItem("bookingData")) || {};
    if (data[date]) {
      data[date][time] = "available";
      localStorage.setItem("bookingData", JSON.stringify(data));
    }

    setSelectedCancel(null);
    /* alert(`Bokningen för ${date} kl. ${timeSlotRanges[time] || time} har avbokats.`); */
  };

  return (
    <div className="max-w-3xl mx-auto p-6 relative">
      <h1 className="text-3xl font-bold text-center mb-6">Mina Bokningar</h1>
      <button
        onClick={() => navigate("/booking")}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Tillbaka till bokning
      </button>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">Inga bokningar hittades.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((b, i) => (
            <li
              key={i}
              className="bg-white shadow p-5 rounded-xl space-y-2 border border-gray-200"
            >
              <p><strong>Datum:</strong> {b.date}</p>
              <p><strong>Tid:</strong> {timeSlotRanges[b.time] || b.time}</p>
              <p><strong>Plats:</strong> QuickWash Tvätt</p>
              <p><strong>Status:</strong> Bekräftad</p>
              <div className="text-right">
                <button
                  onClick={() => setSelectedCancel({ date: b.date, time: b.time })}
                  className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600"
                >
                  Avboka
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Confirmation Modal */}
      {selectedCancel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <p className="text-lg font-semibold mb-4">
              Vill du verkligen avboka bokningen för {selectedCancel.date} kl.{" "}
              {timeSlotRanges[selectedCancel.time] || selectedCancel.time}?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmCancel}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Ja
              </button>
              <button
                onClick={() => setSelectedCancel(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Nej
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-[-90px] right-0 z-0 size-60 opacity-20">
        <PageDecoration />
      </div>
    </div>
  );
};

export default MyBookings;
