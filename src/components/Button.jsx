import React from 'react'
import './Button.css'

const Button = ({ type, text, icon: Icon, onClick }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  )
}

export default Button
