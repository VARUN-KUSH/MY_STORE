import React from 'react'

const Button = ({children,
                className = "",
                type='button',
                ...props}) => {
  return (
    <div className='bg-indigo-500'>
      <button type={type}>{children}</button>
      </div>
  )
}

export default Button