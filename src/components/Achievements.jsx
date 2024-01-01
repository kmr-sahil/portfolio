import React from 'react'
import { Link } from 'react-router-dom'

function Achievements() {
  return (
    <>
        <div className=' flex flex-col gap-[1rem] items-center'>
                <h2 className='font-mont font-bold text-[18px] tablet:text-[20px] text-start self-start '>Achievements</h2>
                <div className='flex flex-wrap gap-1 tablet-lg:gap-3'>
                    <Link to="https://moonshot.scaler.com/s/li/xgo1cLIeDl" className=' bg-l-secondary dark:bg-d-secondary px-[0.5rem] py-[0.25rem] font-over font-medium text-[12px] tablet:text-[14px] rounded-md'>JavaScript Certification - Scalar</Link>
                    <Link to="https://kodekloud.com/certificate-verification/2D1443497AB3-2D143D44F3B7-2D1437AB63EB/" className=' bg-l-secondary dark:bg-d-secondary px-[0.5rem] py-[0.25rem] font-over font-medium text-[12px] tablet:text-[14px] rounded-md'>Docker Training Certification - KodeKloud</Link>
                    <Link to="" className=' bg-l-secondary dark:bg-d-secondary px-[0.5rem] py-[0.25rem] font-over font-medium text-[12px] tablet:text-[14px] rounded-md text-start'>Built Task Management System at BlueLearn's Proto-Drive Hackathon</Link>
                </div>
            </div>
    </>
  )
}

export default Achievements