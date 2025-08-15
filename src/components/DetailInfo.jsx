import React from 'react'
import img from '../assets/sample.png'
import CertificateView from './CertificateView'
import BrowserScreen from './BrowserScreen'

function DetailInfo({title, description, reverse}) {
  return (
    <>
        <div style={reverse? {flexDirection: "row-reverse"}: {}} className='flex flex-row w-full justify-around '>
            <div className='lg:max-w-[30vw]'>
              <p className='text-start font-semibold font-primary mb-2 text-black text-[clamp(1.5rem,2vw,2.125rem)]'>{title}</p>
              <p className='text-start font-normal font-primary text-black text-[clamp(0.8rem,1.1vw,1.5rem)]'>{description}</p>
            </div>
            <div>
              <BrowserScreen/>
            </div>
        </div>
    </>
  )
}

export default DetailInfo