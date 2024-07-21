import React from 'react'
import './Button.css'

const Button = ({ type, text, icon: Icon }) => {
  return (
    <button className={`button ${type}`}>
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  )
}

export default Button
