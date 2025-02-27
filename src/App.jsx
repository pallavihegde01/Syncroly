import { useState } from 'react'
import AuthForm from './components/AuthForm'
import './App.css'
import HeroSection from './components/HeroSection'

function App() {
  
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen bg-slate-50'>
        <AuthForm />
      </div>
      <div>
        <HeroSection />
      </div>
    </>
  )
}

export default App
