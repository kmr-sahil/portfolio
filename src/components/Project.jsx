import React from 'react'
import img1 from "../assets/doo.png"
import kolor from "../assets/kolor.png"
import dooze from "../assets/dooze.png"
import news from "../assets/news.png"


function Project({data}) {

  const imageMap = {
    img1: img1,
    kolor: kolor,
    news: news,
    dooze: dooze, // map other identifiers to respective images
    // Add mappings for other image identifiers
  };

  console.log(imageMap[data?.img])

  let j = 0;

  const skills = data?.skills ? Object.values(data.skills) : [];
  //const skills = Object.values(data.skills);
    
  return (
    <a href={data?.link} target='_blank' className='self-stretch bg-l-secondary dark:bg-d-secondary rounded-lg flex gap-4 justify-start items-center px-[0.5rem] py-[0.25rem] tablet:py-[0.5rem] tablet:px-[1rem]'>
        <img className='w-[64px] h-[64px] desktop:w-[80px] desktop:h-[80px] rounded-lg aspect-auto object-cover' src={imageMap[data?.img]} alt="img" />
        <div className='font-over flex flex-col justify-between items-start flex-wrap py-[0.5rem]'>
            <h3 className='font-medium text-[12px] desktop:text-[1rem]'>{data?.title}</h3>
            <p className='font-light text-[8px] tablet-lg:text-[10px] desktop:text-[12px] text-start leading-[0.625rem] desktop:leading-[1rem]'>{data?.desc}</p>
            <div className='text-[8px] font-extralight italic flex gap-[0.25rem] mt-1'>
                  {skills.map((item, index) => (
                    <span key={j++} className='bg-l-primary dark:bg-d-primary px-[0.5rem] py-[1px] rounded-sm'>{item}</span>
                  ))}
                
            </div>
        </div>
    </a>
  )
}

export default Project