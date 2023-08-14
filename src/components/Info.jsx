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
            <a target='_blank' href='https://www.linkedin.com/in/sahil-kumar-5b781721b/' className="fa-brands fa-linkedin"></a>
            <a target='_blank' href='https://twitter.com/kr_sahil' className="fa-brands fa-square-x-twitter"></a>
            <a target='_blank' href='https://github.com/kmr-sahil' className="fa-brands fa-square-github"></a>
            <a target='_blank' href='https://www.linkedin.com/in/sahil-kumar-5b781721b/' className="fa-brands fa-square-whatsapp"></a>
        </div>
    </div>
  )
}

export default Info