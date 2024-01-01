import React from 'react'
import profile from "../assets/profile.png"


function Info() {


  return (
    <div className='flex laptop:flex-col gap-[20px] justify-center laptop:justify-start mb-[20px] laptop:basis-[30%] laptop:mt-[6rem]'>
        <div data-aos="fade" className='grow basis-[70%] laptop:grow-0 laptop:basis-[0%] font-mont flex flex-col tablet:flex-row laptop:flex-col tablet:gap-4 justify-center items-center outline outline-l-secondary dark:outline-d-secondary outline-[2px] rounded-xl py-[24px]'>
            <div className='relative'>
              <div className='absolute -right-3 -top-2 z-20 w-[20px] h-[20px] rounded-full bg-[#267d3f] bg-opacity flex items-center justify-center'>
                <div className='w-[8px] h-[8px] animate-[ping_1.2s_ease-out_infinite] bg-[#00ff47] rounded-full '></div>
              </div>
                <img className='w-[5rem] rounded-xl' src={profile} alt="" /> 
            </div>
          
            <div>
              <h1 className='font-bold text-[1.25rem]'>Sahil Kumar</h1>
              <div className=' font-medium text-[0.625rem] bg-l-secondary dark:bg-d-secondary px-[0.5rem] py-[4px] rounded-full'>UI Developer</div>
            </div>
        </div>
        <div data-aos="fade" className='text-l-text dark:text-d-accent text-[1.25rem] flex basis-[10%] laptop:basis-[0%] flex-col laptop:flex-row flex-wrap justify-between tablet:gap-4 outline outline-l-secondary dark:outline-d-secondary outline-[2px] rounded-xl px-[18px] py-[24px] laptop:py-[16px]'>
            <a target='_blank' href='https://www.linkedin.com/in/sahil-kumar-5b781721b/' className="fa-brands fa-linkedin"></a>
            <a target='_blank' href='https://twitter.com/kr_sahil' className="fa-brands fa-square-x-twitter"></a>
            <a target='_blank' href='https://github.com/kmr-sahil' className="fa-brands fa-square-github"></a>
            <a href='mailto:11.sahil.kmr@gmail.com' className="fa-solid fa-envelope"></a>
        </div>
    </div>
  )
}

export default Info