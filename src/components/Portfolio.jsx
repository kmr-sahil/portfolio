import React from 'react'
import Project from './Project'

function Portfolio() {
  return (
    <div className='relative outline outline-l-secondary outline-[2px] rounded-xl px-[1rem] mb-[6rem] laptop:basis-[70%] laptop:mt-[6rem]'>
        <div className='left-0 top-6 box-border font-mont font-bold text-[1rem] tablet-lg:text-[18px] bg-l-text absolute w-[8rem] rounded-sm border-r-[15px] border-r-l-primary  border-t-[16px] border-b-[16px] border-t-l-text border-b-l-text'>
            <h1 className='absolute -top-3 left-2 text-l-primary'>Portfolio</h1>
        </div>
        <div className='flex flex-col justify-start items-start pt-[5rem] pb-[1rem] gap-4'>
        <Project link={'https://github.com/kmr-sahil/retro-news'} title={"Retro News"} img={"img1"} s1={"React"} s2={"Tailwind CSS"} s3={"Front-End"} para={"Reviving Nostalgia: A Modern Take on Retro Newspaper Layout – Seamlessly Fetching and Displaying News through an API."}></Project>
        <Project link={'https://github.com/kmr-sahil/kolor-tool'} title={"Kolor Tool"} img={"img1"} s1={"HTML"} s2={"Tailwind CSS"} s3={"JavaScript"} para={"Effortlessly create harmonious color palettes with my innovative opacity-free shade generator website."}></Project>
        <Project link={' https://kmr-sahil.github.io/dooze-redesign/'} title={"Dooze Redesign"} img={"img1"} s1={"HTML"} s2={"Tailwind CSS"} s3={"UI/UX"} para={"Elevated brand presence with a dynamic landing page redesign, crafting an immersive user experience at Dooze."}></Project>
        <Project link={'https://github.com/kmr-sahil/todo-app'} title={"Todo Webapp"} img={"img1"} s1={"React"} s2={"CSS Modules"} s3={"JavaScript"} para={"Crafted a sleek Todo web app for seamless task management, tracking, and intuitive UI."}></Project>

        </div>

    </div>
  )
}

export default Portfolio