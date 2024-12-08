import React from 'react'

function SectionHead({ title, subtitle }) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-gray-600'>{subtitle}</p>
    </div>
  )
}

export default SectionHead