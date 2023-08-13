import React from 'react'
import moonsvg from "../assets/moonicon.svg";
import { Link } from 'react-router-dom'

function Navbar() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    
    <div className='z-10 w-[94%] tablet-lg:w-[32rem] laptop:w-[45rem] desktop:w-[55rem] bg-l-primary bg-opacity-90 flex outline outline-l-secondary outline-[2px] rounded-full px-[24px] py-[16px] fixed laptop:bottom-[84%] bottom-[0rem] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='basis-[30%] tablet-lg:basis-[40%] '>
            <img className='laptop:h-[20px] pt-[2px]' src={moonsvg} alt="" />
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