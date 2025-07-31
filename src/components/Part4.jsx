import React from 'react'
import Lightbtn from './buttons/Lightbtn'
import DetailInfo from './DetailInfo'

function Part4() {
    const items =[
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, eligendi adipisci corrupti dolor omnis. lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, eligendi adipisci corrupti dolor omnis.',
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, eligendi adipisci corrupti dolor omnis.lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, eligendi adipisci corrupti dolor omnis.',
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, eligendi adipisci corrupti dolor omnis. loreem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, eligendi adipisci corrupti dolor omnis.',
        },
    ]
  return (
    <div className='flex flex-col w-full justify-center items-center gap-y-6'>
        <div>
            <Lightbtn label='How Does It Work?'/>
        </div>
        <div className='lg:w-[60vw]'>
            <p className='text-black font-primary  text-[clamp(1.2rem,3vw,3rem)] text-center font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit!</p>
        </div>
        <div className='lg:w-[60vw]' ><p className='text-black font-primary text-center text-[clamp(0.7rem,1.4vw,1.4rem)] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, eligendi adipisci corrupti dolor omnis.</p></div>
        <div className='w-full mt-16 flex flex-col gap-y-16'>
            {
                items.map((item, key)=>{
                    return <DetailInfo key={key} title={item.title} description={item.description} reverse ={key%2==0? false:true }/>
                })
            }
        </div>
    </div>
  )
}

export default Part4