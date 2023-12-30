import React from 'react'
import Project from './Project'

function Portfolio() {

  const data = [
    {
      title: "Retro News",
      img: "img1",
      skills: ["React", "Tailwind CSS"],
      link: "https://github.com/kmr-sahil/retro-news",
      desc: "Reviving Nostalgia: A Modern Take on Retro Newspaper Layout – Seamlessly Fetching and Displaying News through an API.",
    },
    {
      title: "Kolor Tool",
      img: "img1",
      skills: ["React", "Tailwind CSS", "Front-End"],
      link: "https://github.com/kmr-sahil/retro-news",
      desc: "Reviving Nostalgia: A Modern Take on Retro Newspaper Layout – Seamlessly Fetching and Displaying News through an API.",
    },
  ]

  let i = 0;

  return (
    <div data-aos="fade" className='relative outline outline-l-secondary dark:outline-d-secondary outline-[2px] rounded-xl px-[1rem] mb-[6rem] laptop:basis-[70%] laptop:mt-[6rem]'>
        <div className='left-0 top-6 box-border font-mont font-bold text-[1rem] tablet-lg:text-[18px] bg-l-text dark:bg-d-accent absolute w-[8rem] rounded-sm border-r-[15px] border-r-l-primary dark:border-r-d-primary  border-t-[16px] border-b-[16px] border-t-l-text dark:border-t-d-accent border-b-l-text dark:border-b-d-accent'>
            <h1 className='absolute -top-3 left-2 text-l-primary dark:text-d-primary'>Portfolio</h1>
        </div>
        <div className='flex flex-col justify-start items-start pt-[5rem] pb-[1rem] gap-4'>

          {data.map((item, index) => (
             <Project key={i++} data={item}/>
          ))}

        </div>

    </div>
  )
}

export default Portfolio