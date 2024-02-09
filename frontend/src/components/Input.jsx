import React, {useId, forwardRef} from 'react'

const Input = forwardRef(({label,
    type = "text",
    classNames = "",
    ...props}, ref) => {
        const id = useId()
  return (
    <div>
        {label && <label
        className=''
        htmlFor={id}>{label}</label>}
        <input 
        className={`${classNames} underline`}
        type = {type}
        ref={ref}
        {...props}
        id={id}></input>
    </div>
  )
}
)

export default Input