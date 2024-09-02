import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className='text-white px-10 py-1 rounded-sm border border-white border-opacity-60 bg-gradient-to-r from-red-600 to-blue-700'>{text}</button>
    </div>
  )
}

export default Button