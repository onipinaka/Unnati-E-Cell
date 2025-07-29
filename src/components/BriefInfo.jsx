import React from 'react';

function BriefInfo({icon, title, description}) {
  return (
    <>
      <div className='flex flex-col w-[80vw] lg:w-[25vw] justify-center items-center gap-1'>
        <img className='mb-2 w-[60%] h-auto' src={icon} alt="" />
        <p className='text-center font-semibold text-[clamp(1.5rem,2vw,2.125rem)]'>{title}</p>
        <p className='text-center font-normal text-[clamp(0.8rem,1.1vw,1.5rem)]'>{description}</p>
      </div>
    </>
  );
}

export default BriefInfo;
