import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import Food from './components/Food'
import Coupon from './components/coupon'
import Services from './components/Services'
import CleanFood from './components/CleanFood'
import Photo from './components/Photo'
import ServUnique from './components/ServUnique'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Achievements/>
      <Food/>
      <Coupon/>
      <Services/>
      <CleanFood/>
      <Photo/>
      <ServUnique/>
      <Footer/>
    </>
  )
}

export default App
