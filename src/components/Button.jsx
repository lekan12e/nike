import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full bg-coral-red text-white border-coral-red'>
        {label}
        {iconURL && <img className='ml-2 rounded-full w-5 h-5' src={iconURL} alt="arrow right" />}
    </button>
  )
}

export default Button