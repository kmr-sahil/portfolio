import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar'
import Info from './components/Info'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {

  return (
    <div className='w-full tablet-lg:w-[35rem] laptop:w-[45rem] desktop:w-[55rem] mx-auto ps-[20px] pe-[20px] tablet:ps-[40px] tablet:pe-[40px] laptop:flex laptop:gap-[20px]'>
      <Router>

        <Navbar></Navbar>
        <Info></Info>

      <Routes>
        <Route exact path="/" element={
              <About></About>
              }
        />
        
        <Route exact path="/resume" element={
              <Resume></Resume>
              }
        />

        <Route exact path="/portfolio" element={
              <Portfolio></Portfolio>
              }
        />

        <Route exact path="/contact" element={
              <Contact></Contact>
              }
        />
        </Routes>

      </Router>
      
    </div>
  )
}

export default App
