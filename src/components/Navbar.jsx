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
    // Set the duration of the scroll animation in milliseconds
    const duration = 500; // Adjust as needed
  
    // Get the starting position of the scroll
    const start = window.pageYOffset;
    
    // Calculate the distance to scroll
    const distance = -start;
    
    // Get the current timestamp
    const startTime = performance.now();
  
    // Define the scroll animation function
    const scrollAnimation = (timestamp) => {
      const elapsed = timestamp - startTime;
      
      // Calculate the next position of the scroll using easing function (e.g., easeOutQuad)
      const easeFunction = t => t * (2 - t);
      const currentPosition = start + distance * easeFunction(elapsed / duration);
      
      // Perform the scroll
      window.scrollTo(0, currentPosition);
      
      // Check if the animation should continue
      if (elapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    };
  
    // Start the animation
    requestAnimationFrame(scrollAnimation);
  };

  return (
    
    <div className='backdrop-blur-lg z-10  w-[94%] tablet-lg:w-[32rem] laptop:w-[45rem] desktop:w-[55rem] bg-l-primary dark:bg-d-primary dark:bg-opacity-60 bg-opacity-60 flex outline outline-l-secondary dark:outline-d-secondary outline-[2px] rounded-full px-[24px] py-[16px] fixed laptop:bottom-[84%] bottom-[0rem] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='basis-[30%] tablet-lg:basis-[40%] '>
            <img onClick={handleTheme} className='cursor-pointer laptop:h-[20px] pt-[2px] dark:brightness-[50]' src={moonsvg} alt="" />
        </div>
        <div className='flex gap-1 basis-[70%] tablet-lg:basis-[60%] font-mont text-[0.7rem] laptop:text-[1rem] font-medium justify-between'>
            <Link className=' hover:scale-105 active:scale-105 duration-150' onClick={scrollToTop} to="/">About</Link>
            <Link className=' hover:scale-105 active:scale-105 duration-150' onClick={scrollToTop} to="/resume">Resume</Link>
            <Link className=' hover:scale-105 active:scale-105 duration-150' onClick={scrollToTop} to="/portfolio">Portfolio</Link>
            <Link className=' hover:scale-105 active:scale-105 duration-150' onClick={scrollToTop} to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
