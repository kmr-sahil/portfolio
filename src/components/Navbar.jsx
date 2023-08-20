import React from 'react'
import moonsvg from "../assets/moonicon.svg";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


function Navbar() {

  const [theme, setTheme] = useState("Light");
  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }

    console.log(theme)
  }, [theme])

  const handleTheme = () => {
    setTheme( theme === "dark" ? "light" : "dark" )
    
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    
    <div className='backdrop-blur-lg z-10  w-[94%] tablet-lg:w-[32rem] laptop:w-[45rem] desktop:w-[55rem] bg-l-primary dark:bg-d-primary dark:bg-opacity-60 bg-opacity-60 flex outline outline-l-secondary dark:outline-d-secondary outline-[2px] rounded-full px-[24px] py-[16px] fixed laptop:bottom-[84%] bottom-[0rem] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='basis-[30%] tablet-lg:basis-[40%] '>
            <img onClick={handleTheme} className='cursor-pointer laptop:h-[20px] pt-[2px] dark:brightness-[50]' src={moonsvg} alt="" />
        </div>
        <div className='flex gap-1 basis-[70%] tablet-lg:basis-[60%] font-mont text-[0.7rem] laptop:text-[1rem] font-medium justify-between'>
            <Link onClick={scrollToTop} to="/">About</Link>
            <Link onClick={scrollToTop} to="/resume">Resume</Link>
            <Link onClick={scrollToTop} to="/portfolio">Portfolio</Link>
            <Link onClick={scrollToTop} to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
