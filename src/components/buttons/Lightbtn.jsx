import React from 'react'

function Lightbtn({label = "Why Mathur"}) {
  return (
    <div className='bg-theme-light-purple h-fit w-fit py-1 px-4 rounded-full '>
        <p className='text-theme-dark-purple font-medium text-[clamp(1rem,3vw,1.5rem)]'>{label}</p>
    </div>
  )
}

export default Lightbtn