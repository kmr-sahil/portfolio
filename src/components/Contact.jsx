import React from 'react'

function Contact() {
  return (
    <div className='relative outline outline-l-secondary outline-[2px] rounded-xl px-[1rem] mb-[6rem] laptop:basis-[70%] laptop:mt-[6rem]'>
        <div className='left-0 top-6 box-border font-mont font-bold text-[1rem] tablet-lg:text-[18px] bg-l-text absolute w-[8rem] rounded-sm border-r-[15px] border-r-l-primary  border-t-[16px] border-b-[16px] border-t-l-text border-b-l-text'>
            <h1 className='absolute -top-3 left-2 text-l-primary'>Contact</h1>
        </div>
        <div className='flex flex-col justify-start items-start pt-[5rem] pb-[1rem] gap-4'>
            <input className='self-stretch flex justify-center items-baseline gap-2 grow bg-l-secondary rounded-md font-mont font-light text-[10px] text-l-text px-[1rem] py-[0.5rem]' type="email" name="" id="" placeholder='11.sahil.kmr@gmail.com'/>
            <textarea className='self-stretch flex justify-center items-baseline gap-2 grow bg-l-secondary rounded-md font-mont font-light text-[10px] text-l-text px-[1rem] py-[0.5rem]' name="" id="" rows="5" placeholder='enter your message'></textarea>
            <input className='self-stretch flex justify-center items-baseline gap-2 grow bg-l-secondary rounded-md font-mont font-light text-[10px] text-l-text px-[1rem] py-[0.5rem]' type="submit" value="Send message"/>

            <p className='self-center font-light text-[10px] text-l-text'>-- or just --</p>

            <div className='self-stretch bg-l-secondary flex flex-col rounded-md items-start px-[0.75rem] py-[0.75rem]'>
                <h3 className='font-medium text-[12px]'>Want to hire me as a freelancer ? Let’s Discuss</h3>
                <p className='font-light text-[10px]'>Drop your message and let's discuss about your project.</p>
                <a href="" className='mt-[0.75rem] w-[100%] bg-[#4ADE80] font-medium text-[10px] py-[0.5rem] rounded-md'>Chat on Whatsapp</a>
            </div>
        </div>

    </div>
  )
}

export default Contact