import React from 'react'
import Project from './Project'
import { Link } from 'react-router-dom'
import Achievements from './Achievements'

function About() {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

  return (
    <div data-aos="fade" className=' relative outline outline-l-secondary dark:outline-d-secondary  outline-[2px] rounded-xl px-[1rem] mb-[6rem] laptop:basis-[70%] laptop:mt-[6rem]'>
        <div className='left-0 top-6 box-border font-mont font-bold text-[1rem] tablet-lg:text-[18px] bg-l-text dark:bg-d-accent absolute w-[8rem] rounded-sm border-r-[15px] border-r-l-primary dark:border-r-d-primary  border-t-[16px] border-b-[16px] border-t-l-text dark:border-t-d-accent border-b-l-text dark:border-b-d-accent'>
            <h1 className='absolute -top-3 left-2 text-l-primary dark:text-d-primary'>About me</h1>
        </div>
        <div className='flex flex-col justify-start items-start pt-[5rem] pb-[1rem]'>

            <p className='text-[12px] tablet-lg:text-[14px] font-over font-light text-start'>
                <span className='block pb-[1rem]'>Improving <a href="" className='bg-l-secondary dark:bg-d-secondary font-over px-[0.75rem] py-[0.25rem] rounded-md font-medium text-[10px] tablet-lg:text-[12px]'>Kolor Tool</a></span>
                <span className='block pb-[1rem]'>Exp <a href="" className='bg-l-secondary dark:bg-d-secondary font-over px-[0.75rem] py-[0.25rem] rounded-md font-medium text-[10px] tablet-lg:text-[12px]'>Design Intern @DailyDumbbell</a></span>
                Aspiring Frontend Engineer & UI/UX Designer with a passion for transforming ideas into reality through code & dash of creativity. <br></br>
                Currently exploring and crafting side projects to learn and grow. Eager to contribute fresh perspectives and create remarkable products.
            </p>

            <div className='w-[100%] my-[1.5rem] flex flex-col gap-[1rem] items-center'>
                <h2 className='font-mont font-bold text-[1rem] tablet-lg:text-[18px] text-start self-start '>Portfolio</h2>
                <Project link={'https://github.com/kmr-sahil/retro-news'} title={"Retro News"} img={"img1"} s1={"React"} s2={"Tailwind CSS"} s3={"Front-End"} para={"Reviving Nostalgia: A Modern Take on Retro Newspaper Layout – Seamlessly Fetching and Displaying News through an API."}></Project>
                <Project link={'https://github.com/kmr-sahil/kolor-tool'} title={"Kolor Tool"} img={"img1"} s1={"HTML"} s2={"Tailwind CSS"} s3={"JavaScript"} para={"Effortlessly create harmonious color palettes with my innovative opacity-free shade generator website."}></Project>
                <Link onClick={scrollToTop} to="/portfolio" className='bg-l-secondary dark:bg-d-secondary font-over font-light text-[0.5rem] w-[3.5rem] py-[4px] rounded-xl'>see more</Link>
            </div>

            <div className=' flex flex-col gap-[1rem] items-center'>
                <h2 className='font-mont font-bold text-[1rem] tablet-lg:text-[18px] text-start self-start '>Experience</h2>
                <div className='flex flex-wrap gap-1 tablet:gap-4'>
                    <span className='bg-l-secondary dark:bg-d-secondary px-[0.5rem] py-[0.25rem] font-over font-medium text-[10px] tablet-lg:text-[12px] rounded-md'>1+ years of learning experience</span>
                    <span className='bg-l-secondary dark:bg-d-secondary px-[0.5rem] py-[0.25rem] font-over font-medium text-[10px] tablet-lg:text-[12px] inline-block rounded-md'>4+ months of working experience</span>
                </div>
            </div>

            <Achievements/>

        </div>
    </div>
  )
}

export default About