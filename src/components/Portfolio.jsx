import React from 'react'
import Project from './Project'


function Portfolio() {

  const data = [
    {
      title: "Auctiontable",
      img: "auction",
      skills: ["Next.js", "MongoDB", "Tailwind CSS"],
      link: "https://first-steps-zeta.vercel.app/",
      desc: "Led creation of an exhilarating online auction platform, optimizing user experience for seamless buying and selling.",
    },
    {
      title: "Authentitcation System",
      img: "nextauth",
      skills: ["Next.js", "Mongo DB", "Tailwind CSS"],
      link: "https://github.com/kmr-sahil/auth-w-next.js",
      desc: "A comprehensive authentication system enabling login, signup, profile info, and password recovery via tokens and cookies.",
    },
    {
      title: "Pinterest Clone",
      img: "pinterest",
      skills: ["Tailwind CSS", "Express.js", "Passport.js"],
      link: "https://github.com/kmr-sahil/pin",
      desc: "Made Pinterest clone which has the functionality of login/signup, uploading pins, exploring feed & profile picture updation.",
    },
    {
      title: "Contact Manager",
      img: "img1",
      skills: ["Node.js", "Express.js", "Back-End"],
      link: "https://github.com/kmr-sahil/Contact-Manager",
      desc: "A secure backend project enabling user account creation and CRUD operations for managing contact information using JWT.",
    },
    {
      title: "Potion",
      img: "potion",
      skills: ["Node.js", "Express.js", "Back-End"],
      link: "https://github.com/kmr-sahil/docs",
      desc: "Revolutionary todo app with vibrant and playful UI, prioritizing user engagement and dynamic task management",
    },
    {
      title: "Retro News",
      img: "news",
      skills: ["React", "Tailwind CSS"],
      link: "https://retro-news-nine.vercel.app",
      desc: "Reviving Nostalgia: A Modern Take on Retro Newspaper Layout – Seamlessly Fetching and Displaying News through an API.",
    },
    {
      title: "Dooze",
      img: "dooze",
      skills: ["Tailwind CSS", "Figma", "UI/UX"],
      link: "https://kmr-sahil.github.io/dooze-redesign/",
      desc: "Elevated brand presence with a dynamic landing page Re-design, crafting an well organize User Interface at Dooze.",
    },
  ]

  let i = 0;

  return (
    <div data-aos="fade" className='relative outline outline-l-secondary dark:outline-d-secondary outline-[2px] rounded-xl px-[1rem] mb-[6rem] laptop:basis-[70%] laptop:mt-[6rem]'>
        <div className='left-0 top-6 box-border font-mont font-bold text-[1rem] tablet-lg:text-[18px] bg-l-text dark:bg-d-accent absolute w-[8rem] rounded-sm border-r-[15px] border-r-l-primary dark:border-r-d-primary  border-t-[16px] border-b-[16px] border-t-l-text dark:border-t-d-accent border-b-l-text dark:border-b-d-accent'>
            <h1 className='absolute -top-3 left-2 text-l-primary dark:text-d-primary'>Portfolio</h1>
        </div>
        <div className='flex flex-wrap justify-evenly items-start pt-[5rem] pb-[1rem] gap-4'>

          {data.map((item, index) => (
             <Project key={i++} data={item}/>
          ))}

        </div>

    </div>
  )
}

export default Portfolio