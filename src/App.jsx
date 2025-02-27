import { useState } from 'react'
import AuthForm from './components/AuthForm'
import './App.css'
import HeroSection from './components/HeroSection'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/AuthForm" element={<AuthForm />} />
      </Routes>
    </Router>
      {/* <div className='flex justify-center items-center w-full h-screen bg-slate-50'>
        <AuthForm />
      </div>
      <div>
        <HeroSection />
      </div> */}
    </>
  )
}

export default App
