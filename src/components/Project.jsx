import React from 'react'
import img1 from "../assets/doo.png"
import kolor from "../assets/kolor.png"
import dooze from "../assets/dooze.png"
import news from "../assets/news.png"
import potion from "../assets/potion.png"
import nextauth from "../assets/nextauth.png"
import pinterest from "../assets/pinterest.webp"


function Project({data}) {

  const imageMap = {
    img1: img1,
    kolor: kolor,
    news: news,
    dooze: dooze,
    potion: potion,
    nextauth: nextauth,
    pinterest: pinterest, // map other identifiers to respective images
    // Add mappings for other image identifiers
  };

  console.log(data)

  let j = 0;

  const skills = data?.skills ? Object.values(data.skills) : [];
  //const skills = Object.values(data.skills);
    
  return (
    <a href={data?.link} target='_blank' className='self-stretch flex-grow w-[100%] tablet-lg:w-[48%] h-auto bg-l-secondary dark:bg-d-secondary rounded-lg flex flex-col gap-2 tablet:gap-4 justify-start items-center px-[0.5rem] py-[0.5rem] tablet:py-[1rem] tablet:px-[1rem]'>
        <img className='h-[104px] w-full desktop:h-[80px] rounded-lg aspect-auto object-cover' src={imageMap[data?.img]} alt="img" />
        <div className='font-over flex flex-col justify-between items-start flex-wrap pt-[0.5rem] gap-2'>
            <h3 className='font-medium text-[16px] desktop:text-[18px]'>{data?.title}</h3>
            <p className='font-light text-[12px] tablet:text-[14px] desktop:text-[14px] text-start leading-[0.9rem] desktop:leading-[1rem]'>{data?.desc}</p>
            <div className='text-[10px] desktop:text-[12px] font-extralight italic flex flex-wrap gap-[0.25rem]'>
                  {skills.map((item, index) => (
                    <span key={j++} className='bg-l-primary dark:bg-d-primary px-[0.5rem] pt-[0.25rem] rounded-sm'>{item}</span>
                  ))}
                
            </div>
        </div>
    </a>
  )
}

export default Project