import React from 'react'
import CertificateView from './CertificateView'

function BrowserScreen() {
  return (
    <div>
        <div className='flex flex-row justify-start gap-2 py-2 px-3 bg-black rounded-t-xl'>
            <div className='w-4 h-4 rounded-full bg-white'></div>
            <div className='w-4 h-4 rounded-full bg-white'></div>
            <div className='w-4 h-4 rounded-full bg-white'></div>
            
           

        </div>
        <div><CertificateView/>
        </div>
    </div>
  )
}

export default BrowserScreen