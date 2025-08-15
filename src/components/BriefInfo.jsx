import React from 'react';

function BriefInfo({ date, title, time, venue, day, description }) {
  return (
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 w-[90vw] md:w-[360px] lg:w-[390px] border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1'>
      <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block'>
        {date}
      </div>
      
      <h3 className='text-2xl font-bold text-gray-800 mb-4 font-primary'>
        {title}
      </h3>
      
      <div className='space-y-3 mb-4'>
        <div className='flex items-center gap-3 text-gray-700'>
          <span className='text-xl'>🕛</span>
          <div>
            <span className='font-medium text-sm text-gray-500'>Time:</span>
            <span className='ml-2 font-semibold'>{time}</span>
          </div>
        </div>
        
        <div className='flex items-center gap-3 text-gray-700'>
          <span className='text-xl'>📍</span>
          <div>
            <span className='font-medium text-sm text-gray-500'>Venue:</span>
            <span className='ml-2 font-semibold'>{venue}</span>
          </div>
        </div>
        
        <div className='flex items-center gap-3 text-gray-700'>
          <span className='text-xl'>🗓️</span>
          <div>
            <span className='font-medium text-sm text-gray-500'>Day:</span>
            <span className='ml-2 font-semibold'>{day}</span>
          </div>
        </div>
      </div>
      
      <div className='pt-4 border-t border-gray-100'>
        <p className='text-gray-600 max-w-[90%] font-medium leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default BriefInfo;
