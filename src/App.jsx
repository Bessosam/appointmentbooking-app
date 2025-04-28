import React from "react";
import './app.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import MyBookingsPage from './pages/MyBookingsPage'

const App = () => {
  return (
    <div>
      <h1>Booking app</h1>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>

        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='/mybookings' element={<MyBookingsPage/>}/>
      </Routes>
    </div>
  );

}
export default App;