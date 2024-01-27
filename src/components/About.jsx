import React from 'react'
import Project from './Project'
import { Link } from 'react-router-dom'
import Achievements from './Achievements'

function About() {

    const data = [
        {
          title: "Authentitcation System",
          img: "img1",
          skills: ["Next.js", "Mongo DB", "Back-End"],
          link: "https://github.com/kmr-sahil/auth-w-next.js",
          desc: "A comprehensive authentication system enabling login, signup, profile info, and password recovery via tokens and cookies.",
        },
        {
          title: "Kolor Tool",
          img: "kolor",
          skills: ["React", "Tailwind CSS", "Front-End"],
          link: "https://kolor-tool.vercel.app",
          desc: "Effortlessly create harmonious color palettes with my innovative opacity-free shade generator website.",
        },
    ]

    let i =0;

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

  return (
    <div data-aos="fade" className=' relative outline outline-l-secondary dark:outline-d-secondary  outline-[2px] rounded-xl px-[1rem]  mb-[6rem] laptop:basis-[70%] laptop:mt-[6rem]'>
        <div className='left-0 top-6 box-border font-mont font-bold text-[1rem] tablet-lg:text-[18px] bg-l-text dark:bg-d-accent absolute w-[8rem] rounded-sm border-r-[15px] border-r-l-primary dark:border-r-d-primary  border-t-[16px] border-b-[16px] border-t-l-text dark:border-t-d-accent border-b-l-text dark:border-b-d-accent'>
            <h1 className='absolute -top-3 left-2 text-l-primary dark:text-d-primary'>About me</h1>
        </div>
        <div className='flex flex-col justify-start items-start pt-[5rem] pb-[1rem]'>

            <p className='text-[14px] tablet-lg:text-[16px] font-over font-light text-start'>
                <span className='block pb-[1rem]'>Building <a href="https://github.com/kmr-sahil/saras-uitoolbox" className='bg-l-secondary dark:bg-d-secondary font-over px-[0.75rem] py-[0.25rem] rounded-md font-medium text-[12px] tablet-lg:text-[14px]'>UI ToolBox</a></span>
                <span className='block pb-[1rem]'>Exp <a href="" className='bg-l-secondary dark:bg-d-secondary font-over px-[0.75rem] py-[0.25rem] rounded-md font-medium text-[12px] tablet-lg:text-[14px]'>Design Intern @DailyDumbbell</a></span>
                Aspiring Frontend Engineer & UI/UX Designer with a passion for transforming ideas into reality through code & dash of creativity. <br></br>
                Currently exploring and crafting side projects to learn and grow. Eager to contribute fresh perspectives and create remarkable products.
            </p>

            <div className='w-[100%] my-[1.5rem] flex flex-col gap-[1rem] items-center'>
                <h2 className='font-mont font-bold text-[18px] tablet-lg:text-[20px] text-start self-start '>Portfolio</h2>
                <div className='flex flex-wrap justify-start items-start gap-4'> 
                {data.map((item, index) => (
                        <Project key={i++} data={item}/>
                ))}
                </div>
                
                <Link onClick={scrollToTop} to="/portfolio" className='bg-l-secondary dark:bg-d-secondary font-over font-light text-[0.5rem] tablet:text-[0.65rem] px-[12px] py-[4px] rounded-xl'>see more</Link>
            </div>

            <Achievements/>

            <div className=' flex flex-col gap-[1rem] items-center mt-[1.5rem]'>
                <h2 className='font-mont font-bold text-[18px] tablet-lg:text-[20px] text-start self-start '>Experience</h2>
                <div className='flex flex-wrap gap-1 tablet:gap-3'>
                    <span className='bg-l-secondary dark:bg-d-secondary px-[0.5rem] py-[0.25rem] font-over font-medium text-[12px] tablet:text-[14px] rounded-md'>1+ years of learning experience</span>
                    <span className='bg-l-secondary dark:bg-d-secondary px-[0.5rem] py-[0.25rem] font-over font-medium text-[12px] tablet:text-[14px] inline-block rounded-md'>4+ months of working experience</span>
                </div>
            </div>


        </div>
    </div>
  )
}

export default About