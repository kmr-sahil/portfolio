import React from 'react'
import profile from "../assets/profile.png"

function Info() {
  return (
    <div className='flex laptop:flex-col gap-[20px] justify-center laptop:justify-start mb-[20px] laptop:basis-[30%] laptop:mt-[6rem]'>
        <div className='grow basis-[70%] laptop:grow-0 laptop:basis-[0%] font-mont flex flex-col tablet:flex-row laptop:flex-col tablet:gap-4 justify-center items-center outline outline-l-secondary outline-[2px] rounded-xl py-[24px]'>
            <img className='w-[5rem] rounded-xl' src={profile} alt="" />
            <div>
              <h1 className='font-bold text-[1.25rem]'>Sahil Kumar</h1>
              <div className='font-medium text-[0.625rem] bg-l-secondary px-[0.5rem] py-[4px] rounded-full'>UI Developer</div>
            </div>
        </div>
        <div className='text-l-text text-[1.25rem] flex basis-[10%] laptop:basis-[0%] flex-col laptop:flex-row flex-wrap justify-between tablet:gap-4 outline outline-l-secondary outline-[2px] rounded-xl px-[18px] py-[24px] laptop:py-[16px]'>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-square-x-twitter"></i>
            <i className="fa-brands fa-square-github"></i>
            <i className="fa-brands fa-square-whatsapp"></i>
        </div>
    </div>
  )
}

export default Info