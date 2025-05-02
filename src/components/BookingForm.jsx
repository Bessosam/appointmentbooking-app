import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [machine, setMachine] = useState("1");
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      date,
      time,
      machine,
      userId,
    };

    console.log("Booking confirmed:", booking);

    
    alert("Booking Confirmed!");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Booking Confirmation</h2>

      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label>Time:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

      <label>Washing Machine:</label>
      <select value={machine} onChange={(e) => setMachine(e.target.value)}>
        <option value="1">Machine 1</option>
        <option value="2">Machine 2</option>
        <option value="3">Machine 3</option>
      </select>

      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />

      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
