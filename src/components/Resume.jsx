import React from 'react'
import res from '../assets/Resume.pdf'
import Achievements from './Achievements'

function Resume() {
  return (
    <div data-aos="fade" className=' relative outline outline-l-secondary dark:outline-d-secondary outline-[2px] rounded-xl px-[1rem] mb-[6rem] laptop:basis-[70%] laptop:mt-[6rem]'>
        <div className='left-0 top-6 box-border font-mont font-bold text-[1rem] tablet-lg:text-[18px] bg-l-text dark:bg-d-accent absolute w-[8rem] rounded-sm border-r-[15px] border-r-l-primary dark:border-r-d-primary  border-t-[16px] border-b-[16px] border-t-l-text dark:border-t-d-accent border-b-l-text dark:border-b-d-accent'>
            <h1 className='absolute -top-3 left-2 text-l-primary dark:text-d-primary'>Resume</h1>
        </div>
        <div className='flex flex-col justify-start items-start pt-[5rem] pb-[1rem]'>

            <p className='text-[12px] tablet-lg:text-[14px] font-over font-light text-start'>
            Aspiring Frontend Engineer & UI/UX Designer with a passion for transforming ideas into reality through code & dash of creativity. <br></br>
            Currently exploring and crafting side projects to learn and grow. Eager to contribute fresh perspectives and create remarkable products.
            </p>

            <div className='w-[100%] my-[1rem] flex flex-col gap-[1rem] items-start'>

                <h2 className='font-mont font-bold text-[1rem] tablet-lg:text-[18px] text-start self-start'>Experience</h2>

                <div className='self-stretch flex flex-col justify-start items-start gap-2 grow bg-l-secondary dark:bg-d-secondary rounded-md font-over px-[1rem] py-[0.5rem]'>
                    <h2 className='font-medium text-[12px] tablet-lg:text-[15px] text-start'>Design Intern</h2>
                    <p className='text-start font-light text-[12px]'>
                        Jul 2022 - Nov 2022 <br></br>
                        DailyDumbbell
                    </p>
                    <p className='text-start font-light text-[12px] leading-4'>
                    Worked on establishing a compelling social media presence for the brand while also contributing to the design of the user interface for both the website and app. <br></br>
                    Tools & Skills used - <span className='font-medium text-[10px] italic'> Figma, Canva, Photoshop, UI/UX & Visual Identity</span>
                    </p>
                </div>
            </div>

            <div className='w-[100%] my-[1rem] flex flex-col gap-[1rem] items-start'>

                <h2 className='font-mont font-bold text-[1rem] tablet-lg:text-[18px] text-start self-start'>Tech Stack</h2>

                <div className='self-stretch flex justify-between items-start gap-2 grow bg-l-secondary dark:bg-d-secondary rounded-md font-over px-[1.5rem] tablet:pr-[6rem] py-[1rem]'>
                    <div className='flex flex-col items-start font-over font-light text-[14px] gap-2'>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:html"></iconify-icon> <p className='mt-[4px]'>HTML</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:css"></iconify-icon> <p className='mt-[4px]'>CSS</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:javascript"></iconify-icon> <p className='mt-[4px]'>JavaScript</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:react-dark"></iconify-icon> <p className='mt-[4px]'>React</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:tailwindcss-dark"></iconify-icon> <p className='mt-[4px]'>Tailwind CSS</p></span>

                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:expressjs-dark"></iconify-icon> <p className='mt-[4px]'>Express.js</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:mongodb"></iconify-icon> <p className='mt-[4px]'>Mongo DB</p></span>
                    </div>
                    <div className='flex flex-col items-start font-over font-light text-[14px] gap-2'>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:java-light"></iconify-icon> <p className='mt-[4px]'>Java</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:nextjs-dark"></iconify-icon> <p className='mt-[4px]'>Next.js</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:nodejs-dark"></iconify-icon> <p className='mt-[4px]'>Node.js</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:typescript"></iconify-icon> <p className='mt-[4px]'>TypeScript</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:git"></iconify-icon> <p className='mt-[4px]'>Git</p></span>
                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:figma-dark"></iconify-icon> <p className='mt-[4px]'>Figma</p></span>

                        <span className='flex items-center justify-center gap-3'> <iconify-icon style={{"font-size": "20px"}} icon="skill-icons:docker"></iconify-icon> <p className='mt-[4px]'>Docker</p></span>
                    </div>
                </div>
            </div>

            <div className='w-[100%] mt-[1rem] mb-[2rem] flex flex-col gap-[1rem] items-start'>

                <h2 className='font-mont font-bold text-[1rem] tablet-lg:text-[18px] text-start self-start'>Education</h2>

                <div className='self-stretch flex flex-col justify-start items-start gap-2 grow bg-l-secondary dark:bg-d-secondary rounded-md font-over px-[1rem] py-[0.5rem]'>
                    <h2 className='font-medium text-[12px] text-start'>Bachelor In Technology (Information Technology)</h2>
                    <p className='text-start font-light text-[12px]'>
                        2021 - Present <br></br>
                        Techno International Newtown
                    </p>
                </div>

                <div className='self-stretch flex flex-col justify-start items-start gap-2 grow bg-l-secondary dark:bg-d-secondary rounded-md font-over px-[1rem] py-[0.5rem]'>
                <h2 className='font-medium text-[12px] text-start'>ISC - (Computer Science)</h2>
                    <p className='text-start font-light text-[12px]'>
                        2019 - 2021 <br></br>
                        BGES (ISC)
                    </p>
                </div>

                <div className='self-stretch flex flex-col justify-start items-start gap-2 grow bg-l-secondary dark:bg-d-secondary rounded-md font-over px-[1rem] py-[0.5rem]'>
                <h2 className='font-medium text-[12px] text-start'>ISCE - (Science)</h2>
                    <p className='text-start font-light text-[12px]'>
                        2009 - 2019 <br></br>
                        Loyola High School
                    </p>
                </div>

            </div>

            <Achievements/>


            <a href={res} download="resume" className='mt-[2rem] self-stretch flex justify-center items-baseline gap-2 grow bg-l-secondary dark:bg-d-secondary rounded-md font-over font-light text-[12px] text-l-text dark:text-d-text px-[1rem] py-[0.5rem]'>
                <i className="fa-solid fa-file-arrow-down"></i>
                Download Resume
            </a>

        </div>
    </div>
  )
}

export default Resume
