import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import BookingPage from './pages/BookingPage'
import BookingConfirmationPage from './pages/BookingConfirmationPage'
import MyBookingsPage from './pages/MyBookingsPage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/booking' element={<BookingPage />}/>
        <Route path='/confirm' element={<BookingConfirmationPage/>}/>
        <Route path='/mybookings' element={<MyBookingsPage/>}/>
      </Routes>
    </>
  );
};

export default App;
