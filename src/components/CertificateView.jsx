import React from 'react'

function CertificateView() {
  return (
    <div className="flex justify-center items-center bg-gray-50 p-4">
      <div className="bg-white p-3 max-w-md w-full relative shadow-lg">
        <div className="absolute inset-1.5 border border-gray-800" style={{
          borderImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, #374151 3px, #374151 6px) 1'
        }}>
          <div className="absolute inset-1 border" style={{
            borderImage: 'repeating-linear-gradient(0deg, #d1d5db 0px, #d1d5db 3px, transparent 3px, transparent 6px) 1'
          }}></div>
        </div>

        <div className="relative z-10 text-center py-3 px-3">
          <h1 className="text-xl font-bold text-black mb-3" style={{
            fontFamily: 'Old English Text MT, serif',
            textShadow: '1px 1px 1px rgba(0,0,0,0.2)'
          }}>
            Certificate of Appreciation
          </h1>

          <div className='mb-2'>
            <p className="text-xs italic text-black font-serif">
              This Certificate is hereby awarded to
            </p>
          </div>

          <div className="mb-2">
            <div className="border-b border-black mx-auto w-32 h-4 flex items-end justify-center">
              <span className="text-xs font-serif font-semibold text-black pb-1">BooBies</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs italic text-black font-serif">
              in recognition of
            </p>
          </div>

          <div className="mb-5">
            <div className="border-b border-black mx-auto w-fit h-4 flex items-end justify-center">
              <span className="text-xs font-serif font-semibold text-black pb-1">Outstanding Performance in Unnati 5.0</span>
            </div>
          </div>

          <div className="flex justify-between items-end mt-5">
            <div className="text-left flex flex-col gap-y-2">
              <p className="text-xs italic font-serif text-black mb-1">Given by:</p>
              <div className="border-b border-black w-24 h-3 flex items-end">
                <span className="text-xs font-serif text-black font-semibold pb-0.5">I&E Cell, AIT</span>
              </div>
            </div>

            
          </div>
        </div>

        <div className="absolute top-0.5 left-0.5 w-3 h-3 border-l border-t border-gray-600"></div>
        <div className="absolute top-0.5 right-0.5 w-3 h-3 border-r border-t border-gray-600"></div>
        <div className="absolute bottom-0.5 left-0.5 w-3 h-3 border-l border-b border-gray-600"></div>
        <div className="absolute bottom-0.5 right-0.5 w-3 h-3 border-r border-b border-gray-600"></div>
      </div>
    </div>
  )
}

export default CertificateView