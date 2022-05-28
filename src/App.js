import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
import Banner from './components/Banner'
import './App.css';

function App() {
  return (
   <BrowserRouter>
      <div className="container">         
      <Routes> 
          <Route index element={<Login />} />     
          <Route path="/sign-up" element={<Signup />} />             
      </Routes>
      <Banner />
      </div> 
      
   </BrowserRouter>     
  );
}

export default App;
