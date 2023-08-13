import React from 'react'
import img1 from "../assets/doo.png"

function Project({title, para, s1, s2, s3, img}) {
    
  return (
    <div className='self-stretch bg-l-secondary rounded-lg flex gap-4 justify-start items-center px-[0.5rem] py-[0.25rem] tablet:py-[0.5rem]'>
        <img className='w-[64px] h-[64px] rounded-lg aspect-auto object-cover' src={img1} alt="img" />
        <div className='font-over flex flex-col justify-center items-start flex-wrap py-[0.5rem]'>
            <h3 className='font-medium text-[12px] '>{title}</h3>
            <p className='font-light text-[8px] tablet-lg:text-[10px] text-start leading-[0.625rem]'>{para}</p>
            <div className='text-[8px] font-extralight italic flex gap-[0.25rem] mt-1'>
                <span className='bg-l-primary px-[0.5rem] py-[1px] rounded-sm'>{s1}</span>
                <span className='bg-l-primary px-[0.5rem] py-[1px] rounded-sm'>{s2}</span>
                <span className='bg-l-primary px-[0.5rem] py-[1px] rounded-sm'>{s3}</span>
            </div>
        </div>
    </div>
  )
}

export default Project