import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import ContactForm from './pages/ContactForm'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutMe" element={<AboutMe/>}>Hello</Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contactMe" element={<ContactForm/>}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
