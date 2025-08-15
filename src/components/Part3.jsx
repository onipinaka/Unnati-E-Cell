import React from 'react'
import Lightbtn from './buttons/Lightbtn'
import icon1 from '../assets/image.png';
import BriefInfo from './BriefInfo';

function Part3() {

  const cards = [
    {
      icon: icon1, 
      title: "Get Close", 
      description: "Elit voluptate laborum dolore anim.Elit voluptate laborum dolore anim.Elit voluptate laborum dolore anim.Elit voluptate laborum dolore anim.",
      date: "15/03/2025",
      time: "5:00 PM", 
      venue: "Manekshaw",
      day: "Monday",

    },
    {
      icon: icon1, 
      title: "Get Close", 
      description: "Elit voluptate laborum dolore anim.Elit voluptate laborum dolore anim.Elit voluptate laborum dolore anim.Elit voluptate laborum dolore anim.",
      date: "15/03/2025",
      time: "5:00 PM", 
      venue: "Manekshaw",
      day: "Monday",

    },
    {
      icon: icon1, 
      title: "Get Close", 
      description: "Elit voluptate laborum dolore anim.Elit voluptate laborum dolore anim.Elit voluptate laborum dolore anim.Elit voluptate laborum dolore anim.",
      date: "15/03/2025",
      time: "5:00 PM", 
      venue: "Manekshaw",
      day: "Monday",
    },
  ]

  return (
    <>
        <div className='flex flex-col gap-y-4'>
            <Lightbtn label="Why Mathur?" />
            <p className='text-black font-primary  text-[clamp(1.2rem,3vw,3rem)] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facilis odit perspiciatis nesciunt numquam ab quaerat.</p>
            <p className='text-black font-primary  text-[clamp(0.7rem,1.4vw,1.4rem)] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem nam id iure mollitia! Laudantium voluptates ratione nostrum.</p>
            <div className='flex flex-col md:flex-row gap-8 justify-around flex-wrap items-center '>
              {
              cards.map((card,key)=>{
                return (
                  <BriefInfo date={card.date} time={card.time} day={card.day} venue={card.venue} icon={card.icon} title={card.title} description={card.description} key={key}/>
                )
              })
              }
            </div>
        </div>
    </>
  )
}

export default Part3